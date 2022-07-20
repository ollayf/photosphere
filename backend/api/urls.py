from django.urls import path
from . import views

urlpatterns = [
    path('usernameExists/', views.username_exists),
    path('addUser/', views.add_user),
    path('editUser/', views.edit_user),
    path('verifyPassword/', views.verify_password),
    path('getSpheresGlance/', views.get_spheres_glance),
    path('uploadImage/', views.upload_image),
    # path('getSphere/', views.),
]