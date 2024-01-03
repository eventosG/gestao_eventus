'use client';
import Profile from '../../components/ProfilePage';
import React, { useState } from 'react';
import { Container } from "@nextui-org/react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import './aqui.css';
const cidade = "Maputo";
const API_key = "d593a5a83f1d5d478dabefa7e09f00e1";
function page() {
  var volatelTempo = [];
  const {data: session } = useSession();
  const [evento, setEvento] = useState([]);
  const [cronograma, setCronograma] = useState([]);
  const [listaTempo, setlistaTempo] = useState([]);
  const [convidados, setConvidados] = useState(0);
  const [visibleRemover, setVisibleRemover] = useState(false);
  const [visibleEditar, setVisibleEditar] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [idd4, setIDD4] = useState('');
  const [data, setData] = useState('');
  const [corpo, setCorpo] = useState('');
  const [convidadosConfirmados, setConvidadosConfirmados] = useState(0);
  const [visible, setVisible] = useState(false);
  const [processando, setProcessando] = useState(false);
  const [confirmados, setConfirmados] = useState(false);
  const [orcamento, setOrcamento] = useState(false);
  const [tarefas, setTarefas] = useState(false);
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
