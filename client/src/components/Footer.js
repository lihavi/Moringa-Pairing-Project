import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div>
          <footer className="footer">
     
        <div className="footer__content">
          <div className="footer__logo ms-5">
            <img src={logo} width="200px" height="40px" align="left" alt="Logo" />
          </div>
          <div className="footer__social-media">
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
            <a href="#">
            <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
            <i className="fab fa-facebook-f"></i>
           </a>
           <a href="#">
            <i className="fab fa-twitter"></i>
           </a>
          </div>
     
      </div>
    </footer>
    </div>
  )
}

export default Footer
