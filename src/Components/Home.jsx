import React, { useEffect, useState } from 'react';
import { RiShoppingCartLine, RiUserLine } from 'react-icons/ri';
import '../Style/Home.css';
import '../font/font.css';
import logo from '../Assets/HYde.png';
import bg from '../Assets/images/imgg6.jpg';
import Slideshow from '../Components/slide';

export default function Home() {
  const [slideShowImages, setSlideShowImages] = useState([]);
  const [sideviwImages, setSideviwImages] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const accessToken = 'oru7hlIBVUPKhcpY1sXYR7WzqYCbY9129wNJTGbSjsg';
        const apiUrl = 'https://api.unsplash.com/search/photos';
        const query1 = 'expensive fashion';
        const query2 = 'fashion african';
        const cacheBuster = Date.now(); 


        const response1 = await fetch(
          `${apiUrl}?query=${encodeURIComponent(query1)}&per_page=10&_cb=${cacheBuster}`,
          {
            headers: {
              Authorization: `Client-ID ${accessToken}`,
            },
          }
        );

        const response2 = await fetch(
          `${apiUrl}?query=${encodeURIComponent(query2)}&per_page=10&_cb=${cacheBuster}`,
          {
            headers: {
              Authorization: `Client-ID ${accessToken}`,
            },
          }
        );

        const data1 = await response1.json();
        const data2 = await response2.json();

        setSlideShowImages(data1.results.map((photo) => photo.urls.regular));
        setSideviwImages(data2.results);
      } catch (error) {
        console.log('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  console.log(slideShowImages);

  return (
    <>
      <div className='nav-container'>
        <nav>
          <div className="inner-nav">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className="list">
              <li className="list-item active">Home</li>
              <li className="list-item">New Arrival</li>
              <li className="list-item">Fashion</li>
              <li className="list-item">Sale</li>
              <li className="list-item">Shop</li>
            </ul>
            <div className="icons-container">
              <div className="cart">
                <RiShoppingCartLine className="cart-icon" />
                <span className="cart-counter">5</span>
              </div>
              <RiUserLine className="login-icon" />
            </div>
          </div>
        </nav>
      </div>

      <div className='content'>
        <div className='right-content'>
          <div className='fabric-text'>
            <h1 className='fabric'>Fabric That Speaks</h1>
            <h5 className="catchy-paragraph">Experience the language of style with our exquisite collection of fabrics. Each piece tells a unique story, crafted with passion and attention to detail. Discover the perfect blend of fashion and self-expression, and let your outfit speak volumes. Embrace the power of fabric and unleash your inner fashionista with us.</h5>
            <button className='shop-now'>Shop Now</button>
          </div>
        </div>
        {slideShowImages.length > 0 && <Slideshow images={slideShowImages} />}
        <div className='casual-content'>
          <div className='right-div-container' style={{ backgroundImage: `url(${bg})` }}>
            <div className='right-div-content'>
              <h5>Feature Collection</h5>
              <h1>Elevate Your Fashion Game</h1>
            </div>
          </div>
          <div className='left-div-container'>
            <div className="photo-container">
              {sideviwImages.map((photo, index) => (
                <img
                  key={index}
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                />
              ))}
            </div>
          </div>
        </div>

        <footer id="site-footer">
          <section className="horizontal-footer-section" id="footer-top-section">
            <div id="footer-logo">
              <picture>
                <img src={logo} alt="footer logo" role="presentation" />
              </picture>
            </div>
            <div id="footer-top-menu-container" role="menubar">
              <ul id="footer-top-menu" role="menu">
                <li className="footer-top-menu-item" role="menuitem">
                  <a href="#" className="footer-top-menu-link">IT Services</a>
                </li>
                <li className="footer-top-menu-item footer-top-menu-item-active" role="menuitem">
                  <a href="#" className="footer-top-menu-link">Web development</a>
                </li>
                <li className="footer-top-menu-item" role="menuitem">
                  <a href="#" className="footer-top-menu-link">SEO</a>
                </li>
                <li className="footer-top-menu-item" role="menuitem">
                  <a href="#" className="footer-top-menu-link">UI/UX</a>
                </li>
              </ul>
            </div>
            <div id="footer-buttons-container">
              <a href="#" className="footer-button" role="button">View our Projects</a>
            </div>
          </section>
          <section className="horizontal-footer-section" id="footer-middle-section">
            <div id="footer-about" className="footer-columns footer-columns-large">
              <h1>Our Address</h1>
              <address>
                <p><img src="https://img.icons8.com/ios-filled/14/000000/marker.png" />0182, Centurion, South Africa</p>
                <p><img src="https://img.icons8.com/ios-filled/14/000000/phone.png" />+27 (071) 345 9503 </p>
                <p><img src="https://img.icons8.com/ios-filled/14/000000/mail.png" />info@fashionflair.com</p>
                <p><img src="https://img.icons8.com/ios-filled/14/000000/clock.png" />8:00 AM – 8:00 PM</p>
              </address>
              <h1> Our Newsletter</h1>
              <a href="#" className="footer-button" role="button">Subscribe</a>
            </div>
            <div className="footer-columns">
              <h1>Overview</h1>
              <ul className="footer-column-menu" role="menu">
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Services </a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Pricing</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Portfolio</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">News</a>
                </li>
              </ul>
            </div>
            <div className="footer-columns">
              <h1>Resources</h1>
              <ul className="footer-column-menu" role="menu">
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">FAQ</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Media</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Guides</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Free Resources</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="footer-columns">
              <h1>Information</h1>
              <ul className="footer-column-menu" role="menu">
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">About Us</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Terms of Use</a>
                </li>
                <li className="footer-column-menu-item">
                  <a href="#" className="footer-column-menu-item-link" role="menuitem">Legal Information</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Message Us</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Leave a Feedback</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="horizontal-footer-section" id="footer-bottom-section">
            <div id="footer-copyright-info">
              &copy; fashionFlair Inc. {new Date().getFullYear()}. All rights reserved.
            </div>
            <div id="footer-social-buttons">
              <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" />
              <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png" />
              <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png" />
              <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png" />
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}

