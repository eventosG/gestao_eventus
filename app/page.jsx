'use client';
import React, { useState, useEffect } from 'react';
import Gallery from "../components/Gallery";
import { useRouter } from 'next/navigation';
import Nav from '../components/Nav';
import { signIn, useSession, getProviders } from "next-auth/react";
import { Modal, Text, Spacer } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";




function Home() {
  const {data: session } = useSession();
  const router = useRouter();
  const [providers, setProviders] = useState(null);
  const [visibleRemover, setVisibleRemover] = useState(false);
  function naoLogado(id) {
    if (!session?.user.id) {
      setVisibleRemover(true);
    } else {
      if (id === "planificação") {
        router.push('/planificacao');
      }
      if (id === "serviçoProdutos") {
        router.push('/produtosServicos');
      }
      if (id === "convidados") {
        router.push('/planificacao');        
      }
      if (id === "convites") {
        router.push('/convites');
      }
      if (id === "streaming") {
        router.push('/planificacao');
      }
      if (id === "inspiracao") {
        router.push('/planificacao');
      }
      if (id === "facturacao") {
        router.push('/planificacao');
      }
      if (id === "cronograma") {
        router.push('/planificacao');
      }
    }    
  }
  useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    },[]);
  return (
    <div className="bg-cover bg-no-repeat bg-[url('/assets/images/bag.jpg')] h-full">
      <main className='app'>
        <Nav />
      </main>
      <div className='flex justify-between'>
          <div class="screen mt-16 ml-20">
            <div class="screen__content">
              <form class="login">
                <div class="login__field">
                  <i class="login__icon fas fa-user"></i>
                  <input type="text" class="login__input" placeholder="Nome do Usuário/ Email" />
                </div>
                <div class="login__field">
                  <i class="login__icon fas fa-lock"></i>
                  <input type="password" class="login__input" placeholder="Senha" />
                </div>
                <button class="button login__submit">
                  <span class="button__text">Fazer Login</span>
                  <i class="button__icon fas fa-chevron-right"></i>
                </button>				
              </form>
              <div class="social-login">
                <h3>Login</h3>
                <div class="social-icons">
                  <a href="#" class="social-login__icon fab fa-instagram"></a>
                  <a href="#" class="social-login__icon fab fa-facebook"></a>
                  <a href="#" class="social-login__icon fab fa-twitter"></a>
                </div>
              </div>
            </div>
            <div class="screen__background">
              <span class="screen__background__shape screen__background__shape4"></span>
              <span class="screen__background__shape screen__background__shape3"></span>		
              <span class="screen__background__shape screen__background__shape2"></span>
              <span class="screen__background__shape screen__background__shape1"></span>
            </div>
            <div className='text-white text-center mt-4'>
              <p>Para ternar a sua experiencia de organizacao de Evento temos uma equipa pronta para lhe apoiar, 
                em todos os aspectos, incluindo <a href="#" className='text-orange-500'>criar o conceito</a> do seu evento!</p>
            </div>	
          </div>
          <div class="overflow-hidden mt-16 ml-20">
              <div className='text-justify'>
                <p className='w-[800px] text-white text-lg'>Nos somos o parceiro ideal na organizacao do seu Evento, temos solucoes a medida das suas necessidades, 
                  simplificando processos, proporcionando conforto e elegancia que a organizacao do seu Evento merece...</p>
                <a href="#" className='text-white text-lg'>Comece agora a planificar o seu Evento!</a>
              </div>          
              <Gallery />
          </div>
        </div>
      <section className="w-full flex-center flex-col">         
        <Spacer y={15} />
          <main className='app'>
          <div className='flex flex-row gap-2'>
            <div className='text-center font-bold text-orange-500'>
              <p>Fotos</p>
              <div className='flex justify-center'>
                <div className='border-t-4 border-orange-500 mb-2 w-[50px]'></div>
              </div>            
              <div className="bg-[url('/assets/images/bag.jpg')] bg-cover bg-no-repeat rounded-lg w-[250px] h-[250px]">            
              </div>
            </div>
            <div className='text-center font-bold text-orange-500'>
              <p>Videos</p>
              <div className='flex justify-center'>
                <div className='border-t-4 border-orange-500 mb-2 w-[50px]'></div>
              </div>            
              <div className="bg-[url('/assets/images/bag.jpg')] bg-cover bg-no-repeat rounded-lg w-[250px] h-[250px]">            
              </div>
            </div>
          </div>
          <Spacer y={2} />
          <Divider className="my-4" />
          {/* <Spacer y={1} />
          <div class="row">
            <div class="columnwww">
              <div class="card">
                <p><i class="fa fa-user"></i></p>
                <h3>11+</h3>
                <p>Lobolos</p>
              </div>
            </div>

            <div class="columnwww">
              <div class="card">
                <p><i class="fa fa-check"></i></p>
                <h3>55+</h3>
                <p>Aniversarios</p>
              </div>
            </div>
            <div class="columnwww">
              <div class="card">
                <p><i class="fa fa-coffee"></i></p>
                <h3>100+</h3>
                <p>Casamentos</p>
              </div>
            </div>
          </div> */}
          <Spacer y={1} />
          <div className='flex justify-center'>
            <ul class="wrapper">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <span><i class="fab fa-facebook-f"></i></span>
              </li>
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <span><i class="fab fa-twitter"></i></span>
              </li>
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <span><i class="fab fa-instagram"></i></span>
              </li>
              <li class="icon youtube">
                <span class="tooltip">Youtube</span>
                <span><i class="fab fa-youtube"></i></span>
              </li>
            </ul>
          </div>          
          <Spacer y={5} />
          </main>        
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visibleRemover}
          onClose={() => setVisibleRemover(false)}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              <Text b size={18}>
                Nota
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
          <Text b size={18} className="text-center">
                É necessário fazer o cadastro para aceder a esta opção...
              </Text>
          </Modal.Body>
          <Modal.Footer>
          {session?.user ? (
                  <>
                    {providers && Object.values(providers).map((provider) => (
                      <button 
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="black_btn"
                      >
                          Sign In
                      </button>
                  ))}
                  </>
              ): (
                  <>
                  {providers && Object.values(providers).map((provider) => (
                      <button 
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="black_btn"
                      >
                          Sign In
                      </button>
                  ))}
                  </>
              )}
          </Modal.Footer>
        </Modal>  
      </section>
    </div>
  )
}

export default Home