"use client";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Divider } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import {
  Modal,
  Input,
  Button,
  Dropdown,
  Text,
} from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";


function Nav() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [momentosVisible, setMomentosVisible] = useState(false);
  const router = useRouter();
    const closeMomentos = () => {
        setMomentosVisible(false);
      };
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);
  useEffect(() => {
    var box  = document.getElementById('box');
    var down = false;
    function toggleNotifi(){
      if (down) {
        box.style.height  = '0px';
        box.style.opacity = 0;
        down = false;
      }else {
        box.style.height  = '510px';
        box.style.opacity = 1;
        down = true;
      }
    }
  }, []);
  // ediyad
  useEffect(() => {
    let currentInput = document.querySelector('.currentInput');
    let answerScreen = document.querySelector('.answerScreen');
    let buttons = document.querySelectorAll('button');
    let erasebtn = document.querySelector('#erase');
    let clearbtn = document.querySelector('#clear');
    let evaluate = document.querySelector('#evaluate'); 
    let realTimeScreenValue = []

    clearbtn.addEventListener("click", () => {

        realTimeScreenValue = [''];
        answerScreen.innerHTML = 0;
        currentInput.className = 'currentInput'
        answerScreen.className = 'answerScreen';
        answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
    })


  }, []);
  function meusEventos() {
    setToggleDropdown(true);
    setMomentosVisible(true);
  }
  function planificacao() {
    if (session?.user) {
      router.push('/planificacao');
    } else {
      toast.error(`Faça o LogIn e Desfrute dos Nossos Serviços!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }    
  }
  function produtosServicos() {
    if (session?.user) {
      router.push('/produtosServicos');
    } else {
      toast.error(`Faça o LogIn e Desfrute dos Nossos Serviços!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } 
  }
  function convidados() {
    if (session?.user) {
      router.push('/convidados');
    } else {
      toast.error(`Faça o LogIn e Desfrute dos Nossos Serviços!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } 
    
  }
  function convites() {
    if (session?.user) {
      router.push('/convites');
    } else {
      toast.error(`Faça o LogIn e Desfrute dos Nossos Serviços!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    
  }
  function streaming() {
    if (session?.user) {
      router.push('/streaming');
    } else {
      toast.error(`Faça o LogIn e Desfrute dos Nossos Serviços!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    
  }
  function cronograma() {
    if (session?.user) {
      router.push('/cronograma');
    } else {
      toast.error(`Faça o LogIn e Desfrute dos Nossos Serviços!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    
  }
  function inspiracao() {
    if (session?.user) {
      router.push('/inspiracao');
    } else {
      toast.error(`Faça o LogIn e Desfrute dos Nossos Serviços!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    
  }
  function facturacao() {
    if (session?.user) {
      router.push('/facturacao');
    } else {
      toast.error(`Faça o LogIn e Desfrute dos Nossos Serviços!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    
  }
  return (
    <div className="flex-between w-full mb-16 pt-3">
      <Link className="flex gap-2 flex-center" href={"/"} id="clear">
        <Image
          src={"/assets/images/logo.png"}
          alt={"Gestao de Eventos Logo"}
          width={100}
          height={30}
          className="object-contain"
        />
      </Link>
      <nav class="menu">
          <ol>
            <li class="menu-item">
              <h2 onClick={() =>  planificacao()} className='text-sm my-1 cursor-pointer'>Planificação</h2>
              {/* <ol class="sub-menu">
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Produtos</h2></li> 
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Road Map</h2></li>
              </ol> */}
            </li>
            <li class="menu-item">
              <h2 onClick={() =>  produtosServicos()} className='text-sm my-1 mx-1 cursor-pointer'>Serviços</h2>
              {/* <ol class="sub-menu">
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>D.J.</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>M.C</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Som e Luz</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Doces</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Salgados</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Garço</h2></li>
              </ol> */}
            </li>
            <li class="menu-item">
              <h2 onClick={() =>  convidados()} className='text-sm my-1 mx-1 cursor-pointer'>Convidados</h2>
              <ol class="sub-menu">
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Add. Convid.</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Gerir Mesas</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>RSPV</h2></li>
              </ol>
            </li>
            <li class="menu-item">
              <h2 onClick={() =>  convites()} className='text-sm my-1 mx-1 cursor-pointer'>Convites</h2>
              <ol class="sub-menu">
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Casamento</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Aniversário</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Lobolo</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Sociais</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Des. Solteiro</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Graduação</h2></li>
              </ol>
            </li>
            <li class="menu-item">
              <h2 onClick={() =>  streaming()} className='text-sm my-1 mx-1 cursor-pointer'>Streaming</h2>
            </li>
            <li class="menu-item">
              <h2 onClick={() =>  cronograma()} className='text-sm my-1 mx-1 cursor-pointer'>Cronograma</h2>
            </li>
            <li class="menu-item">
              <h2 onClick={() =>  facturacao()} className='text-sm my-1 mx-1 cursor-pointer'>Facturação</h2>
            </li>
            <li class="menu-item">
              <h2 onClick={() =>  inspiracao()} className='text-sm my-1 mx-1 cursor-pointer'>Inspiração</h2>
              <ol class="sub-menu">
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Tendências</h2></li>
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Maquetização</h2></li>
              </ol>
            </li>
            <li class="menu-item">
              <h2 href="#0" className='text-sm my-1 mx-1 cursor-pointer'>Dicas</h2>
              <ol class="sub-menu">
                <li class="menu-item"><h2 className='text-white text-sm my-1 cursor-pointer'>Newslater</h2></li>
              </ol>
            </li>
          </ol>
      </nav>
      <div className="flex flex-row">
        {session?.user && (
        <>
          <div class="icon" onclick="toggleNotifi()">
            <img src="/assets/img/bell.png" alt="" />
            <span>17</span>
          </div>
          <div class="notifi-box" id="box">
            <h2>Notifications <span>17</span></h2>
            <div class="notifi-item">
              <img src="/assets/img/avatar1.png" alt="img" />
              <div class="text">
                <h4>Elias Abdurrahman</h4>
                <p>@lorem ipsum dolor sit amet</p>
                </div> 
            </div>

            <div class="notifi-item">
              <img src="/assets/img/avatar2.png" alt="img" />
              <div class="text">
                <h4>John Doe</h4>
                <p>@lorem ipsum dolor sit amet</p>
                </div> 
            </div>

            <div class="notifi-item">
              <img src="/assets/img/avatar3.png" alt="img" />
              <div class="text">
                <h4>Emad Ali</h4>
                <p>@lorem ipsum dolor sit amet</p>
                </div> 
            </div>

            <div class="notifi-item">
              <img src="/assets/img/avatar4.png" alt="img" />
              <div class="text">
                <h4>Ekram Abu </h4>
                <p>@lorem ipsum dolor sit amet</p>
                </div> 
            </div>

            <div class="notifi-item">
              <img src="/assets/img/avatar5.png" alt="img" />
              <div class="text">
                <h4>Jane Doe</h4>
                <p>@lorem ipsum dolor sit amet</p>
                </div> 
            </div>

          </div>
        </>
        )}
        {/* Destop Navigation */}
        <div className="sm:flex hidden">
          {session?.user ? (
            <div className="flex z-40">
              <Image
                alt="Profilo Pic"
                src={session?.user.image}
                className="flex mt-4 rounded-full"
                width={37}
                height={37}
                onClick={() => setToggleDropdown((prev) => !prev)}
              />

              {toggleDropdown && (
                <div className="dropdownDesktop">
                  <Link
                    href={"/profileUser"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    <div className="flex flex-col text-center justify-center content-center p-4 my-2 items-center bg-red-50 rounded-lg">
                      <h3>{session?.user.email}</h3>
                      <Image
                        alt="Profilo Pic"
                        src={session?.user.image}
                        className="flex mt-4 rounded-full"
                        width={60}
                        height={60}
                        onClick={() => setToggleDropdown((prev) => !prev)}
                      />
                      <h1>Olá, <small className="uppercase">{session?.user.name}</small> </h1>
                    </div>
                  </Link>
                  <Divider className="my-4" />
                  <Link
                    href={"/meusEventosList"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                      Meus Eventos
                    </div>
                  </Link>
                  <Link
                    href={"/definicoes"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Definições
                    </div>
                  </Link>
                  <Link
                    href={"#"}
                    className="dropdown_link"
                    onClick={() => meusEventos()}
                  >
                    <div className="flex flex-row gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                    </svg>Calculadora
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                    Terminar Sessão
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
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
        </div>
        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
          {session?.user ? (
            <div className="flex z-40">
              <Image
                alt="Profilo Pic"
                src={session?.user.image}
                width={37}
                height={37}
                onClick={() => setToggleDropdown((prev) => !prev)}
              />

              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href={"/profile"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Perfil
                  </Link>
                  <Link
                    href={"/create-prompt"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Criar Evento
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
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
        </div>
      </div>      
      <Modal
            closeButton
            aria-labelledby="modal-title"
            open={momentosVisible}
            onClose={closeMomentos}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Calculadora
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
            <div>
              <section id="Display-area">
                  <div className="currentInput"></div>
                  <div className="answerScreen">0</div>
              </section>
              <section className="keypad-btns">
                  <button type="button" className="fun_btn" id="clear" value="">
                      C
                  </button>
                  <button type="button" className="fun_btn" id="erase" value="">
                      &#11013;
                  </button>
                  <button type="button" className="fun_btn" value="/">/</button>
                  <button type="button" className="fun_btn" value="%">%</button>
                  <button type="button" className="num_btn" value="7">7</button>
                  <button type="button" className="num_btn" value="8">8</button>
                  <button type="button" className="num_btn" value="9">9</button>
                  <button type="button" className="fun_btn" value="*">x</button>
                  <button type="button" className="num_btn" value="4">4</button>
                  <button type="button" className="num_btn" value="5">5</button>
                  <button type="button" className="num_btn" value="6">6</button>
                  <button type="button" className="fun_btn" value="-">-</button>
                  <button type="button" className="num_btn" value="1">1</button>
                  <button type="button" className="num_btn" value="2">2</button>
                  <button type="button" className="num_btn" value="3">3</button>
                  <button type="button" className="fun_btn" value="+">+</button>
                  <button type="button" className="num_btn" value="00">00</button>
                  <button type="button" className="num_btn" value="0">0</button>
                  <button type="button" className="num_btn" value=".">.</button>
                  <button type="button" className="fun_btn" id="evaluate" value="">=</button>
              </section>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeMomentos}>
                OK
              </Button>
            </Modal.Footer>
      </Modal> 
    </div>
  );
}

export default Nav;
