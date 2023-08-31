'use client';
import React from "react";
import Gallery from "../components/Gallery";
import {Image} from "@nextui-org/react";
import {Card, CardBody, Link} from "@nextui-org/react";



function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <Gallery />
      <div className='flex flex-row gap-4 mt-4'>
      <button type="button" onClick={() => {}} className="black_btn">Planificação</button>
      <button type="button" onClick={() => {}} className="black_btn">Serviços/Produtos</button>
      <button type="button" onClick={() => {}} className="black_btn">Convidados</button>
      <button type="button" onClick={() => {}} className="black_btn">Convites</button>
      <button type="button" onClick={() => {}} className="black_btn">Streaming</button>
      <button type="button" onClick={() => {}} className="black_btn">Inspiração</button>
      <button type="button" onClick={() => {}} className="black_btn">Facturação</button>
      <button type="button" onClick={() => {}} className="black_btn">Cronograma</button>
      <button type="button" onClick={() => {}} className="black_btn">Dicas</button>
      </div>
      <div class="flex mt-4 gap-4">
        <div class="flex-initial w-64 glassmorphism">
          02
        </div>
        <div class="flex flex-row gap-4 w-46 glassmorphism">
          <Image
          isBlurred
          width={200}
          height={200}
          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          alt="NextUI Album Cover"
          classNames="mt-5"
        />
        <div>
          <p>
          <Link href="#" color="warning"><p className="text-4xl">Casamentos</p></Link>
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tempore culpa, vitae doloremque placeat iusto quae consequatur 
          recusandae sed tempora rerum, reiciendis perspiciatis? 
          Porro laboriosam iste quos necessitatibus quis dolore quo.
        </p> 
        <div className="flex justify-end">
          <button type="button" onClick={() => {}} className="black_btn">Ver detalher</button>
        </div>
        </div>
             
        </div>
      </div>
    </section>
  )
}

export default Home