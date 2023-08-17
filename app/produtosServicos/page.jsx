'use client';

import Profile from '../profile/page'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import {Card} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

function ProdutosServicos() {
 const [produtos, setProdutos] = useState([]);
 const [produtos2, setProdutos2] = useState([]);
 const [produtosImutavel, setProdutosImutavel] = useState([]);
 const [categorias, setCategorias] = useState([]);
 const [status, setStatus] = React.useState("");
 const [selected, setSeLected] = React.useState(false);
 const router = useRouter();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/protudosTodos`);
      const data = await response.json();
      setProdutos(data);
      setProdutosImutavel(data);
    }
    fetchPosts();
  },[]);
  useEffect(() => {
    var volatel = [];
    var volatel2 = [];
    const fetchPosts = async () => {
      const response = await fetch(`/api/categories`);
      const data = await response.json();      
      data.map((categoria) => {
        if(categoria.parent){          
          if (volatel2.includes(categoria.parent.name)) {
            
          } else {
            volatel2.push(categoria.parent.name);
            volatel.push({
              name: categoria.parent.name,
              nameProduto: categoria.name,
              id: categoria._id
            });
            
          }         
        }      
      })
      setCategorias(volatel)
    }
    fetchPosts();
  },[]);
  useEffect(() => {
    setProdutos([])
    var produtosFiltrados = []; 
    categorias.map((categoria) => {                   
      if(categoria.name){
        if(categoria.name == status){
          produtosImutavel.map((product) => {
            if(product.category == categoria.id){
              produtosFiltrados.push(product);
              console.log(product);
            }
          })
        }
      }      
    })
    setProdutos(produtosFiltrados)
  },[status]);
  function todosServicos() {
    const fetchPosts = async () => {
      const response = await fetch(`/api/protudosTodos`);
      const data = await response.json();
      setProdutos(data);
      setProdutosImutavel(data);
    }
    fetchPosts();
  }
  function produtoSelecionado(id) {
    setSeLected(true);
    const fetchPosts = async () => {
      const response = await fetch(`/api/protudosTodos`);
      const data = await response.json();
      // setProdutos(data);
      data.map((product) => {
        if(product._id == id){
          setProdutos2([product]);
        }
      })
    }
    fetchPosts();
  }
  return (
    <Profile>
      {selected ? (
      <>
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-1">
        {produtos2.length > 0 && produtos2.map((product) => (
          <>
            <Card>
              <div className='flex flex-row'>
              <div className='flex justify-left p-4'>
                <p>
                </p>
                <Image 
                  src={product.images[0]}
                  alt={"Gestao de Eventos Logo"}
                  width={300}
                  height={300}
                  onClick={() => produtoSelecionado(product._id)}
                  className="object-contain"          
                  />
              </div>
              <div className='text-left mb-4 mt-4 flex-auto w-32'>
                <h1 className="text-2xl font-bold text-gray-900">
                  {product.title}
                </h1>
                <p className='mr-4 text-left'>
                  {product.description}
                </p>
                <div className='flex flex-row justify-between p-4'>
                  <h1 className='text-left text-3xl font-bold'>
                    Preço: {product.price}.00 Mt
                  </h1>
                  <Link href={"#"} className="black_btn">
                        Adicionar
                  </Link>
                </div>                
              </div>
              </div>              
            </Card>
          </>
        ))}
      </div>
      </>):(
      <>
        <div  className='mb-4 text-right'>        
        <Card>          
          <div className='mr-4 ml-4 flex justify-between'>
          <button onClick={todosServicos}>Todos Serviços</button>
          <select 
          name="cars"
          value={status}
          onChange={(ev) => setStatus(ev.target.value)}
          id="cars"
          >
            {categorias.length > 0 && categorias.map((cat) => (
              <option key={cat.id} value={cat.name}>{cat.name}</option>
            ))}
          </select>
          </div>          
        </Card>
      </div>      
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {produtos.length > 0 && produtos.map((product) => (
          <>
            <Card>
              <div className='flex justify-center p-4'>
                <p>
                </p>
                <Image 
                  src={product.images[0]}
                  alt={"Gestao de Eventos Logo"}
                  width={100}
                  height={30}
                  onClick={() => produtoSelecionado(product._id)}
                  className="object-contain"          
                  />
              </div>
              <div className='text-center'>
                <h1 className="text-2xl font-bold text-gray-900">
                  {product.title}
                </h1>
              </div>
            </Card>
          </>
        ))}
      </div>
      </>
      )}
          
    </Profile>
  )
}

export default ProdutosServicos