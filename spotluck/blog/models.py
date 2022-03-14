from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Users(models.Model):
    u_id = models.IntegerField()
    name = models.CharField(max_length=100)
    location_address = models.TextField()
    phone_number = models.IntegerField()
    email_address = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    b_id = models.IntegerField()
    s_id = models.IntegerField()

    def __str__(self):
        return self.u_id

class Orders(models.Model):
    o_id = models.IntegerField()
    #b_id = models.ForeignKey(Users, on_delete=models.DO_NOTHING)
    #s_id = models.ForeignKey(Users, on_delete=models.DO_NOTHING)
    #PURCHASED_CHOICES = [(YES, 'Yes'), (NO, 'No')]
    #purchased = models.CharField(choices=PURCHASED_CHOICES, default=NO) ########################################
    purchased = models.CharField(max_length=100)

    def __str__(self):
        return self.o_id

class Items(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    unit_price = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name

class Includes(models.Model):
    includes_id = models.IntegerField()
    o_id = models.ForeignKey(Orders, on_delete=models.DO_NOTHING)
    item_id = models.ForeignKey(Items, on_delete=models.DO_NOTHING)
    quantity = models.IntegerField()

    def __str__(self):
        return self.includes_id
