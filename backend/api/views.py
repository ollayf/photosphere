from email import parser
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser, MultiPartParser
from rest_framework.response import Response
from rest_framework import status
import firebase_admin
from firebase_admin import firestore, storage
import hashlib
import datetime
from passlib.hash import pbkdf2_sha256
from django.core.files.uploadedfile import TemporaryUploadedFile, InMemoryUploadedFile
import os
import datetime
from .Equirec2Perspec import Equirectangular

@api_view(["POST"])
@parser_classes([JSONParser])
def username_exists(req):
    required_data = {
        "username": str
    }
    uname = req.data["username"]

    db = firestore.client()
    users_ref = db.collection(u'users')
    query = users_ref.where(u'username', u'==', u'{}'.format(uname))
    num_res = len(query.get())
    if not num_res:
        return Response(status=status.HTTP_404_NOT_FOUND)
    elif num_res == 1:
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_300_MULTIPLE_CHOICES)

@api_view(["POST"])
@parser_classes([JSONParser])
def email_exists(req):
    required_data = {
        "email": str
    }
    email = req.data["email"]

    db = firestore.client()
    users_ref = db.collection(u'users')
    query = users_ref.where(u'email', u'==', u'{}'.format(email))
    num_res = len(query.get())
    if not num_res:
        return Response(status=status.HTTP_404_NOT_FOUND)
    elif num_res == 1:
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_300_MULTIPLE_CHOICES)

@api_view(["POST"])
@parser_classes([JSONParser])
def add_user(req):
    required_data = {
        'email': str,
        'username': str,
        'password': str, # raw text
        'firstname': str,
        'lastname': str,
        'type': str,
        'power': int,
    }

    data = req.data
    data["dateJoined"] = datetime.datetime.now(tz=datetime.timezone.utc)
    password = data["password"] 
    pw_hash = pbkdf2_sha256.encrypt(password, rounds=12000, salt_size=32)
    data['pw_hash'] = pw_hash
    data.pop('password')
    db = firestore.client()

    # empty for a fresh account
    data['friends'] = []
    data['spheres'] = []
    ref = db.collection(u'users').document()
    userId = ref.id
    ref.set(data)
    payload = {
        'userId': userId
    }
    # docs = ref.stream()
    # for doc in docs:
    #     print(doc.to_dict())  
    return JsonResponse(payload, status=status.HTTP_201_CREATED)

