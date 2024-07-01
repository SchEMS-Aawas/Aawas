from rest_framework import serializers
from .models import *

from apps.aawasUser.serializers import UserPropertySerializer

class PropertyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyImage
        fields = '__all__'

class PropertyStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'

class PropertyThumbnailSerializer(serializers.ModelSerializer):
    status = PropertyStatusSerializer(read_only=True)
    images = PropertyImageSerializer(read_only=True, many=True)
    class Meta:
        model = FeaturedProperty
        fields = ('id', 'status', 'title', 'price', 'location', 'images')

class PropertyDetailSerializer(serializers.ModelSerializer):
    status = PropertyStatusSerializer(read_only=True)
    images = PropertyImageSerializer(read_only=True, many=True)
    added_by = UserPropertySerializer(read_only=True)
    class Meta:
        model = FeaturedProperty
        fields = ('id', 'status', 'title', 'price', 'location', 'details', 'images', 'added_by')

class AddPropertySerializer(serializers.ModelSerializer):
    added_by = serializers.ReadOnlyField(source = 'added_by.username')

    class Meta:
        model = FeaturedProperty
        fields = ('status', 'title', 'price', 'location', 'details', 'added_by')


        