from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .models import Products
from .serializers import ProductSerializer


# .......................................GET ALL PRODUCT DATA.......................................

def get_all_data(queryset, serializer_class):
    data = queryset.objects.all()
    serializer = serializer_class(data, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_all_merchant_data(request):
    return get_all_data(Products, ProductSerializer)


# .......................................GET PRODUCT BY ID.......................................

def get_product(request, id, profile_model, serializer_class):
    try:
        user_profile_data = profile_model.objects.get(pk=id)
    except profile_model.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = serializer_class(user_profile_data)
        return Response(serializer.data)


@api_view(['GET'])
def get_customer_profile(request, id):
    return get_product(request, id, Products, ProductSerializer)