@api_view(["POST"])
@parser_classes([JSONParser])
def verify_password(req):
    required_data = {
        'email': str,
        'username': str, # optional
        'password': str # raw text
    }
    db = firestore.client()
    col_ref = db.collection(u'users')
    data = req.data
    if 'username' in data.keys() and data['username']:
        username = data['username']
        query = col_ref.where(u'username', u'==', u'{}'.format(username))
    else: # use email instead
        email = data['email']
        query = col_ref.where(u'email', u'==', u'{}'.format(email))

    users = query.get()
    user_ref = users[0]
    user_info = user_ref.to_dict()
    pw_hash = user_info['pw_hash']

    password_input = data['password']
    pw_hash = pbkdf2_sha256.verify(password_input, pw_hash)

    payload = {
        "userId": user_ref.id,
        "username": user_info['username'],
        "email": user_info['email'],
        'firstname': user_info['firstname'],
        'lastname': user_info['lastname'],
        'spheres_count': len(user_info['spheres'])
    }

    if pw_hash:
        return JsonResponse(payload, status= status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(["POST"])
@parser_classes([JSONParser])
def check_password(req):
    required_data = {
        'userId': str,
        'pw': str, # raw text
    }
    db = firestore.client()
    data = req.data
    user_ref = db.collection(u'users').document(data['userId']).get()
    user_info = user_ref.to_dict()
    pw_hash = user_info['pw_hash']

    password_input = data['pw']
    pw_hash = pbkdf2_sha256.verify(password_input, pw_hash)

    if pw_hash:
        return Response(status= status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(["PUT"])
@parser_classes([JSONParser])
def change_password(req):
    required_data = {
        'userId': str,
        'new_pw': str, # raw text
    }
    db = firestore.client()
    data = req.data
    password = data['new_pw']
    user_ref = db.collection(u'users').document(data['userId'])
    user_ref.update({'pw_hash': pbkdf2_sha256.encrypt(password, rounds=12000, salt_size=32)})

    return Response(status= status.HTTP_200_OK)

@api_view(["PUT"])
@parser_classes([JSONParser])
def edit_field(req):
    required_data = {
        'userId': str,
        'field': str,
        'result': None # the final result of the edit
    }

    data = req.data
    field = data["field"]

    userId = data['userId']
    db = firestore.client()
    col_ref = db.collection(u'users').document(userId).get()

    # end if there are more than one user
    # TODO Check if the field exists
    col_ref.document(userId).update({field: data["result"]})

    return Response(status=status.HTTP_200_OK)

@api_view(["PUT"])
@parser_classes([JSONParser])
def edit_profile(req):
    required_data = {
        'userId': str,
        'username': str,
        'email': str,
        'firstname': str,
        'lastname': str
    }
    print("Inside now")

    data = req.data

    userId = data['userId']
    db = firestore.client()

    new_data = dict()

    for key in data.keys():
        if (not key == 'userId') and data[key]:
            new_data[key] = data[key]

    # edit in the database
    db.collection(u'users').document(userId).update(new_data)

    return Response(status=status.HTTP_200_OK)

@api_view(["PUT"])
@parser_classes([JSONParser])
def edit_password(req):
    required_data = {
        'userId': str,
        'new_pw': str
    }

    data = req.data

    userId = data['userId']
    password = data['new_pw']
    db = firestore.client()

    # edit password
    pw_hash = pbkdf2_sha256.encrypt(password, rounds=12000, salt_size=32)
    db.collection(u'users').document(userId).update({'pw_hash': pw_hash})

    return Response(status=status.HTTP_200_OK)

@api_view(["POST"])
@parser_classes([JSONParser])
def get_profile(req):
    required_data = {
        'userId': str
    }

    data = req.data

    userId = data['userId']
    db = firestore.client()

    # edit password
    user_ref = db.collection(u'users').document(userId).get()
    user = user_ref.to_dict()
    spheres_count = len(user['spheres'])
    payload = {
        'userId': userId,
        'username': user['username'],
        'email': user['email'],
        'firstname': user['firstname'],
        'lastname': user['lastname'],
        'sphere_count': spheres_count
    }

    return JsonResponse(payload, status=status.HTTP_200_OK)

@api_view(["POST"])
@parser_classes([JSONParser])
def get_spheres_glance(req):
    required_data = {
        'userId': str,
    }
    print("Inside now")
    data = req.data
    userId = data['userId']
    db = firestore.client()
    col_ref = db.collection(u'users').document(userId).get()
    user = col_ref.to_dict()
    spheres = user['spheres']
    print(spheres)

    index = 0
    payload = []
    for sphere in spheres:
        col_ref = db.collection(u'spheres').document(sphere).get()
        sphere_info = col_ref.to_dict()
        payload.append({
            "id": index,
            "caption": sphere_info['caption'],
            "path": sphere_info['path'],
            "thumbnail": sphere_info["thumbnail"],
            "type": sphere_info["type"],
            "dateUploaded": sphere_info['dateUploaded']
        })
        index += 1
    return JsonResponse({"data": payload}, status= status.HTTP_200_OK)


@api_view(["POST"])
@parser_classes([MultiPartParser])
def upload_image(req):
    required_data = {
        'userId': str,
        'caption': str,
    }
    data = req.data

    exts = {
        '.jpg': 'jpeg',
        '.jpeg': 'jpeg',
        '.png': 'png'
    }

    # get user information
    print(data)
    db = firestore.client()
    doc_ref = db.collection(u'spheres').document()
    docId = doc_ref.id
    print(doc_ref.id)
    file= data['file_attachment']
    name, ext = os.path.splitext(file.name)
    save_filename = f'{docId}{ext}'
    payload = {
        'caption': data['caption'],
        'dateUploaded': datetime.datetime.now(),
        'path': None,
        'thumbnail': None,
        'type': '360Image'
    }
    print(payload)
    doc_ref.set(payload)

    bucket = storage.bucket()
    if type(data['file_attachment']) == InMemoryUploadedFile:
        image_bytes = file.read()
        blob = bucket.blob(save_filename)
        print(blob)
        blob.upload_from_string(image_bytes, content_type=f'image/{exts[ext]}')
    else: # for TemporaryUploadedFile
        image_bytes = data['file_attachment'].file.read()
        blob = bucket.blob(save_filename)
        blob.upload_from_filename(file.name)

    blob.make_public()
    public_url = blob.public_url
    print("image url:", blob.public_url)

    doc_ref.update({'path': public_url, 'thumbnail': public_url})

    user_ref = db.collection(u'users').document(data['userId'])
    user_ref.update({'spheres': firestore.ArrayUnion([docId])})
    return Response(status= status.HTTP_200_OK)


@api_view(["DELETE"])
@parser_classes([JSONParser])
def delete_image(req):
    required_data = {
        'userId': str,
        'sphereId': str,
    }
    data = req.data
    # get user information
    db = firestore.client()

    user_ref = db.collection(u'users').document(data['userId'])
    user_ref.update({'spheres': firestore.ArrayRemove([data['sphereId']])})
    return Response(status= status.HTTP_200_OK)