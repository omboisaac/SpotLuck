# Generated by Django 4.0.3 on 2022-03-13 23:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('unit_price', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('o_id', models.IntegerField()),
                ('purchased', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('u_id', models.IntegerField()),
                ('name', models.CharField(max_length=100)),
                ('location_address', models.TextField()),
                ('phone_number', models.IntegerField()),
                ('email_address', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('b_id', models.IntegerField()),
                ('s_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Includes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('includes_id', models.IntegerField()),
                ('quantity', models.IntegerField()),
                ('item_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='blog.items')),
                ('o_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='blog.orders')),
            ],
        ),
    ]
