from rest_framework import serializers
from .models import FeaturedProperty


class DeletePropertySerializer(serializers.Serializer):
    id = serializers.IntegerField()

    def validate_id(self, value):
        property_instance  = FeaturedProperty.objects.filter(id=value).first()
        if not property_instance:
            raise serializers.ValidationError("property Does Not Exists.")
        user = self.context['request'].user
        if property_instance.added_by != user:
            raise serializers.ValidationError("you are not authorized to delete this property")
        return value
    

    def delete(self):
        id = self.validated_data['id']
        property_instance = FeaturedProperty.objects.get(id=id)
        property_instance.delete()