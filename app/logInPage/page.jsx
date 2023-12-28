"use client";
import React, { useState } from "react";
import {
    Checkbox,
    Spacer,
    Link,
  } from "@nextui-org/react";
function page() {
    const [cadastro, setCadastro] = useState(false);
    const [transporteVal, setTransporteVal] = useState(false);
  return (
    <>
      <main className='app'>
        <div className="grid justify-items-center mt-12">
            {cadastro ? (
                <>
                    <h3 className="text-4xl text-orange-500">Sign Up</h3>
                    <div className="bg-orange-500 w-[350px] mt-4 p-2">
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='Nome'
                        required
                        className='form_input'
                        />
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='Apelido'
                        required
                        className='form_input'
                        />
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='NUIT'
                        required
                        className='form_input'
                        />
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='BI'
                        required
                        className='form_input'
                        />
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='Contacto'
                        required
                        className='form_input'
                        />
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='Endereço'
                        required
                        className='form_input'
                        />
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='Número de Casa'
                        required
                        className='form_input'
                        />
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='Número de Quarteirão'
                        required
                        className='form_input'
                        />
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='Senha'
                        required
                        className='form_input'
                        />
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='Confirmar Senha'
                        required
                        className='form_input'
                        />
                        <div className="flex flex-row">
                            <h3>Já possui uma conta? </h3>&nbsp;
                            <Link href={"#"} onClick={() => setCadastro(false)}>
                                LogIn
                            </Link>
                        </div>
                        <Spacer y={1} />
                        <Checkbox
                            defaultSelected={transporteVal}
                            color="warning"
                            onChange={() => setTransporteVal((prev) => !prev)}
                            >
                            <p className="text-sm">Ao criar conta, aceita com os 
                            <Link
                            href={"#"}
                            className="dropdown_link"
                            >
                                &nbsp;termos e condicoes
                                </Link> da Gestão de Eventos</p>
                        </Checkbox>
                        <div className="my-2 flex justify-end">
                            {transporteVal && (
                            <>
                            <button
                                className='px-5 py-1.5 text-sm bg-white rounded-full text-orange-500 font-bold'
                            >
                                Sign Up
                            </button>
                            </>)
                            }
                            
                        </div>                
                    </div>
                </>
                ):(
                <>
                    <h3 className="text-4xl text-orange-500">LogIn</h3>
                    <div className="bg-orange-500 w-[300px] mt-4 p-2">
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='E-mail'
                        required
                        className='form_input'
                        />
                        <input 
                        // value={nomePlanificador}
                        // onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder='Senha'
                        required
                        className='form_input'
                        />
                        <div className="flex flex-row">
                            <h3>Não possui uma conta? </h3>&nbsp;
                            <Link href={"#"} onClick={() => setCadastro(true)}>
                                Criar conta
                            </Link>
                        </div>
                        <div className="my-2 flex justify-end">
                            <button
                                className='px-5 py-1.5 text-sm bg-white rounded-full text-orange-500'
                            >
                                LogIn
                            </button>
                        </div>                
                    </div>
                </>
            )}            
        </div>
      </main>
    </> 
  )
}

export default page