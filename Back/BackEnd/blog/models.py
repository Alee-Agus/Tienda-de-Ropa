from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):  # Hereda de la clase de usuario base de Django
    email = models.EmailField(unique=True)  # Email obligatorio y único
    address = models.TextField(blank=True)  # Dirección opcional (texto largo)

    def __str__(self):
        return self.username  # Cómo se mostrará el usuario en admin o print

class Category(models.Model):
    name = models.CharField(max_length=100)  # Nombre de la categoría (ej: "Hombre", "Calzado")

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=200)  # Nombre del producto
    description = models.TextField()         # Descripción larga
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Precio con 2 decimales
    stock = models.PositiveIntegerField()    # Cantidad disponible
    sizes = models.JSONField(default=list)   # Lista de talles (JSON) ej: ["S", "M", "L"]
    image_url = models.URLField()            # URL de la imagen (en Cloudinary, Imgur, etc.)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)  # Relación con categoría

    def __str__(self):
        return self.name

class Order(models.Model):
    STATUS_CHOICES = [                      # Opciones de estado de la orden
        ('pending', 'Pending'),
        ('paid', 'Paid'),
        ('shipped', 'Shipped'),
    ]

    user = models.ForeignKey('User', on_delete=models.CASCADE)  # Quién hizo la compra
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')  # Estado
    total = models.DecimalField(max_digits=10, decimal_places=2)  # Total de la orden
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha de creación

    def __str__(self):
        return f"Order #{self.pk} - {self.user.username}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')  # A qué orden pertenece
    product = models.ForeignKey(Product, on_delete=models.CASCADE)  # Qué producto es
    quantity = models.PositiveIntegerField()  # Cantidad de unidades compradas
    size = models.CharField(max_length=10)    # Talle seleccionado (S, M, L, etc.)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Precio del producto en el momento de compra

    def __str__(self):
        return f"{self.quantity} x {self.product.name} ({self.size})"

class Payment(models.Model):
    METHOD_CHOICES = [
        ('card', 'Card'),
        ('paypal', 'PayPal'),
        ('manual', 'Manual'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('declined', 'Declined'),
    ]

    order = models.OneToOneField(Order, on_delete=models.CASCADE)  # Pago asociado a una sola orden
    method = models.CharField(max_length=10, choices=METHOD_CHOICES)  # Medio de pago
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')  # Estado del pago
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha del registro

    def __str__(self):
        return f"Payment for Order #{self.order.id}"


