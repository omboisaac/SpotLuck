from django.db import models

# Create your models here.

'''
class Users(models.Model):
    u_id = models.primary_key()
    name = models.CharField(max_length=100)
    location_address = models.TextField()
    phone_number = models.IntegerField()
    email_address = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    b_id = models.IntegerField(unique=true)
    s_id = models.IntegerField(unique=true)

    def __str__(self):
        return self.u_id

class Orders(models.Model):
    o_id = models.primary_key()
    b_id = models.ForeignKey(Users)
    s_id = models.ForeignKey(Users)
    PURCHASED_CHOICES = [(YES, 'Yes'), (NO, 'No')]
    purchased = models.CharField(choices=PURCHASED_CHOICES, default=NO)

    def __str__(self):
        return self.o_id

class Includes(models.Model):
    includes_id = models.primary_key()
    o_id = models.ForeignKey(Orders)
    item_id = models.ForeignKey(Items)
    quantity = models.IntegerField()

    def __str__(self):
        return self.includes_id

class Items(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    unit_price = models.DecimalField(max_digits=5, max_digits=2)

    def __str__(self):
        return self.name
'''