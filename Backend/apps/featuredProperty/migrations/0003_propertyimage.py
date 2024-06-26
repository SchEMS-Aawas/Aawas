# Generated by Django 5.0.6 on 2024-06-12 15:06

import cloudinary.models
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('featuredProperty', '0002_alter_featuredproperty_price'),
    ]

    operations = [
        migrations.CreateModel(
            name='PropertyImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', cloudinary.models.CloudinaryField(max_length=255, verbose_name='image')),
                ('featured_property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property_images', to='featuredProperty.featuredproperty')),
            ],
        ),
    ]
