from django.contrib import admin
from django.db import models
from easy_select2 import Select2
from easy_select2.widgets import SELECT2_WIDGET_JS

from .models import Note, Category


class CustomSelect2(Select2):

    class Media:
        js = SELECT2_WIDGET_JS
        js.append('js/custom_select2.js')


class NoteAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.ForeignKey: {'widget': CustomSelect2()},
        models.ManyToManyField: {'widget': CustomSelect2()},
    }


admin.site.register(Category)
admin.site.register(Note, NoteAdmin)
