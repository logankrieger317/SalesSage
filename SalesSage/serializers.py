from rest_framework import serializers
from .models import User,Profile

class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile = serializers.HyperlinkedRelatedField(
        view_name='profile_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = User
        fields = ('name', 'email', 'profile')
       
class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )