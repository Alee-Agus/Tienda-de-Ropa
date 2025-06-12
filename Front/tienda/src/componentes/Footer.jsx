import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Compra</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Mujer</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Hombre</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Niños</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Ofertas</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Ayuda</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Contacto</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Envíos</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Devoluciones</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Guía de tallas</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Empresa</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Acerca de</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Carreras</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Sostenibilidad</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Prensa</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Términos</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Privacidad</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Cookies</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Accesibilidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 StyleHub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
