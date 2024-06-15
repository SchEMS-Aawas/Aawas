# Generated by Django 5.0.6 on 2024-06-12 14:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='FeaturedProperty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, unique=True)),
                ('price', models.CharField(max_length=14, unique=True)),
                ('location', models.CharField(max_length=255, unique=True)),
                ('status', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='status', to='featuredProperty.status')),
            ],
        ),
    ]
