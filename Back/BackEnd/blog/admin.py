from django.contrib import admin
from .models import User
from .models import Category
from .models import Product
from .models import Order
from .models import OrderItem
from .models import Payment


admin.site.register(User)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Payment)
# Register your models here.
