'use client';
import Profile from "../../components/Perfil";
import React from 'react';
import { Container } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import './aqui.css';
const cidade = "Maputo";
const API_key = "d593a5a83f1d5d478dabefa7e09f00e1";
function page() {
  const router = useRouter();

  
  return (
    <Profile>
      <Container>
        <p>Temas</p>
      </Container>  
    </Profile>
  );
}

export default page;
