from rest_framework import serializers
from .models import Products
import numpy as np


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'


class NumpyArrayField(serializers.ListField):
    child = serializers.FloatField()

    def to_internal_value(self, data):
        return np.array(data)


class PredictRequestSerializer(serializers.Serializer):
    quiz_answers = NumpyArrayField()
