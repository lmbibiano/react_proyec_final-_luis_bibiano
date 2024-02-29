import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.querySelector('.barra-nave');

      if (currentScrollPos === 0) {
        navbar.classList.add('transparente');
      } else {
        navbar.classList.remove('transparente');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <header className={`barra-nave`}>
        <Link to="/" className='link-logo'>
          <img className='logo' src="../public/logo-arom.png" alt="" />
        </Link>
        <nav>
          <ul className='lista-nave'>
            <li>
              <Link to="/" className='cat-nave' id="todas">Todas</Link>
            </li>
            <li>
              <Link to="/product/kawasaki" className='cat-nave' id="kawasaki">Kawasaki</Link>
            </li>
            <li>
              <Link to="/product/honda" className='cat-nave' id="honda">Honda</Link>
            </li>
            <li>
              <Link to="/product/yamaha" className='cat-nave' id="yamaha">Yamaha</Link>
            </li>
            <li>
              <Link to="/product/ktm" className='cat-nave' id="ktm">KTM</Link>
            </li>
            <li>
              <Link to="/product/suzuki" className='cat-nave' id="suzuki">Suzuki</Link>
            </li> 
            <li>
              <Link to="/product/gilera" className='cat-nave' id="gilera">Gilera</Link>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </div>
  );
};

export default NavBar;
