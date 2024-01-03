from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .models import UserInfo
from .serializer import UserInfoSerializer


def register_user(serializer_class, request):
    serializer = serializer_class(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def user_registration(request):
    return register_user(UserInfoSerializer, request)

# .......................................EDIT USER DATA.......................................


@api_view(['PUT'])
def update_user_data(request, id, queryset, serializer_class):
    user_profiles_info_update = queryset.objects.get(pk=id)
    serializer = serializer_class(
        instance=user_profiles_info_update, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['PUT'])
def update_user_data(request, id):
    return update_user_data(request, id, UserInfo, UserInfoSerializer)
