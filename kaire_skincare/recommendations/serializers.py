from rest_framework.serializers import ModelSerializer
from .models import Products


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        models = Products
        fields = '__all__'
