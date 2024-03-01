import React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <div class="container">
            <div class="aboutus">
            <h2>About Us</h2>
            <p className='text-black text-lg'>
              Nos somos o parceiro ideal na organizacao do seu Evento, temos solucoes a medida das suas necessidades, 
              simplificando processos, proporcionando conforto e elegancia que a organizacao do seu Evento merece...
            </p>
            </div>
            <div class="link-supp">
            <h2>Support</h2>
            <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Help</a></li>
            </ul>
            </div>
            <div class="link-category">
            <h2>Shop</h2>
            <ul>
                <li><a href="">Men</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">Kids</a></li>
            </ul>
            </div>
            <div class="link-contact">
            <h2>Contact Us</h2>
            <ul class="cont">
                <li>
                <span><i class="fa-solid fa-phone"></i></span><p><a href="#">+258 84 628 6567</a></p>
                <span><i class="fa-solid fa-envelope"></i></span><p><a href="#">hiventos@gmail.com</a></p>
                </li>
            </ul>
            </div>
        </div>
        <div className='flex justify-center'>
              <ul class="wrapper">
                <li class="icon facebook">
                  <span class="tooltip">Facebook</span>
                  <span><i class="fab fa-facebook-f"></i></span>
                </li>
                <li class="icon twitter">
                  <span class="tooltip">TikTok</span>
                  <span><i class="fa-brands fa-tiktok"></i></span>
                </li>
                <li class="icon instagram">
                  <span class="tooltip">Instagram</span>
                  <span><i class="fab fa-instagram"></i></span>
                </li>
                <li class="icon youtube">
                  <span class="tooltip">WhatsApp</span>
                  <span><i class="fa-brands fa-whatsapp"></i></span>
                </li>
              </ul>
            </div>
        <p class="footer-title">Copyrights © <span>Gerstao de Ventos</span></p>
    </footer>
    </> 
  )
}

export default Footer