from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import User

class UserRegisterSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
  password1 = serializers.CharField(write_only=True, required=True)
  email = serializers.EmailField(
    required=True,
    validators=[UniqueValidator(queryset=User.objects.all())],
  )

  class Meta:
    model = User
    fields = ('email', 'name', 'password', 'password1')


  def validate(self, attrs):
    if attrs['password'] != attrs['password1']:
      raise serializers.ValidationError({"password": "Password fields didn't match."})

    return attrs
  

  def create(self, validated_data):
    user = User.objects.create_user(validated_data['email'], validated_data['password'])
    user.name = validated_data['name']
    user.save()

    return user


class UserTokenPairSerializer(TokenObtainPairSerializer):
  @classmethod
  def get_token(cls, user):
    token = super(UserTokenPairSerializer, cls).get_token(user)
    token['email'] = user.email
    return token


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'name')
