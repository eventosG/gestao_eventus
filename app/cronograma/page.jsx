"use client";
import React from 'react';
import Profile from '../../components/ProfilePage';
import Image from "next/image";
import {Divider} from "@nextui-org/react";
import Nav from '../../components/Nav';
import {
    Spacer,
  } from "@nextui-org/react";

function page() {
  return (
    <>
      <main className='app'>
        <Nav />
        <Profile>
          <div className='flex flex-row justify-between mx-24'>
              <div>
                <Image
                    src={"/assets/images/Exemplo.png"}
                    alt={"Gestao de Eventos Logo"}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
              </div>
              <div>
                <p><small className='text-lg font-bold'>Casamento de</small>: Marta Antonio e Mario Moises Cossa</p>
                <p><small className='text-lg font-bold'>Local do Evento</small>: Salao Juvenil </p>
                <p><small className='text-lg font-bold'>Data do Evento</small>: 00/00/2000 </p>
                <p><small className='text-lg font-bold'>Mestre de Ceremonia</small>: Valdemar Valdemar</p>
                <p><small className='text-lg font-bold'>Duracao</small>: 12:00 h as 15:00</p>
              </div>
          </div>
          <Divider className="my-4" />
          <Spacer y={3} />
          <div className='flex justify-center'>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Ordem</th>
                        <th>Momento</th>
                        <th>Descricao</th>
                        <th>Interveniente</th>
                        <th>Duracao</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
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
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>6000</td>
                        <td>Dom</td>
                        <td>6000</td>
                        <td>6000</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>6000</td>
                        <td>Dom</td>
                        <td>6000</td>
                        <td>6000</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>6000</td>
                        <td>Dom</td>
                        <td>6000</td>
                        <td>6000</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>6000</td>
                        <td>Dom</td>
                        <td>6000</td>
                        <td>6000</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>6000</td>
                        <td>Dom</td>
                        <td>6000</td>
                        <td>6000</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </Profile> 
      </main>
    </>   
  )
}

export default page