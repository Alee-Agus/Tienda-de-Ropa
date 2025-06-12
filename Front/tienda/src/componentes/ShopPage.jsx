import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';


import axios from 'axios';

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/productos.json')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  return (
    <div className="shop-page">
      <Header />

      <main className="main-content">
        <div className="products-header">
          <h1 className="products-title">Nuestra Colección</h1>
          <p className="products-subtitle">
            Descubre las últimas tendencias en moda con nuestra selección de ropa de calidad
          </p>
        </div>
        
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShopPage;
