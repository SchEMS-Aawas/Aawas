from django.urls import path
from .views import *

urlpatterns=[
    path('list/', TopFeaturedPropertiesView.as_view(), name='property-list'),
    path('detail/<int:id>/', PropertyDetailView.as_view(), name='property-details'),
    path('addProperty/', AddPropertyView.as_view(), name='add-property'),
    # path('deleteProperty/', DeletePropertyView.as_view(), name='delete-property'),
    path('get/status/', StatusView.as_view(), name='status'),
    path('updateProperty/<int:id>/', UpdatePropertyView.as_view(), name='update-property'),
    path('uploadImage/', UploadPropertyImageView.as_view(), name='upload-image'),
    
]

