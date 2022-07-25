from django.urls import path
from . import views

urlpatterns = [
    path('usernameExists/', views.username_exists),
    path('addUser/', views.add_user),
    path('editField/', views.edit_field),
    path('editProfile/', views.edit_profile),
    path('getProfile/', views.get_profile),
    path('verifyPassword/', views.verify_password),
    path('getSpheresGlance/', views.get_spheres_glance),
    path('uploadImage/', views.upload_image),
    path('deleteImage/', views.delete_image),
]