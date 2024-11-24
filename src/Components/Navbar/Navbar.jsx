import './Navbar.css';
import logo from '../assets/logo1.png';
import cartIcon from '../assets/cart_icon.png';
import navIcon from '../assets/navicon.svg';
import { useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop");
  const menuRef = useRef();
  const { cartItem } = useContext(ShopContext);

  const toggleMenu = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const getTotalCartCount = () => {
    return Object.values(cartItem).reduce((total, count) => total + count, 0);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
      </div>

      <img className="nav-toggle-icon" onClick={toggleMenu} src={navIcon} alt="Menu Icon" />

      <ul ref={menuRef} className="nav-menu">
        {["shop", "mens", "womens", "kids"].map((menuItem) => (
          <li key={menuItem} onClick={() => setActiveMenu(menuItem)}>
            <Link to={`/${menuItem === "shop" ? "" : menuItem}`}>
              {menuItem.charAt(0).toUpperCase() + menuItem.slice(1)}
            </Link>
            {activeMenu === menuItem && <hr />}
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <Link to="/login">
          <button className="nav-login-btn">Login</button>
        </Link>

        <Link to="/cart">
          <img src={cartIcon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartCount()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
