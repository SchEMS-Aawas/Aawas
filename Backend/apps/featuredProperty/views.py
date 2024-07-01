from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from .models import *
from .serializers import *



class TopFeaturedPropertiesView(APIView):
    def get(self, request):
        properties = FeaturedProperty.objects.all()[:8]
        serializer = PropertyThumbnailSerializer(properties, many =True)
        return Response(serializer.data)


class PropertyDetailView(APIView):
    def get(self, request, id):
        property_instance = get_object_or_404(FeaturedProperty, pk=id)
        serializer = PropertyDetailSerializer(property_instance)
        return Response(serializer.data)
    
class AddPropertyView(APIView):
    def post(self,request ):
        serializer = AddPropertySerializer(data= request.data, context={'request': request} )
        if serializer.is_valid():
            property_instance = serializer.save()
            detail_serializer = PropertyDetailSerializer(property_instance)
            return Response(detail_serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class DeletePropertyView(APIView):
    def post(self, request):
        serializer = DeletePropertySerializer(data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.delete()
            return Response({"message": "Property Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class StatusView(APIView):
    def get(self, request):
        status = Status.objects.all()
        serializer = PropertyStatusSerializer(status, many=True)
        return Response(serializer.data)
    


class UploadPropertyImageView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        files = request.FILES.getlist('images')
        property_id = request.data.get('featured_Property')

        if not property_id:
            return Response({"error": "Property ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        

        property_instance = get_object_or_404(FeaturedProperty, id=property_id)
        for file in files:
            PropertyImage.objects.create(featured_property= property_instance, image=file)

        return Response({"message": "Images Uploaded Successfully"}, status=status.HTTP_201_CREATED)