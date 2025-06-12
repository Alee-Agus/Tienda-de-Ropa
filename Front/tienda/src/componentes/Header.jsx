import React, { useState } from "react";
import {Menu, X, Search} from "lucide-react"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null);

    const categories = {
      mujer: {
        title: 'Mujer',
        subcategories: [
          { name: 'Indumentaria', items: ['Remeras', 'Pantalones', 'Vestidos', 'Buzos', 'Camperas'] },
          { name: 'Calzado', items: ['Zapatillas', 'Botas', 'Sandalias', 'Zapatos'] },
          { name: 'Accesorios', items: ['Carteras', 'Cinturones', 'Joyas', 'Gafas'] }
        ]
      },
      hombre: {
        title: 'Hombre',
        subcategories: [
          { name: 'Indumentaria', items: ['Remeras', 'Pantalones', 'Camisas', 'Buzos', 'Camperas'] },
          { name: 'Calzado', items: ['Zapatillas', 'Botas', 'Zapatos formales', 'Ojotas'] },
          { name: 'Accesorios', items: ['Relojes', 'Cinturones', 'Billeteras', 'Gorras'] }
        ]
      },
      ninos: {
        title: 'Niños',
        subcategories: [
          { name: 'Indumentaria', items: ['Remeras', 'Pantalones', 'Vestidos', 'Buzos', 'Pijamas'] },
          { name: 'Calzado', items: ['Zapatillas', 'Botas', 'Sandalias', 'Zapatos escolares'] },
          { name: 'Accesorios', items: ['Mochilas', 'Gorras', 'Medias', 'Guantes'] }
        ]
      }
    };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setActiveDropdown(null);
    };

    const handleCategoryClick =(category) => {
      setActiveDropdown(activeDropdown === category ? null : category);

    }

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo" onClick={(e) => e.preventDefault()}>
          Clothes
        </a>
        
        <nav className = "nav desktop-nav">
          <ul className="nav-links">
            {Object.entries(categories).map(([key, category]) => (
              <li 
                key={key}
                className="nav-item"
                onMouseEnter={()=> setActiveDropdown(key)}
                onMouseLeave={()=>setActiveDropdown(null)}
              >
                <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                  {category.title}
                </a>
                
                {activeDropdown === key && (
                  <div className="dropdown-menu">
                    <div className="dropdown-content">
                      {category.subcategories.map((subcategory, index) => (
                        <div key={index} className="dropdown-section">
                          <h4 className="dropdown-title">{subcategory.name}</h4>
                          <ul className="dropdown-items">
                            {subcategory.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}>
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li><a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Ofertas</a></li>

          </ul>
        </nav>
        
        <button
          className = 'mobile-menu-btn'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar productos..."
          />
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key} className="mobile-category">
                <button 
                  className="mobile-category-btn"
                  onClick={() => handleCategoryClick(key)}
                >
                  {category.title}
                  <span className={`mobile-chevron ${activeDropdown === key ? 'open' : ''}`}>▼</span>
                </button>
                
                {activeDropdown === key && (
                  <div className="mobile-subcategories">
                    {category.subcategories.map((subcategory, index) => (
                      <div key={index} className="mobile-subcategory">
                        <h4 className="mobile-subcategory-title">{subcategory.name}</h4>
                        <ul className="mobile-subcategory-items">
                          {subcategory.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a href="#" className="mobile-subcategory-item" onClick={(e) => e.preventDefault()}>
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mobile-category">
              <a href="#" className="mobile-category-link" onClick={(e) => e.preventDefault()}>
                Ofertas
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
