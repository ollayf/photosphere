from email import parser
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
import firebase_admin
from firebase_admin import firestore
import hashlib
import datetime
from passlib.hash import pbkdf2_sha256

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
    ref = db.collection(u'users').document().set(data)
    # docs = ref.stream()
    # for doc in docs:
    #     print(doc.to_dict())  
    return Response(status=status.HTTP_201_CREATED)

@api_view(["POST"])
@parser_classes([JSONParser])
def verify_password(req):
    required_data = {
        'email': str,
        'username': str, # optional
        'password': str # raw text
    }
    data = req.data
    email = data['email']
    db = firestore.client()
    col_ref = db.collection(u'users')

    if data['username']:
        data = req.data
        username = data['username']
        query = col_ref.where(u'username', u'==', u'{}'.format(username))
    else: # use email instead
        data = req.data
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
        'lastname': user_info['lastname']
    }

    if pw_hash:
        return JsonResponse(payload, status= status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(["PUT"])
@parser_classes([JSONParser])
def edit_user(req):
    required_data = {
        'username': str,
        'field': str,
        'result': None # the final result of the edit
    }

    data = req.data
    field = data["field"]

    uname = data["username"]
    db = firestore.client()
    col_ref = db.collection(u'users')
    query = col_ref.where(u'username', u'==', u'{}'.format(uname))
    users = query.get()

    # end if there are more than one user
    if len(users) != 1:
        return Response(status=status.HTTP_300_MULTIPLE_CHOICES)
    
    user_ref = users[0]
    user_info = user_ref.to_dict()
    # TODO Check if the field exists
    col_ref.document(user_ref.id).update({field: data["result"]})

    return Response(status=status.HTTP_200_OK)