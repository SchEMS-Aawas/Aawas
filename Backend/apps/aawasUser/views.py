from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView



from .models import *
from .serializers import *

class LoginView(APIView):
    def get_User(self, email, password):
        try:
            return User.objects.get(email= email, password=password)
        except User.DoesNotExist:
            return None
    
    def post(self,request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = self.get_User(serializer.data['email'], serializer.data['password'])
            if user is not None:
                return Response({'token':user.pk}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid Credientials'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSignUpSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("Reached Here")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class GenderView(APIView):
    def get(self, request):
        gender = Gender.objects.all()
        serializer = UserGenderSerializer(gender, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class MemberShipView(APIView):
    def get(self, request):
        membership = MemberShip.objects.all()
        serializer = UserMembershipSerializer(membership, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)