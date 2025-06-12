import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/producto/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Evita que se active el onClick del card
    console.log(`Añadido al carrito: ${product.name}`);
    // Aquí iría la lógica real del carrito
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
    <div className="product-image">
      <img src={product.image} alt={product.name} />
    </div>
    
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

