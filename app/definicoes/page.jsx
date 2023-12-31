'use client';
import Profile from "../../components/Perfil";
import React, { useState } from 'react';
import { Container, Spacer } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Nav from '../../components/Nav';
import './aqui.css';
import {Divider, Modal, Text, Button, Checkbox} from "@nextui-org/react";
function page() {
  const [titulo, setTitulo] = useState('');
  const [tarefas, setTarefas] = useState(false);
  const [visibleRemover, setVisibleRemover] = useState(false);
  const [editeCancel, setEditeCancel] = useState(false);
  const router = useRouter();

  
  return (
    <main className='app'>
      <Nav />
      <Profile>
        <Container>
          <div className="flex flex-row justify-between mb-1">
            <div className="flex flex-row gap=2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <h3>Partilhar a organizacao do Evento</h3>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </div>
          <Divider className="my-4" />
          <div className="flex flex-row gap-2">
            <input 
              onChange={() => {}}
              placeholder='Nome'
              required
              className='form_input'
            />
            <input 
              onChange={() => {}}
              placeholder='Email'
              required
              className='form_input'
            />
            <select name="cars2" id="cars2" className='form_input' onChange={() => {}}>
            <option value="Cargo">Cargo</option>
            <option value="Administrador">Gestor</option>
            <option value="Auxiliar">Auxiliar</option>
            <option value="Auxiliar">Colaborador</option>
          </select>
            <input 
              onChange={() => {}}
              placeholder='Senha'
              required
              className='form_input'
            />
            <button
              type="button"
              onClick={() => setVisibleRemover(true)}
              className="black_btn"
            >
              Permissoes
            </button>
          </div>
          <Spacer y={2} />
            <div className='flex justify-center'>
              <table class="styled-table">
                  <thead>
                      <tr>
                          <th>Nome</th>
                          <th>Email</th>
                          <th>Permicoes</th>
                          <th>Cargo</th>
                          <th>...</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>1</td>
                          <td>6000</td>
                          <td>Convidados, Servicos</td>
                          <td>Administrador</td>
                          <td>
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
                                >Editar</Link>
                                <Link
                                  href={"#"}
                                  className="dropdown_link"
                                  onClick={() => setEditeCancel(false)}
                                >Suspender</Link>
                                <Link
                                  href={"#"}
                                  className="dropdown_link"
                                  onClick={() => setEditeCancel(false)}
                                >Remover</Link>
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
                          </td>
                      </tr>
                      <tr class="active-row">
                      <td>2</td>
                          <td>6000</td>
                          <td>Convites</td>
                          <td>Auxiliar</td>
                          <td>
                            <div className="flex flex-row">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                            </div>                          
                          </td>
                      </tr>
                      <tr>
                          <td>3</td>
                          <td>6000</td>
                          <td>Planificacao</td>
                          <td>Auxiliar</td>
                          <td>
                            <div className="flex flex-row">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                            </div>                          
                          </td>
                      </tr>
                      <tr>
                          <td>4</td>
                          <td>6000</td>
                          <td>Inspiracao</td>
                          <td>Auxiliar</td>
                          <td>
                            <div className="flex flex-row">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                            </div>                          
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
          <Spacer y={2} />
          <div className="flex flex-row justify-between gap=2">
            <div className="flex flex-row gap=2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
              </svg>
              <h3>Temas</h3>
            </div>
          </div>
          <Divider className="my-4" />
        </Container>
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visibleRemover}
            onClose={() => setVisibleRemover(false)}
          >
            <Modal.Header>
            <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Atribua Permissoes para Nome do usuario
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Checkbox
                // defaultSelected={culturalVal}
                color="warning"
                onChange={(e) => {}}
              >
                <p className="text-sm"> 
                  Convidados
                </p>
              </Checkbox>
              <Checkbox
                // defaultSelected={culturalVal}
                color="warning"
                onChange={(e) => {}}
              >
                <p className="text-sm"> 
                  Servicos
                </p>
              </Checkbox>
              <Checkbox
                // defaultSelected={culturalVal}
                color="warning"
                onChange={(e) => {}}
              >
                <p className="text-sm"> 
                  Convites
                </p>
              </Checkbox>
              <Checkbox
                // defaultSelected={culturalVal}
                color="warning"
                onChange={(e) => {}}
              >
                <p className="text-sm"> 
                  Planificacao
                </p>
              </Checkbox>
              <Checkbox
                // defaultSelected={culturalVal}
                color="warning"
                onChange={(e) => {}}
              >
                <p className="text-sm"> 
                  Inspiracao
                </p>
              </Checkbox>
              <Checkbox
                // defaultSelected={culturalVal}
                color="warning"
                onChange={(e) => {}}
              >
                <p className="text-sm"> 
                  Cronograma
                </p>
              </Checkbox>
            </Modal.Body>
            <Modal.Footer>
              <Button auto onPress={() => setVisibleRemover(false)}>
                Cancelar
              </Button>
              <Button auto flat color="error" onPress={() => {}}>
                Confirmar
              </Button>
            </Modal.Footer>
        </Modal>
      </Profile> 
    </main>
  );
}

export default page;
