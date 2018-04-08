from django.db import models

# Create your models here.

class Author(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name

	def __unicode__(self):
		return self.name


class Book(models.Model):
	name = models.CharField(max_length=100)
	authors = models.ManyToManyField(Author)

	def __str__(self):
		return self.name

	def __unicode__(self):
		return self.name


class Publisher(models.Model):
	name=models.CharField(max_length=100)
	book = models.ForeignKey(Book, on_delete=models.CASCADE)

	def __str__(self):
		return self.name
		
	def __unicode__(self):
		return self.name