from django.db import models
from django_random_id_model import RandomIDModel

# Create your models here.


class UserInfo(RandomIDModel):
    user_name = models.CharField(max_length=500)
    skin_type = models.CharField(max_length=500, default='Default Skin Type')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user_name}"
