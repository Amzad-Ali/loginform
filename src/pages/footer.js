import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div class="footer-container">
        <div class="footer">
          <div class="footer-content">
            <div class="newsletter">
              <h2>Subscribe to Our Newsletter</h2>
              <div class="newsletter-form">
                <input class="newsletter-input" placeholder="Email here" />
                <button class="newsletter-btn">Submit</button>
              </div>
            </div>
            <div class="footer-row">
              <div class="footer-column">
                <div class="footer-about">
                  <h3>About Us</h3>
    
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla a consectetur dictum, metus elit hendrerit lectus, et venenatis elit dui nec lorem. Integer vel urna euismod, ultrices tortor at, fringilla est. Donec luctus massa a dolor maximus, nec pharetra felis gravida. Ut at ex nec orci fringilla vehicula. Fusce sagittis enim nec sapien cursus, nec consectetur arcu ultricies. Aliquam erat volutpat. Sed nec orci vehicula, dignissim est a, cursus ex. Suspendisse potenti. Integer lacinia urna eget libero interdum, eu luctus ligula gravida.
                  </p>
    
                </div>
              </div>
    
              <div class="footer-column">
                <div class="footer-links">
                  <h3>Useful Links</h3>
                  <Link to="/">Home</Link>
                  <Link to="/aboutus">About</Link>
                  <Link to="/services">Products & Services</Link>
                  <Link to="#">Client Testimonials</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
              <div class="footer-column">
                <div class="footer-links">
                  <h3>Service Area</h3>
                  <Link to="#">Rice Milling Technology Solutions</Link>
                  <Link to="#">Industrial Power Solutions</Link>
                  <Link to="#">Static Voltage Stabilizers</Link>
                </div>
              </div>
              <div class="footer-column">
                <div class="footer-contact">
                  <h3>Get In Touch</h3>
                  <p>
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Hyderabad, Telangana 500045
                  </p>
                  <p>
                    <i class="fa fa-phone" aria-hidden="true"></i> +91 8008146642
                  </p>
                  <p>
                    <i class="fa fa-envelope"></i> abcd@example.com
                  </p>
                  <div class="footer-social">
                 
                    <Link to="#">
                      <i class="fab fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i class="fab fa-youtube"></i>
                    </Link>
                    <Link to="#">
                      <i class="fab fa-instagram"></i>
                    </Link>
                    <Link to="#">
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-menu">
            <div class="f-menu">
              <Link to="#">Terms of Use</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Cookies</Link>
              <Link to="#">Help</Link>
              <Link to="#">FAQs</Link>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="footer-row">
              <div class="footer-column">
                <p>
                  &copy; <Link to="#">Annapurna Trading Corporation</Link>, All Rights
                  Reserved.
                </p>
              </div>
              <div class="footer-column">
                <p>
                  Developed & Maintained By
                  <Link to="#">R.Tech Solutions</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;