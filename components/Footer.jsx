import React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
            <div className="aboutus">
            <h2>About Us</h2>
            <p className='text-black text-lg'>
              Nos somos o parceiro ideal na organizacao do seu Evento, temos solucoes a medida das suas necessidades, 
              simplificando processos, proporcionando conforto e elegancia que a organizacao do seu Evento merece...
            </p>
            </div>
            <div className="link-supp">
            <h2>Support</h2>
            <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Help</a></li>
            </ul>
            </div>
            <div className="link-category">
            <h2>Shop</h2>
            <ul>
                <li><a href="">Men</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">Kids</a></li>
            </ul>
            </div>
            <div className="link-contact">
            <h2>Contact Us</h2>
            <ul className="cont">
                <li>
                <span><i className="fa-solid fa-phone"></i></span><p><a href="#">+258 84 628 6567</a></p>
                <span><i className="fa-solid fa-envelope"></i></span><p><a href="#">hiventos@gmail.com</a></p>
                </li>
            </ul>
            </div>
        </div>
        {/* <div className='flex justify-center'>
              <ul className="wrapper">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span><i className="fab fa-facebook-f"></i></span>
                </li>
                <li className="icon twitter">
                  <span className="tooltip">TikTok</span>
                  <span><i className="fa-brands fa-tiktok"></i></span>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <span><i className="fab fa-instagram"></i></span>
                </li>
                <li className="icon youtube">
                  <span className="tooltip">WhatsApp</span>
                  <span><i className="fa-brands fa-whatsapp"></i></span>
                </li>
              </ul>
            </div> */}
        <p className="footer-title">Copyrights © <span>Gerstao de Ventos</span></p>
    </footer>
    </> 
  )
}

export default Footer