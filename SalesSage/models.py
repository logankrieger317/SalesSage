from django.db import models

# tunr/models.py
class User(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class Profile(models.Model):
    position = models.ForeignKey(User, on_delete=models.CASCADE, related_name='profile')
    age = models.IntegerField( default='none')
    
  

    def __str__(self):
        return self.position