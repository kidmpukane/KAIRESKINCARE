# Generated by Django 5.0 on 2024-01-04 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recommendations', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='skin_types',
            field=models.CharField(default='None Specified', max_length=500),
        ),
    ]
