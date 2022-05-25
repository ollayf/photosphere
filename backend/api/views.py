from email import parser
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
import firebase_admin
from firebase_admin import firestore
from env import service_acc_key
import hashlib
import datetime

# Create your views here.
def say_hello(request):
    db = firestore.client()
    ref = db.collection(u'users')
    docs = ref.stream()
    for doc in docs:
        print(doc.to_dict())  
    return HttpResponse(repr(docs))

@api_view(["GET"])
@parser_classes([JSONParser])
def username_exists(req):
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
    data = req.data
    data["dateJoined"] = datetime.datetime.now(tz=datetime.timezone.utc)
    db = firestore.client()
    ref = db.collection(u'users').document().set(data)
    # docs = ref.stream()
    # for doc in docs:
    #     print(doc.to_dict())  
    return Response(status=status.HTTP_201_CREATED)

@api_view(["POST"])
@parser_classes([JSONParser])
def edit_user(req):
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