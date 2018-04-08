from django.contrib import admin
from .models import Author, Book, Publisher
from easy_select2 import select2_modelform


# Register your models here.
@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
	pass


BookForm = select2_modelform(Book, attrs={'width': '250px'})


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
	form=BookForm


PublisherForm = select2_modelform(Publisher, attrs={'width': '250px'})

@admin.register(Publisher)
class PublisherAdmin(admin.ModelAdmin):
	form=PublisherForm

