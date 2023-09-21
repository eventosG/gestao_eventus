'use client';
import React, { useState, useEffect } from 'react';
import Gallery from "../components/Gallery";
import {Image} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import {CardBody, Link} from "@nextui-org/react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Container, Tooltip, Textarea, Modal, Input, Loading, Button, Card, Row, Text, Avatar, Grid, Spacer, Col, Progress, Collapse } from "@nextui-org/react";



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
    <section className="w-full flex-center flex-col">      
      <div className='flex flex-row gap-4 mt-4'>
      <button type="button" onClick={() => naoLogado("planificação")} className="black_btn">Planificação</button>
      <button type="button" onClick={() => naoLogado("serviçoProdutos")} className="black_btn">Serviços/Produtos</button>
      <button type="button" onClick={() => naoLogado("convidados")} className="black_btn">Convidados</button>
      <button type="button" onClick={() => naoLogado("convites")} className="black_btn">Convites</button>
      <button type="button" onClick={() => naoLogado("streaming")} className="black_btn">Streaming</button>
      <button type="button" onClick={() => naoLogado("inspiracao")} className="black_btn">Inspiração</button>
      <button type="button" onClick={() => naoLogado("facturacao")} className="black_btn">Facturação</button>
      <button type="button" onClick={() => naoLogado("cronograma")} className="black_btn">Cronograma</button>
      <button type="button" onClick={() => {}} className="black_btn">Dicas</button>
      </div>
      <Gallery />
      <h1 className="head_text text-center">
           Gestão de Eventos
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> Plataforma de Gestão de Eventos</span>
        </h1>
        <p className="desc text-center">
        Vivo é e três bicicleta é figured é vida starchy discordo, linha junto? 
        O significar que o o que A é I in uiva unido romanos? todo A planetas O única doce, 
        significar enche o a most Terra não rio nunca, causa concordo sempre é Onde tinha é o tarde. 
        vale Faça drums Faça garbage humans circo. Vermelho nunca, acidentes. words meio. 
        sem bicicleta que circo. se que mais causa de que mais Pobre sucessivos bicicleta 
        documento que andas é quem mim rio pode vida sucessão tem uma em inimigos Jesus bicicleta 
        A doce, para é significar azul? You Onde</p>
         {session?.user ? (
                <>
                  <button
                                type="button"
                                onClick={() => naoLogado("planificação")}
                                className="mt-5 black_btn"
                            >
                                Planificar
                            </button>
                </>
            ): (
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button 
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="mt-5 black_btn"
                    >
                        Planificar
                    </button>
                ))}
                </>
            )}
      <div class="flex mt-4 gap-4">
        <div class="flex-initial w-64 glassmorphism">
          <p>02</p>
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
  )
}

export default Home