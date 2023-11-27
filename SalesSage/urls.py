from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('profiles/', views.ProfileList.as_view(), name='profile_list'),
    path('profiles/<int:pk>', views.ProfileDetail.as_view(), name='profile_detail'),
]