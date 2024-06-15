from rest_framework import serializers
from .models import *


class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password',)

class UserMembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberShip
        fields = '__all__'

class UserGenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = '__all__'

class UserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'phoneNumber', 'membership', 'gender')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')
