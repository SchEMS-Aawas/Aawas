from django.db import models

import cloudinary
from cloudinary.models import CloudinaryField
# Create your models here.
# class

class Status(models.Model):
    type = models.CharField(max_length=255)

    def __str__(self):
        return self.type


class LatestProperty(models.Model):
    status = models.ForeignKey(Status, on_delete=models.DO_NOTHING,related_name="status")
    title = models.CharField(max_length=255)
    Price = models.IntegerField()
    Location = models.CharField(max_length=255)
    details = models.TextField(default="")

    def __str__(self):
        return self.title
    
class PropertyImage(models.Model):
    featured_property = models.ForeignKey(LatestProperty, on_delete=models.CASCADE, related_name="property_images")

    image = CloudinaryField('image')
