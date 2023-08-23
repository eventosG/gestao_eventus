'use client';
import Profile from '@app/profile/page';
import React, { useState, useEffect } from 'react';
import { Container, Checkbox, Tooltip, Textarea, Modal, Input, Loading, Button, Card, Row, Text, Avatar, Grid, Spacer, Col, Progress, Collapse } from "@nextui-org/react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Mail } from '@app/convidados/Mail';
import { IconButton } from '@app/convidados/IconButton';
import { EditIcon } from "@app/convidados/EditIcon";
import { DeleteIcon } from "@app/convidados/DeleteIcon";
let USDollar = new Intl.NumberFormat('en-US');

function page() {
  const {data: session } = useSession();
  const [evento, setEvento] = useState([]);
  const [cronograma, setCronograma] = useState([]);
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
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      console.log(data)
      setEvento(data);
    }
    if(session?.user.id) fetchPosts();
  },[session?.user.id]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/cronogramasT/${session?.user.id}/cronograma`);
      const data = await response.json();
      console.log(data)
      setCronograma(data);
    }
    if(session?.user.id) fetchPosts();
  },[session?.user.id]);

  const closeHandler = () => {
    setVisible(false);
  };

  function removerConograma(iD) {
    cronograma.map((crono) => {
      if (crono._id === iD) {
        setData(crono.data);
        setCorpo(crono.corpo);
        setTitulo(crono.titulo);
        setIDD4(iD);     
      }
      
    })
    setVisibleRemover(true);
  }

  function editarCronograma(iD) {
    cronograma.map((crono) => {
      if (crono._id === iD) {
        setData(crono.data);
        setCorpo(crono.corpo);
        setTitulo(crono.titulo);
        setIDD4(iD);     
      }
      
    })
    setVisibleEditar(true);
  }

  async function saveCronograma() {
    setVisible(false);
    setProcessando(true);
    try {
      const response = await fetch('api/cronogramas/new', {
          method: 'POST',
          body: JSON.stringify({
            titulo,
            data,
            corpo,
            userId: session?.user.id,
          })
      })
      if (response.ok) {
          router.push('/dashboard');
      }
  } catch (error) {
      console.log(error); 
    }finally {
      setProcessando(false);
      router.push('/dashboard');
    }
  }
  return (
    <Profile>
      <div className="text-center font-bold text-2xl mb-4">Planificação</div>
      <div className="text-center font-bold underline underline-offset-8 uppercase mb-4">Orçamentação</div>
      <div className="flex flex-row justify-between">
        <p className="font-bold mb-4">Orçamento Disponivel</p>        
        <p className="font-bold mb-4">Orçamento Real</p>
        <button type={"button"} onClick={() => {}} className="black_btn">
          Calculadora
        </button>
      </div>
      <Row gap={1}>
        <Col>
          <Card>
          <div className='justify-center items-center'>
            <Card.Body>
            <span className='font-satoshi font-semibold text-base text-gray-700 p-1'>
            {evento.length > 0 && evento.map((event) => (
              <>
                <Text h6 size={12} css={{ m: 0 }}>
                  Orçamento Inicial
                </Text>
                <Text h6 size={12} css={{ m: 0 }}>
                  {USDollar.format(event.orcamentoInicial)}.00 Mt
                </Text>
              </>              
            ))}
            
              <Progress size="sm" value={100} color="warning" />
            </span>              
            </Card.Body>
            </div>
          </Card>
        </Col>
        <Col>
          <Card>
          <div className='justify-center items-center'>
            <Card.Body>
            <span className='font-satoshi font-semibold text-base text-gray-700 p-1'>
            <Text h6 size={12} css={{ m: 0 }}>
              Serv. Solicitados
              </Text>
              <Text h6 size={12} css={{ m: 0 }}>
                  {USDollar.format(0)}.00 Mt
                </Text>
              <Progress size="sm" value={70} color="warning" />
            </span> 
            </Card.Body>
            </div>
          </Card>
        </Col>
        <Col>
          <Card>
          <div className='justify-center items-center'>
            <Card.Body>
            <span className='font-satoshi font-semibold text-base text-gray-700 p-1'>
            <Text h6 size={12} css={{ m: 0 }}>
              Conv. Confirmados
              </Text>
              <Text h6 size={12} css={{ m: 0 }}>
              {convidadosConfirmados}/{convidados}
              </Text>
              <Progress size="sm" value={25} color="warning" />
            </span> 
            </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>
      <Spacer y={1} />
      <div className="text-center font-bold underline underline-offset-8 uppercase mb-4">Selecção de Serviços</div>
     <div className="flex flex-row">
        <div className="flex flex-col justify-center mb-4">
        <Checkbox color="warning"><p className='text-sm'>Transporte</p></Checkbox>
        <Checkbox color="warning">Garçom</Checkbox>
        <Checkbox color="warning">Fotografia e Vídeo</Checkbox>
        <Checkbox color="warning">Catering</Checkbox>
        <Checkbox color="warning">Bolos e Sobremesas</Checkbox>
      </div> 
      <div className="flex flex-col justify-center mb-4">
        <Checkbox color="warning">Mestre de Ceremônia</Checkbox>
        <Checkbox color="warning">Streaming</Checkbox>
        <Checkbox color="warning">Salão e Local de Celebração</Checkbox>
        <Checkbox color="warning">Líquidos</Checkbox>
        <Checkbox color="warning">Vestuário</Checkbox>
      </div> 
      <div className="flex flex-col justify-center mb-4">
        <Checkbox color="warning">Musica e Manifestações Culturais</Checkbox>
        <Checkbox color="warning">Convites</Checkbox>
        <Checkbox color="warning">Lua-de-mel</Checkbox>
        <Checkbox color="warning">Protocolos</Checkbox>
        <Checkbox color="warning">Brindes</Checkbox>
      </div> 
      <div className="flex flex-col justify-center mb-4">
        <Checkbox color="warning">Cabelo e Mekeup</Checkbox>
        <Checkbox color="warning">Jóias e Bijuterias</Checkbox>
        <Checkbox color="warning">Buquê e Flores</Checkbox>
      </div> 
     </div>      
      <Spacer y={1} />
      <div className="text-center font-bold underline underline-offset-8 uppercase">Road Map</div>
        <Button onPress={() => setVisible(true)} bordered color="gradient" auto>
          + RaodMap
        </Button>
        <Grid.Container gap={2}>
      <Grid>
        <Collapse.Group shadow>
          {cronograma.length > 0 && cronograma.map((crono) => (
            <Collapse title={crono.titulo}>
              <Row justify="center" align="center">
              <Col css={{ d: "flex" }}>
                <Tooltip content="Editar Cronograma">
                  <IconButton onClick={() => editarCronograma(crono._id)}>
                    <EditIcon size={20} fill="#979797" />
                  </IconButton>
                </Tooltip>
              </Col>
              <Col css={{ d: "flex" }}>
                <Tooltip
                  content="Remover Cronograma"
                  color="error"
                  onClick={() => removerConograma(crono._id)}
                >
                  <IconButton>
                    <DeleteIcon size={20} fill="#FF0080" />
                  </IconButton>
                </Tooltip>
              </Col>
            </Row>
              <Text>
                Data: {crono.data}
              </Text>
              <Text>
                {crono.corpo}
              </Text>
            </Collapse>
          ))}          
        </Collapse.Group>
      </Grid>
    </Grid.Container>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              RaodMap
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            type='text'
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Titulo do RaodMap"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            type='date'
            value={data}
            onChange={(e) => setData(e.target.value)}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Titulo do RaodMap"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Textarea
            value={corpo}
            onChange={(e) => setCorpo(e.target.value)}
            label="Corpo do Cronograma"
            placeholder="Detalhes do Cronograma"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cancelar
          </Button>
          <Button auto onPress={saveCronograma}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </Profile>
    
  )
}

export default page