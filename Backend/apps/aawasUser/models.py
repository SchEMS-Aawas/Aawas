from django.db import models

# Create your models here.
class MemberShip(models.Model):
    type = models.CharField(max_length=20)

    def __str__(self):
        return self.type

class Gender(models.Model):
    type = models.CharField(max_length=10)

    def __str__(self):
        return self.type

class User(models.Model):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField()
    password = models.CharField(max_length=23)
    phoneNumber = models.CharField(max_length=14, unique=True)
    membership = models.ForeignKey(MemberShip, on_delete=models.DO_NOTHING, related_name="membership")
    gender = models.ForeignKey(Gender, on_delete=models.DO_NOTHING, related_name="gender")

    def __str__(self):
        return self.email
    
