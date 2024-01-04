from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Products
from .serializers import ProductSerializer, PredictRequestSerializer
from ml_models.models.ffnn_model import predict_skin_type
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


class predict_skin(APIView):
    def post(self, request):
        serializer = PredictRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        quiz_answers = serializer.validated_data['quiz_answers']
        predicted_skin_type = predict_skin_type(model, quiz_answers)
        return Response({'predicted_skin_type': predicted_skin_type})
