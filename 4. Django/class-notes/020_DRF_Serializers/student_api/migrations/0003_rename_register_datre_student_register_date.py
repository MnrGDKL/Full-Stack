# Generated by Django 4.0.5 on 2022-06-11 10:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('student_api', '0002_student_register_datre'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='register_datre',
            new_name='register_date',
        ),
    ]