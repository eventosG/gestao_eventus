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
var precoTotal = 0;
function page() {
  const {data: session } = useSession();
  const [evento, setEvento] = useState([]);
  const [cronograma, setCronograma] = useState([]);
  const [selecionadosLista, setselecionadosLista] = useState([]);
  const [convidados, setConvidados] = useState(0);
  const [totalP, setTatalP] = useState(0);
  const [visibleRemover, setVisibleRemover] = useState(false);
  const [visibleEditar, setVisibleEditar] = useState(false);
  const [transporteVal, setTransporteVal] = useState(false);
  const [garcomVal, setGarcomVal] = useState(false);
  const [fotoVideoVal, setFotoVideoVal] = useState(false);
  const [cateringVal, setcateringVal] = useState(false);
  const [bolosSobremesasVal, setbolosSobremesasVal] = useState(false);
  const [mcVal, setMcVal] = useState(false);
  const [streamingVal, setStreamingVal] = useState(false);
  const [localSelebracaoVal, setlocalSelebracaoVal] = useState(false);
  const [liquidoVal, setliquidoVal] = useState(false);
  const [brindesVal, setbrindesVal] = useState(false);
  const [culturalVal, setculturalVal] = useState(false);
  const [convitesVal, setconvitesVal] = useState(false);
  const [luaMelVal, setLuaMelVal] = useState(false);
  const [protocolosVal, setprotocolosVal] = useState(false);
  const [vestuariosVal, setvestuariosVal] = useState(false);
  const [mekeUpVal, setmekeUpVal] = useState(false);
  const [joiasVal, setjoiasVal] = useState(false);
  const [floresVal, setfloresVal] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [idd4, setIDD4] = useState('');
  const [data, setData] = useState('');
  const [corpo, setCorpo] = useState('');
  const [convidadosConfirmados, setConvidadosConfirmados] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visibleServicos, setVisibleServicos] = useState(false);
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
    var listaVolatel = [];
    setIsSelected(false);
    if(!isSelected) setTatalP(0);
    
    if(transporteVal || garcomVal || fotoVideoVal ||
      cateringVal ||
      bolosSobremesasVal ||
      mcVal ||
      streamingVal ||
      localSelebracaoVal ||
      liquidoVal ||
      brindesVal ||
      culturalVal ||
      convitesVal ||
      luaMelVal ||
      protocolosVal ||
      vestuariosVal ||
      mekeUpVal ||
      joiasVal ||
      floresVal) setIsSelected(true);
      precoTotal = 0;  
      if(transporteVal){
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Transporte",
          preco: "3000"
        })
      }
      if(garcomVal){
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Garçom",
          preco: "3000"
        })
      }
      if(fotoVideoVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Fotografia e Video",
          preco: "3000"
        })
      }
      if(cateringVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Catering",
          preco: "3000"
        })
      }
      if(bolosSobremesasVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Bolos e Sobremesas",
          preco: "3000"
        })
      }
      if(mcVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "MC",
          preco: "3000"
        })
      }
      if(streamingVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Streaming",
          preco: "3000"
        })
      }
      if(localSelebracaoVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Local de Selebração",
          preco: "3000"
        })
      }
      if(liquidoVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Liquidos",
          preco: "3000"
        })
      }
      if(brindesVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Brindes",
          preco: "3000"
        })
      }
      if(culturalVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Musica e Man. Cultural",
          preco: "3000"
        })
      }
      if(convitesVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Convites",
          preco: "3000"
        })
      }
      if(luaMelVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Lua-de-Mel",
          preco: "3000"
        })
      }
      if(protocolosVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Protocolo",
          preco: "3000"
        })
      }
      if(vestuariosVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Vestuario",
          preco: "3000"
        })
      }
      if(mekeUpVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Cabelo e MekeUp",
          preco: "3000"
        })
      }
      if(joiasVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Jóias e Bijuterias",
          preco: "3000"
        })
      }
      if(floresVal) {
        precoTotal += 3000;
        listaVolatel.push({
          nomeServico: "Buquê e Flores",
          preco: "3000"
        })
      }
      setTatalP(precoTotal);
      setselecionadosLista(listaVolatel);
  },[
    transporteVal,
    garcomVal,
    fotoVideoVal,
    cateringVal,
    bolosSobremesasVal,
    mcVal,
    streamingVal,
    localSelebracaoVal,
    liquidoVal,
    brindesVal,
    culturalVal,
    convitesVal,
    luaMelVal,
    protocolosVal,
    vestuariosVal,
    mekeUpVal,
    joiasVal,
    floresVal
  ]);

  const closeHandler = () => {
    setVisible(false);
  };
  const closeHandlerServicos = () => {
    setVisibleServicos(false);
  };
  const confirmarServicos = () => {
    precoTotal = 0;    
    if(transporteVal) precoTotal += 3000;
    if(garcomVal) precoTotal += 3000;
    if(fotoVideoVal) precoTotal += 3000;
    if(cateringVal) precoTotal += 3000;
    if(bolosSobremesasVal) precoTotal += 3000;
    if(mcVal) precoTotal += 3000;
    if(streamingVal) precoTotal += 3000;
    if(localSelebracaoVal) precoTotal += 3000;
    if(liquidoVal) precoTotal += 3000;
    if(brindesVal) precoTotal += 3000;
    if(culturalVal) precoTotal += 3000;
    if(convitesVal) precoTotal += 3000;
    if(luaMelVal) precoTotal += 3000;
    if(protocolosVal) precoTotal += 3000;
    if(vestuariosVal) precoTotal += 3000;
    if(mekeUpVal) precoTotal += 3000;
    if(joiasVal) precoTotal += 3000;
    if(floresVal) precoTotal += 3000;
    setTatalP(precoTotal);
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
      {evento.length > 0 ? (
      <>
        <div className="text-center font-bold text-2xl mb-4">Planificação</div>
      </>
      ):(
        <>
        <div className="flex flex-row">
                <button type={"button"} onClick={() => {}} className="black_btn">
                  + Evento
                </button>
              <div className="text-center font-bold text-2xl mb-4">Planificação</div>
              </div>
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
                  <div className='justify-center items-center' onClick={() => setVisibleServicos(true)}>
                    <Card.Body>
                    <span className='font-satoshi font-semibold text-base text-gray-700 p-1'>
                    <Text h6 size={12} css={{ m: 0 }}>
                      Serv. Solicitados
                      </Text>
                      <Text h6 size={12} css={{ m: 0 }}>
                          {USDollar.format(totalP)}.00 Mt
                        </Text>
                      <Progress size="sm" value={(totalP/54000)*100} color="warning" />
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
             <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-2 justify-center mb-4">
                <Checkbox color="warning" onChange={(e) => setTransporteVal(e)}>
                  <p className='text-sm'>Transporte</p>
                </Checkbox>
                <Checkbox color="warning" onChange={(e) => setGarcomVal(e)}>
                  <p className='text-sm'>Garçom</p>
                </Checkbox>
                <Checkbox color="warning" onChange={(e) => setFotoVideoVal(e)}>
                  <p className='text-sm'>Fotografia e Vídeo</p>
                </Checkbox>
                <Checkbox color="warning" onChange={(e) => setcateringVal(e)}>
                  <p className='text-sm'>Catering</p>
                </Checkbox>
                <Checkbox color="warning" onChange={(e) => setbolosSobremesasVal(e)}>
                  <p className='text-sm'>Bolos e Sobremesas</p>
                </Checkbox>
              </div> 
              <div className="flex flex-col gap-2 justify-center mb-4">
                <Checkbox color="warning" onChange={(e) => setMcVal(e)}>
                  <p className='text-sm'>Mestre de Ceremônia</p>
                </Checkbox>
                <Checkbox color="warning" onChange={(e) => setStreamingVal(e)}>
                  <p className='text-sm'>Streaming</p>
                </Checkbox>
                <Checkbox color="warning" onChange={(e) => setlocalSelebracaoVal(e)}>
                  <p className='text-sm'>Local de Celebração</p>
                </Checkbox>
                <Checkbox color="warning" onChange={(e) => setliquidoVal(e)}>
                  <p className='text-sm'>Líquidos</p>
                  </Checkbox>
                <Checkbox color="warning" onChange={(e) => setbrindesVal(e)}>
                  <p className='text-sm'>Brindes</p>
                  </Checkbox>        
              </div> 
              <div className="flex flex-col gap-2 justify-center mb-4">
                <Checkbox color="warning" onChange={(e) => setculturalVal(e)}>
                  <p className='text-sm'>Musica e Manifestações Culturais</p>
                  </Checkbox>
                <Checkbox color="warning" onChange={(e) => setconvitesVal(e)}>
                  <p className='text-sm'>Convites</p>
                  </Checkbox>
                <Checkbox color="warning" onChange={(e) => setLuaMelVal(e)}>
                  <p className='text-sm'>Lua-de-mel</p>
                  </Checkbox>
                <Checkbox color="warning" onChange={(e) => setprotocolosVal(e)}>
                  <p className='text-sm'>Protocolos</p>
                  </Checkbox>        
              </div> 
              <div className="flex flex-col gap-2 justify-center mb-4">
                <Checkbox color="warning" onChange={(e) => setvestuariosVal(e)}>
                  <p className='text-sm'>Vestuário</p>
                  </Checkbox>
                <Checkbox color="warning" onChange={(e) => setmekeUpVal(e)}>
                  <p className='text-sm'>Cabelo e Mekeup</p>
                  </Checkbox>
                <Checkbox color="warning" onChange={(e) => setjoiasVal(e)}>
                  <p className='text-sm'>Jóias e Bijuterias</p>
                  </Checkbox>
                <Checkbox color="warning" onChange={(e) => setfloresVal(e)}>
                  <p className='text-sm'>Buquê e Flores</p>
                  </Checkbox>
              </div> 
             </div>
             {isSelected ? (
             <>
              <button type={"button"} onClick={confirmarServicos} className="black_btn">
                  Confirmar
              </button>
             </>
             ):(
             <>
              <p>Nenhum Serviço Selecciona</p>
             </>
             )}
             
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
        </>
      )}
      
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
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visibleServicos}
        onClose={closeHandlerServicos}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Serviços Solicitados
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className='flex flex-row justify-between'>
            <div><p className='font-bold'>Serviços Seleccionados</p></div>
            <div><p className='font-bold'>Preço</p></div>
          </div>
          <div className='flex flex-row justify-between'>
            <div>              
              {selecionadosLista.length > 0 && selecionadosLista.map((serv) => (
                <p>{serv.nomeServico}</p>
              ))}
            </div>
            <div>
            {selecionadosLista.length > 0 && selecionadosLista.map((serv) => (
                <p>{USDollar.format(serv.preco)}</p>
              ))}
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <div>              
              <p>.</p>
            </div>
            <div>
              <p>Total: {USDollar.format(totalP)}.00 Mt</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandlerServicos}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Profile>
    
  )
}

export default page