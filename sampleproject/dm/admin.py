from django.contrib import admin

# Register your models here.
from django.db import models
from django.forms import TextInput
from easy_select2.widgets import Select2

from .models import Book, Author, Dummy


class BookInline(admin.TabularInline):
	model = Book
	formfield_overrides = {
		models.CharField: {'widget': Select2()},
		models.TextField: {'widget': Select2()},
		models.ForeignKey: {'widget': Select2()},
	}


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
	inlines = [
		BookInline,
	]


@admin.register(Dummy)
class DummyAdmin(admin.ModelAdmin):
	pass