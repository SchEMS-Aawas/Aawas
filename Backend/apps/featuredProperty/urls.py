from django.urls import path
from .views import *

urlpatterns=[
    path('list/', TopFeaturedPropertiesView.as_view()),
    path('detail/<int:id>/', PropertyDetailView.as_view()),
    
]