from django.db import models


name=(
	('abc1', 'ABC1'),
	('abc2', 'ABC2'),
	('abc3', 'ABC3'),
)


# Create your models here.
class Author(models.Model):
   name = models.CharField(max_length=100)


class Dummy(models.Model):
	d = models.CharField(max_length=100, choices=name)

class Book(models.Model):
   author = models.ForeignKey(Author, on_delete=models.CASCADE)
   title = models.CharField(max_length=100)
   sm = models.ForeignKey(Dummy, on_delete=models.CASCADE, default=None)