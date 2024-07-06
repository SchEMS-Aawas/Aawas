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


class UserPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'phoneNumber')

class UserDetailsSerializer(serializers.ModelSerializer):
    membership = UserMembershipSerializer()
    gender = UserGenderSerializer()
    class Meta:
        model = User
        fields = ('username', 'email', 'phoneNumber', 'membership', 'gender')
        
class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'phoneNumber', 'membership', 'gender')
        extra_kwargs = {
            'username': {'required': False},
            'email': {'required': False},
            'phoneNumber': {'required': False},
            'username': {'required': False},
            'gender': {'required': False},
        }
