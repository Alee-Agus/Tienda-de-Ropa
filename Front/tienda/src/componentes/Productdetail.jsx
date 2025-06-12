
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Datos del producto simulados (en una app real vendría de una API)
  const products = {
    1: {
      id: 1,
      name: "Camiseta Básica Blanca",
      description: "Camiseta de algodón 100% orgánico, corte regular, perfecta para el día a día.",
      price: 29.99,
      images: [
        "https://via.placeholder.com/600x600/f8f9fa/6c757d?text=Camiseta+Frente",
        "https://via.placeholder.com/600x600/f8f9fa/6c757d?text=Camiseta+Espalda",
        "https://via.placeholder.com/600x600/f8f9fa/6c757d?text=Camiseta+Lateral",
        "https://via.placeholder.com/600x600/f8f9fa/6c757d?text=Detalle+Cuello"
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      characteristics: {
        "Material": "100% Algodón orgánico",
        "Corte": "Regular fit",
        "Cuello": "Cuello redondo",
        "Manga": "Manga corta",
        "Cuidado": "Lavado a máquina 30°C",
        "Origen": "Fabricado en Argentina"
      },
      colors: ['Blanco', 'Negro', 'Gris', 'Azul marino']
    },
    2: {
      id: 2,
      name: "Jeans Slim Fit",
      description: "Pantalones vaqueros de corte slim, tela elástica para mayor comodidad.",
      price: 79.99,
      images: [
        "https://via.placeholder.com/600x600/f8f9fa/6c757d?text=Jeans+Frente",
        "https://via.placeholder.com/600x600/f8f9fa/6c757d?text=Jeans+Espalda",
        "https://via.placeholder.com/600x600/f8f9fa/6c757d?text=Jeans+Lateral",
        "https://via.placeholder.com/600x600/f8f9fa/6c757d?text=Detalle+Bolsillo"
      ],
      sizes: ['28', '30', '32', '34', '36', '38', '40'],
      characteristics: {
        "Material": "98% Algodón, 2% Elastano",
        "Corte": "Slim fit",
        "Tiro": "Medio",
        "Cierre": "Botón y cremallera",
        "Cuidado": "Lavado a máquina 40°C",
        "Origen": "Fabricado en Argentina"
      },
      colors: ['Azul oscuro', 'Azul claro', 'Negro', 'Gris']
    }
  };

  const product = products[id] || products[1];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona un talle');
      return;
    }
    console.log(`Añadido al carrito: ${product.name}, Talle: ${selectedSize}, Cantidad: ${quantity}`);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-detail-page">
      <Header />
      
      <main className="product-detail-main">
        <div className="product-detail-container">
          <button 
            onClick={() => navigate(-1)} 
            className="back-button"
          >
            ← Volver
          </button>

          <div className="product-detail-content">
            {/* Galería de imágenes */}
            <div className="product-gallery">
              <div className="main-image">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="main-product-image"
                />
              </div>
              
              <div className="thumbnail-gallery">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} - vista ${index + 1}`}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Información del producto */}
            <div className="product-info-detail">
              <h1 className="product-title-detail">{product.name}</h1>
              <p className="product-price-detail">${product.price}</p>
              <p className="product-description-detail">{product.description}</p>

              {/* Selector de talles */}
              <div className="size-selector">
                <h3>Talle:</h3>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector de cantidad */}
              <div className="quantity-selector">
                <h3>Cantidad:</h3>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity-display">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Botón de agregar al carrito */}
              <button 
                onClick={handleAddToCart}
                className="add-to-cart-detail-btn"
              >
                Agregar al carrito
              </button>

              {/* Características del producto */}
              <div className="product-characteristics">
                <h3>Características:</h3>
                <div className="characteristics-list">
                  {Object.entries(product.characteristics).map(([key, value]) => (
                    <div key={key} className="characteristic-item">
                      <span className="characteristic-label">{key}:</span>
                      <span className="characteristic-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;