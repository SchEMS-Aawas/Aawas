from django.urls import path
from .views import *

urlpatterns=[
    path('login/', LoginView.as_view(), name='login'),
    path('get/membership/', MemberShipView.as_view()),
    path('get/gender/', GenderView.as_view()),
    path('register/', RegisterView.as_view(), name='register'),
    
]