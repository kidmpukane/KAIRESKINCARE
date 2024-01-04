from django.db import models
from django_random_id_model import RandomIDModel


class Products(RandomIDModel):
    product_title = models.CharField(max_length=500)
    sub_title = models.CharField(max_length=500)
    ingredients = models.CharField(max_length=500)
    skin_types = models.CharField(max_length=500, default="None Specified")
    price = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.product_title}"
