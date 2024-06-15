
from django.contrib import admin

from .models import *

# Register your models here.
admin.site.register(Status)

class ImagesInline(admin.StackedInline):
    model = PropertyImage
    extra = 0

class PropertyInline(admin.ModelAdmin):
    inlines = [ImagesInline, ]

admin.site.register(FeaturedProperty, PropertyInline)
