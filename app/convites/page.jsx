'use client';
import Profile from "../../components/Perfil";
import Manequim from "../../components/Manequim";
import React, { useState, useEffect } from 'react';
import './style.css';
import Link from "next/link";
function Convites() {
  const [selecionado, setSelecionado] = useState(false);
  let [idSelected, setIdSelected] = useState("");
  function verConvite(id) {    
    if (id === "1") {
      idSelected = "1";
    }
  }
  function voltar() {
    setIdSelected("0")
  }
  return (
    <Profile>
      <div className='flex flex-row'>
        <div>
          <aside className="p-4">
              <div className="flex flex-col gap-4">
                <Link
                  href={"#"}
                  onClick={voltar}
                  className='bg-orange-300 rounded-lg text-white text-center'
                >
                  Lobolo
                </Link>
                <Link
                  href={"#"}
                  className='bg-orange-300 rounded-lg text-white text-center'
                >
                  Graduação
                </Link>
                <Link
                  href={"#"}
                  className='bg-orange-300 rounded-lg text-white text-center'
                >
                  Aniversário
                </Link>
                <Link
                  href={"#"}
                  className='bg-orange-300 rounded-lg text-white text-center'
                >
                  Casamentos
                </Link>
                
                <Link
                  href={"#"}
                  className='bg-orange-300 rounded-lg text-white text-center'
                >
                  Festas Sociais
                </Link>
                <Link
                  href={"#"}
                  className='bg-orange-300 rounded-lg text-white text-center px-2'
                >
                  Desp. de Solteiro
                </Link>
              </div>
          </aside>
        </div>
        {idSelected === "1" && (
            <>
              <div className='flex flex-col'>
                <div className='flex gap-4'>
                <div onClick={() => {}}>
                  <div className="background3">                
                    <div className="gallery3 flex-col">
                      <p className='text-orange-500'>Modelo do Convite</p>
                      <div className="card3">
                          <div className="card__side">
                            <img src="/assets/images/convite2.png" alt="01" />
                            </div>
                            <div className="card__side card__side--back">
                            <img src="/assets/images/casamento.png" alt="01" />
                          </div>                        
                      </div>
                      <div className='bg-orange-200 text-white'>
                            <p className='ml-4'>Preco</p>
                          </div>
                          <div className='bg-orange-200 text-white text-center'>
                            <div className='flex flex-row justify-center gap-4'>
                            <select name="convites" id="convites" className='bg-orange-200'>
                            <option value="Material">Material</option>
                                    <option value="Cartolina">Cartolina</option>
                                    <option value="PVC">PVC</option>
                                    <option value="Papel">Papel</option>
                                  </select>
                            </div>
                            
                          </div>
                    </div>                  
                  </div>                
                </div>
                <Manequim/> 
                </div>
                <div className='flex gap-4'>
                  <div onClick={() => {}}>
                    <div className="background3">                
                      <div className="gallery3 flex-col">
                        <p className='text-orange-500'>Modelo do Cartao de Instrucoes</p>
                        <div className="card3">
                            <div className="card__side">
                              <img src="/assets/images/convite2.png" alt="01" />
                              </div>
                              <div className="card__side card__side--back">
                              <img src="/assets/images/casamento.png" alt="01" />
                            </div>                        
                        </div>
                        <div className='bg-orange-200 text-white'>
                              <p className='ml-4'>Preco</p>
                            </div>
                            <div className='bg-orange-200 text-white text-center'>
                              <div className='flex flex-row justify-center gap-4'>
                              <select name="convites" id="convites" className='bg-orange-200'>
                              <option value="Material">Material</option>
                                    <option value="Cartolina">Cartolina</option>
                                    <option value="PVC">PVC</option>
                                    <option value="Papel">Papel</option>
                                  </select>
                              </div>
                              
                            </div>
                      </div>                  
                    </div>                
                  </div>
                  <div className='flex gap-4'>
                    <div onClick={() => {}}>
                      <div className="background3">                
                        <div className="gallery3 flex-col">
                          <p className='text-orange-500'>Modelo do Cartao de Recepcao</p>
                          <div className="card3">
                              <div className="card__side">
                                <img src="/assets/images/convite2.png" alt="01" />
                                </div>
                                <div className="card__side card__side--back">
                                <img src="/assets/images/casamento.png" alt="01" />
                              </div>                        
                          </div>
                          <div className='bg-orange-200 text-white'>
                                <p className='ml-4'>Preco</p>
                              </div>
                              <div className='bg-orange-200 text-white text-center'>
                                <div className='flex flex-row justify-center gap-4'>
                                <select name="convites" id="convites" className='bg-orange-200'>
                                <option value="Material">Material</option>
                                    <option value="Cartolina">Cartolina</option>
                                    <option value="PVC">PVC</option>
                                    <option value="Papel">Papel</option>
                                  </select>
                                </div>
                                
                              </div>
                        </div>                  
                      </div>                
                    </div>
                </div>
                <div className='flex gap-4'>
                  <div onClick={() => {}}>
                    <div className="background3">                
                      <div className="gallery3 flex-col">
                        <p className='text-orange-500'>Modelo do Identificador de Mesa</p>
                        <div className="card3">
                            <div className="card__side">
                              <img src="/assets/images/convite2.png" alt="01" />
                              </div>
                              <div className="card__side card__side--back">
                              <img src="/assets/images/casamento.png" alt="01" />
                            </div>                        
                        </div>
                        <div className='bg-orange-200 text-white'>
                              <p className='ml-4'>Preco</p>
                            </div>
                            <div className='bg-orange-200 text-white text-center'>
                              <div className='flex flex-row justify-center gap-4'>
                              <select name="convites" id="convites" className='bg-orange-200'>
                              <option value="Material">Material</option>
                                    <option value="Cartolina">Cartolina</option>
                                    <option value="PVC">PVC</option>
                                    <option value="Papel">Papel</option>
                                  </select>
                              </div>
                              
                            </div>
                      </div>                  
                    </div>                
                  </div>
                </div>
                </div>
                <div className='flex gap-4  mt-4'>
                  <div onClick={() => {}}>
                    <div className="background3">                
                      <div className="gallery3 flex-col">
                        <p className='text-orange-500'>Modelo do Cartao de Recinto</p>
                        <div className="card3">
                            <div className="card__side">
                              <img src="/assets/images/convite2.png" alt="01" />
                              </div>
                              <div className="card__side card__side--back">
                              <img src="/assets/images/casamento.png" alt="01" />
                            </div>                        
                        </div>
                        <div className='bg-orange-200 text-white'>
                              <p className='ml-4'>Preco</p>
                            </div>
                            <div className='bg-orange-200 text-white text-center'>
                              <div className='flex flex-row justify-center gap-4'>
                              <select name="convites" id="convites" className='bg-orange-200'>
                              <option value="Material">Material</option>
                                    <option value="Cartolina">Cartolina</option>
                                    <option value="PVC">PVC</option>
                                    <option value="Papel">Papel</option>
                                  </select>
                              </div>
                              
                            </div>
                      </div>                  
                    </div>                
                  </div>
                  <div className='flex gap-4'>
                    <div onClick={() => {}}>
                      <div className="background3">                
                        <div className="gallery3 flex-col">
                          <p className='text-orange-500'>Modelo do Cartao de ...</p>
                          <div className="card3">
                              <div className="card__side">
                                <img src="/assets/images/convite2.png" alt="01" />
                                </div>
                                <div className="card__side card__side--back">
                                <img src="/assets/images/casamento.png" alt="01" />
                              </div>                        
                          </div>
                          <div className='bg-orange-200 text-white'>
                                <p className='ml-4'>Preco</p>
                              </div>
                              <div className='bg-orange-200 text-white text-center'>
                                <div className='flex flex-col justify-center gap-4'>
                                  <select name="convites" id="convites" className='bg-orange-200'>
                                  <option value="Material">Material</option>
                                    <option value="Cartolina">Cartolina</option>
                                    <option value="PVC">PVC</option>
                                    <option value="Papel">Papel</option>
                                  </select>
                                </div>
                                
                              </div>
                        </div>                  
                      </div>                
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div onClick={() => {}}>
                      <div className="background3">                
                        <div className="gallery3 flex-col">
                          <p className='text-orange-500'>Modelo do Identificador de ...</p>
                          <div className="card3">
                              <div className="card__side">
                                <img src="/assets/images/convite2.png" alt="01" />
                                </div>
                                <div className="card__side card__side--back">
                                <img src="/assets/images/casamento.png" alt="01" />
                              </div>                        
                          </div>
                          <div className='bg-orange-200 text-white'>
                                <p className='ml-4'>Preco</p>
                              </div>
                              <div className='bg-orange-200 text-white text-center'>
                                <div className='flex flex-row justify-center gap-4'>
                                <select name="convites" id="convites" className='bg-orange-200'>
                                    <option value="Material">Material</option>
                                    <option value="Cartolina">Cartolina</option>
                                    <option value="PVC">PVC</option>
                                    <option value="Papel">Papel</option>
                                  </select>
                                </div>
                                
                              </div>
                        </div>                  
                      </div>                
                    </div>
                  </div>  
                </div>
              </div>
            </>
          )}
          {idSelected === "2" && (
            <>
            <Manequim/>
            </>
          )}
          {idSelected === "3" && (
            <>
              <p onClick={() => setIdSelected("0")}>Convite 3</p>
            </>
          )}
          {idSelected === "0" && (
            <>
              <div className='container9'>     
                <div className='card9'>
                  <div className='imgBox'>
                    {/* <img className='imagem' src="/assets/images/convite2.png" alt="Convite" /> */}
                  </div>
                  <div className='content9'>
                        <h2>Convite 1</h2>
                        <p>Preço Unitário: 150,00 Mt</p>
                        {/* <p>Cores: Azul, Preto, Branco</p> */}
                        <p >Opções: Cartolina, 3D</p>
                        <a className="black_btn mt-4" onClick={() => setIdSelected("1")}>Ver Detalhes</a>
                    </div>
                </div>
                <div className='card9'>
                  <div className='imgBox'>
                  {/* <img src="/assets/images/convite2.png" alt="Convite" /> */}
                  </div>
                  <div className='content9'>
                    <h2>Convite 2</h2>
                      <p>Preço Unitário: 250,00 Mt</p>
                      {/* <p>Cores: Cartanho, Preto, Branco </p> */}
                      <p>Opções: Cartolina, 3D</p>
                      <a className="black_btn mt-4" onClick={() => setIdSelected("2")}>Ver Detalhes</a>
                    </div>
                </div>
                <div className='card9'>
                  <div className='imgBox'>
                  {/* <img src="/assets/images/convite2.png" alt="Convite" /> */}
                  </div>
                  <div className='content9'>
                    <h2>Convite 3</h2>
                      <p>Preço Unitário: 650,00 Mt</p>
                      {/* <p>Cores: Azul, Preto, Branco</p> */}
                      <p>Opções: Cartolina, 3D</p>
                      <a className="black_btn mt-4" onClick={() => setIdSelected("3")}>Ver Detalhes</a>
                    </div>
                </div>
              </div>
            </>
          )}
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@jaames/iro@5"></script>
    </Profile>
  )
}

export default Convites