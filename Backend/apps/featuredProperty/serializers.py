from rest_framework import serializers
from .models import *

class PropertyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyImage
        fields = '__all__'

class PropertyStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'

class PropertyThumbnailSerializer(serializers.ModelSerializer):
    status = PropertyStatusSerializer(readonly=True)
    images = PropertyImageSerializer(readonly=True, many=True)
    class Meta:
        model = FeaturedProperty
        fields = ('id', 'status', 'title', 'price', 'location', 'images')