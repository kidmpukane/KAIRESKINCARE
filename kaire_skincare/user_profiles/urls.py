from django.urls import path
from .import views

urlpatterns = [
    path('user-registration', views.user_registration),
]
