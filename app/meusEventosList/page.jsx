'use client';
import Profile from '../../components/ProfilePage';
import React, { useState } from 'react';
import Nav from '../../components/Nav';
import { Container } from "@nextui-org/react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import {Divider} from "@nextui-org/react";
import {
  Spacer,
} from "@nextui-org/react";
import './aqui.css';
import './style.css';
const cidade = "Maputo";
const API_key = "d593a5a83f1d5d478dabefa7e09f00e1";
function page() {
  var volatelTempo = [];
  const {data: session } = useSession();
  const [openClose, setOpenClose] = useState(false);
  const [historico, setHistorico] = useState(false);
  const [eventosTodos, setEventosTodos] = useState(true);
  const [editeCancel, setEditeCancel] = useState(false);
  const router = useRouter();
  function historicoFunction() {
    setOpenClose(false);
    setEventosTodos(false);
    setHistorico(true);
  }
  function eventusFunction() {
    setOpenClose(false);
    setEventosTodos(true);
    setHistorico(false); 
  }
  return (
    <main className='app'>
      <Nav />
      <Profile>
        <Container>
        <div className="flex justify-end z-40">
          {openClose ? (
            <>
            <svg onClick={() => setOpenClose(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div className="flex flex-col bg-orange-300 p-2 w-[200px] gap-2">
              <Link
                href={"#"}
                className="dropdown_link"
                onClick={() => {}}
                >
                  Adicionar Evento
              </Link>
              <Link
                href={"#"}
                className="dropdown_link"
                onClick={() => historicoFunction()}
                >
                  Histórico
              </Link>
            </div> 
          </>
          
          ):(
            <>
              <svg onClick={() => setOpenClose(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </>
          )}
                        
        </div>
        {historico && (
          <div className="z-0">
            <div className='flex flex-row'>
                <div className="flex flex-row gap-4">
                  <svg onClick={() => eventusFunction()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                  </svg>
                  <p>Histórico dos Eventos Criados</p>
                </div>
            </div>
            <Divider className="my-4" />
            <Spacer y={3} />
            <div className='flex justify-center'>
              <table class="styled-table">
                  <thead>
                      <tr>
                          <th>Ordem</th>
                          <th>Tipo de Evento</th>
                          <th>Data Marcação</th>
                          <th>Data Realização</th>
                          <th>Investimento Projectado</th>
                          <th>Investimento Executado</th>
                          <th>Local</th>
                          <th>Total de Participantes</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>1</td>
                          <td>6000</td>
                          <td>Casamento de: Marta Antonio e Mario Moises Cossa</td>
                          <td>6000</td>
                          <td>6000</td>
                          <td>Casamento de: Marta Antonio e Mario Moises Cossa</td>
                          <td>6000</td>
                          <td>6000</td>
                      </tr>
                      <tr class="active-row">
                      <td>2</td>
                          <td>6000</td>
                          <td>Dom</td>
                          <td>6000</td>
                          <td>6000</td>
                          <td>Casamento de: Marta Antonio e Mario Moises Cossa</td>
                          <td>6000</td>
                          <td>6000</td>
                      </tr>
                      <tr>
                          <td>3</td>
                          <td>6000</td>
                          <td>Dom</td>
                          <td>6000</td>
                          <td>6000</td>
                          <td>Casamento de: Marta Antonio e Mario Moises Cossa</td>
                          <td>6000</td>
                          <td>6000</td>
                      </tr>
                      <tr>
                          <td>4</td>
                          <td>6000</td>
                          <td>Dom</td>
                          <td>6000</td>
                          <td>6000</td>
                          <td>Casamento de: Marta Antonio e Mario Moises Cossa</td>
                          <td>6000</td>
                          <td>6000</td>
                      </tr>
                      <tr>
                          <td>5</td>
                          <td>6000</td>
                          <td>Dom</td>
                          <td>6000</td>
                          <td>6000</td>
                          <td>Casamento de: Marta Antonio e Mario Moises Cossa</td>
                          <td>6000</td>
                          <td>6000</td>
                      </tr>
                      <tr>
                          <td>6</td>
                          <td>6000</td>
                          <td>Dom</td>
                          <td>6000</td>
                          <td>6000</td>
                          <td>Casamento de: Marta Antonio e Mario Moises Cossa</td>
                          <td>6000</td>
                          <td>6000</td>
                      </tr>
                      <tr>
                          <td>7</td>
                          <td>6000</td>
                          <td>Dom</td>
                          <td>6000</td>
                          <td>6000</td>
                          <td>Casamento de: Marta Antonio e Mario Moises Cossa</td>
                          <td>6000</td>
                          <td>6000</td>
                      </tr>
                  </tbody>
              </table>
            </div>
          </div>
        )}
        {eventosTodos && (
                <div className="z-0">
                  <div className='flex flex-row'>
                      <div>
                        <p>Eventos Criados</p>
                      </div>
                  </div>
                  <Divider className="my-4" />
                  <Spacer y={3} />
                  <div className='container9 flex flex-row gap-4'>
                        <div className='card9 pt-2 justify-between'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#faa332" className="w-6 h-6">
                              <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                            </svg>
                          </div>                        
                          <div className='imgBox flex flex-row z-0'>
                            <img 
                            width={140}
                            height={100} 
                            className='imagem' 
                            src="/assets/images/casamento22.png" 
                            alt="Convite" />                          
                          </div>
                          {editeCancel ? (
                          <>
                          <div className="flex flex-col text-center justify-center">
                            <Link
                                href={"#"}
                                className="dropdown_link"
                                onClick={() => setEditeCancel(false)}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                              </Link>
                              <div className="flex flex-col bg-orange-200 p-2 rounded-xl z-40">
                                <Link
                                  href={"#"}
                                  className="dropdown_link"
                                  onClick={() => setEditeCancel(false)}
                                >Gerir</Link>
                                <Link
                                  href={"#"}
                                  className="dropdown_link"
                                  onClick={() => setEditeCancel(false)}
                                >Editar</Link>
                                <Link
                                  href={"#"}
                                  className="dropdown_link"
                                  onClick={() => setEditeCancel(false)}
                                >Cancelar</Link>
                              </div>
                              
                          </div>
                          </>
                          ):(
                          <>
                            <Link
                                href={"#"}
                                className="dropdown_link"
                                onClick={() => setEditeCancel(true)}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </Link>
                          </>)
                          }

                          <div className='content9 text-orange-600'>
                                <h2>Casamento</h2>
                                <p>Data de Activacao</p>
                                <p>Data de Celebracao</p>
                                <p>Status: Pendente</p>
                            </div>
                        </div>
                        <div className='card9 pt-2'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a2a4b0" className="w-6 h-6">
                              <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                            </svg>
                          </div> 
                          <div className='imgBox'>
                            <img 
                              width={200}
                              height={100} 
                              src="/assets/images/aniversario.png" 
                              alt="Convite" />
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                          </svg>
                          <div className='content9 text-orange-600'>
                            <h2>Aniversário</h2>
                              <p>Data de Activacao</p>
                              <p>Data de Celebracao</p>
                              <p>Status: Concluido</p>
                            </div>
                        </div>
                        <div className='card9 pt-2'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#32a852" className="w-6 h-6">
                              <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                            </svg>
                          </div> 
                          <div className='imgBox'>
                            <img 
                            width={250}
                            height={150}  
                            src="/assets/images/churrasco.png" 
                            alt="Convite" />                        
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                              </svg>
                          <div className='content9 text-orange-600'>
                            <h2>Sociais</h2>
                              <p>Data de Activacao</p>
                              <p>Data de Celebracao</p>
                              <p>Status: Activo</p>
                            </div>
                        </div>
                      </div>
                      <Spacer y={2} />
                      <div className='container9 flex flex-row gap-4'>
                        <div className='card9 pt-2'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#32a852" className="w-6 h-6">
                              <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                            </svg>
                          </div> 
                          <div className='imgBox'>
                            <img 
                              width={200}
                              height={100} 
                              src="/assets/images/despedidaSolteiro.png" 
                              alt="Convite" />
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                              </svg>
                          <div className='content9 text-orange-600'>
                            <h2>Despedida de Solteiro</h2>
                              <p>Data de Activacao</p>
                              <p>Data de Celebracao</p>
                              <p>Status: Activo</p>
                            </div>
                        </div>
                        <div className='card9 pt-2'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#faa332" className="w-6 h-6">
                              <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                            </svg>
                          </div> 
                          <div className='imgBox'>
                            <img 
                              width={200}
                              height={100} 
                              src="/assets/images/graduacao.png" 
                              alt="Convite" />
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                              </svg>
                          <div className='content9 text-orange-600'>
                            <h2>Graduacao</h2>
                              <p>Data de Activacao</p>
                              <p>Data de Celebracao</p>
                              <p>Status: Pendente</p>
                            </div>
                        </div>
                        <div className='card9 pt-2'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#32a852" className="w-6 h-6">
                              <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                            </svg>
                          </div> 
                          <div className='imgBox'>
                            <img 
                              width={200}
                              height={100} 
                              src="/assets/images/lobolo.png" 
                              alt="Convite" />
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                              </svg>
                          <div className='content9 text-orange-600'>
                            <h2>Lobolo</h2>
                              <p>Data de Activacao</p>
                              <p>Data de Celebracao</p>
                              <p>Status: Activo</p>
                            </div>
                        </div>
                      </div>
                </div>              
              )}  
              <script src="https://cdn.jsdelivr.net/npm/@jaames/iro@5"></script>
        </Container> 
      </Profile>
    </main>
  );
}

export default page;
