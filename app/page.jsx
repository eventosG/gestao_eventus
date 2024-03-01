'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {Link} from "@nextui-org/react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { signIn, useSession, getProviders } from "next-auth/react";
import { Modal, Text, Spacer } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";




function Home() {
  const {data: session } = useSession();
  const router = useRouter();
  const [providers, setProviders] = useState(null);
  const [visibleRemover, setVisibleRemover] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
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

        var curPage = 1;
        var numOfPages = $(".skw-page").length;
        var animTime = 1000;
        var scrolling = false;
        var pgPrefix = ".skw-page-";
      
        function pagination() {
          scrolling = true;
      
          $(pgPrefix + curPage).removeClass("inactive").addClass("active");
          $(pgPrefix + (curPage - 1)).addClass("inactive");
          $(pgPrefix + (curPage + 1)).removeClass("active");
      
          setTimeout(function() {
            scrolling = false;
          }, animTime);
        };
      
        function navigateUp() {
          if (curPage === 1) return;
          curPage--;
          pagination();
        };
      
        function navigateDown() {
          if (curPage === numOfPages) return;
          curPage++;
          pagination();
        };
      
        $(document).on("mousewheel DOMMouseScroll", function(e) {
          if (scrolling) return;
          if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            navigateUp();
          } else { 
            navigateDown();
          }
        });
      
        $(document).on("keydown", function(e) {
          if (scrolling) return;
          if (e.which === 38) {
            navigateUp();
          } else if (e.which === 40) {
            navigateDown();
          }
        });
    },[]);
  return (
    <div>
      <main className='app'>
        <Nav />
      </main>
      <div className='flex justify-between z-40'>
          <div class="overflow-hidden w-full">
              <div className='text-justify'>
              {/* <p className='text-black text-lg'>Nos somos o parceiro ideal na organizacao do seu Evento, temos solucoes a medida das suas necessidades, 
                  simplificando processos, proporcionando conforto e elegancia que a organizacao do seu Evento merece...</p>
                <a href="#" className='text-black text-lg'>Comece agora a planificar o seu Evento!</a> */}
              </div>          
              {/* <Gallery /> */}
              <div className="skw-pages">
                <div className="skw-page skw-page-1 active">
                  <div className="skw-page__half skw-page__half--left">
                    <div className="skw-page__skewed">
                      <div className="skw-page__content"></div>
                    </div>
                  </div>
                  <div className="skw-page__half skw-page__half--right">
                    <div className="skw-page__skewed">
                      <div className="skw-page__content">
                        <h2 className="skw-page__heading">Skewed One Page Scroll</h2>
                        <p className="skw-page__description">Just scroll down</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skw-page skw-page-2">
                  <div className="skw-page__half skw-page__half--left">
                    <div className="skw-page__skewed">
                      <div className="skw-page__content">
                        <h2 className="skw-page__heading">Page 2</h2>
                        <p className="skw-page__description">Nothing to do here, continue scrolling.</p>
                      </div>
                    </div>
                  </div>
                  <div className="skw-page__half skw-page__half--right">
                    <div className="skw-page__skewed">
                      <div className="skw-page__content"></div>
                    </div>
                  </div>
                </div>
                <div className="skw-page skw-page-3">
                  <div className="skw-page__half skw-page__half--left">
                    <div className="skw-page__skewed">
                      <div className="skw-page__content"></div>
                    </div>
                  </div>
                  <div className="skw-page__half skw-page__half--right">
                    <div className="skw-page__skewed">
                      <div className="skw-page__content">
                        <h2 className="skw-page__heading">Page 3</h2>
                        <p className="skw-page__description">The end is near, I promise!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skw-page skw-page-4">
                  <div className="skw-page__half skw-page__half--left">
                    <div className="skw-page__skewed">
                      <div className="skw-page__content">
                        <h2 className="skw-page__heading">Page 4</h2>
                        <p className="skw-page__description">Ok, ok, just one more scroll!</p>
                      </div>
                    </div>
                  </div>
                  <div className="skw-page__half skw-page__half--right">
                    <div className="skw-page__skewed">
                      <div className="skw-page__content"></div>
                    </div>
                  </div>
                </div>
                <div className="skw-page skw-page-5">
                  <div className="skw-page__half skw-page__half--left">
                    <div className="skw-page__skewed">
                      <div className="skw-page__content"></div>
                    </div>
                  </div>
                  <div className="skw-page__half skw-page__half--right">
                    <div className="skw-page__skewed">
                      <div className="skw-page__content">
                        <h2 className="skw-page__heading">Epic finale</h2>
                        <p className="skw-page__description">
                          Feel free to check 
                          <a className="skw-page__link" href="https://codepen.io/suez/pens/public/" target="_blank">my other pens</a> and follow me on 
                          <a className="skw-page__link" href="https://twitter.com/NikolayTalanov" target="_blank">Twitter</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      <Footer />
    </div>
  )
}

export default Home