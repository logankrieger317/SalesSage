from django.db import models


# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    
    
    def __str__(self):
        return self.name
    
class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='profiles')
    age = models.IntegerField()
    bio = models.TextField()
    
    def __str__(self):
        return f'{self.user.name} - {self.age}'