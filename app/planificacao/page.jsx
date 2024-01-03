"use client";
// import Profile from "@app/profile/page";
import Profile from '../../components/ProfilePage';
import React, { useState, useEffect } from "react";
import Nav from '../../components/Nav';
import { Image } from "@nextui-org/react";
import {
  Divider,
  Checkbox,
  Textarea,
  Modal,
  Input,
  Button,
  Dropdown,
  Link,
  Card,
  Row,
  Text,
  Spacer,
  Col,
  Progress,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Mail } from "../convidados/Mail";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { toast } from "react-toastify";
ChartJS.register(ArcElement, Tooltip, Legend);
// import Form from "@components/Form";
import Form from "../../components/Form";
let USDollar = new Intl.NumberFormat("en-US");
var precoTotal = 0;

var contagemVolaterl = 0;

function page() {
  const options = {};
  const { data: session } = useSession();
  const [evento, setEvento] = useState([]);
  const [servicosLista, setServicosLista] = useState([]);
  const [precosLista, setPrecosLista] = useState([]);
  const [nomesLista, setNomesLista] = useState([]);
  const [coresLista, setCoresLista] = useState([]);
  const [cronograma, setCronograma] = useState([]);
  const [totalMinimo, setTotalMinimo] = useState(0);
  const [servicosSeleccionados, setServicosSeleccionados] = useState([]);
  const [selecionadosLista, setselecionadosLista] = useState([]);
  const [convidados, setConvidados] = useState(0);
  const [totalP, setTatalP] = useState(0);
  const [visibleRemover, setVisibleRemover] = useState(false);
  const [detalheProduto, setdetalheProduto] = useState(false);
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
  const [seleccionarTudo, setseleccionarTudo] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [planificacaoTT, setPlanificacaoTT] = useState(true);
  const [idd4, setIDD4] = useState("");
  const [data, setData] = useState("");
  const [nomeVariavel, setNomeVariavel] = useState("");
  const [corpo, setCorpo] = useState("");
  const [servico, setServico] = useState("");
  const [custoEstimado, setcustoEstimado] = useState("");
  const [grupos, setGrupos] = useState([]);
  const [custoFinal, setcustoFinal] = useState("");
  const [custoStatus, setcustoStatus] = useState("");
  const [convidadosConfirmados, setConvidadosConfirmados] = useState(0);
  const [visible, setVisible] = useState(false);
  const [momentosVisible, setMomentosVisible] = useState(false);
  const [visibleServicos, setVisibleServicos] = useState(false);
  const [processando, setProcessando] = useState(false);
  const [algumEvento, setAlgumEvento] = useState(false);
  const [isHovering, setIsHovered] = useState(false);
  const [selected, setSelected] = React.useState(
    new Set(["Momentos do Evento"])
  );
  const links = [
    { img: "/assets/images/almoco.png", nome: "Almoço", id: "1" },
    { img: "/assets/images/arco.png", nome: "Enlace Matrimonial", id: "2" },
    { img: "/assets/images/party.png", nome: "After Party", id: "3" },
  ];
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [evento2, setEvento2] = useState({
    nomeNoiva: "",
    nomeNoivo: "",
    localEvento: "",
    dataEvento: "",
    orcamentoInicial: "",
  });
  var momentosLista = [
    "Outros",
    "Almoço",
    "After Party",
    "Ceremónia Religiosa",
  ];
  useEffect(() => {
    setGrupos(momentosLista);
  }, []);
  
  useEffect(() => {
    document.querySelectorAll('.button').forEach(button => {

      let duration = 3000,
          svg = button.querySelector('svg'),
          svgPath = new Proxy({
              y: null,
              smoothing: null
          }, {
              set(target, key, value) {
                  target[key] = value;
                  if(target.y !== null && target.smoothing !== null) {
                      svg.innerHTML = getPath(target.y, target.smoothing, null);
                  }
                  return true;
              },
              get(target, key) {
                  return target[key];
              }
          });
  
      button.style.setProperty('--duration', duration);
  
      svgPath.y = 20;
      svgPath.smoothing = 0;
  
      button.addEventListener('click', e => {
          
          e.preventDefault();
  
          if(!button.classList.contains('loading')) {
  
              button.classList.add('loading');
  
              gsap.to(svgPath, {
                  smoothing: .3,
                  duration: duration * .065 / 1000
              });
  
              gsap.to(svgPath, {
                  y: 12,
                  duration: duration * .265 / 1000,
                  delay: duration * .065 / 1000,
                  ease: Elastic.easeOut.config(1.12, .4)
              });
  
              setTimeout(() => {
                  svg.innerHTML = getPath(0, 0, [
                      [3, 14],
                      [8, 19],
                      [21, 6]
                  ]);
              }, duration / 2);
  
          }
  
      });  
    });
  
    function getPoint(point, i, a, smoothing) {
        let cp = (current, previous, next, reverse) => {
                let p = previous || current,
                    n = next || current,
                    o = {
                        length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                        angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                    },
                    angle = o.angle + (reverse ? Math.PI : 0),
                    length = o.length * smoothing;
                return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
            },
            cps = cp(a[i - 1], a[i - 2], point, false),
            cpe = cp(point, a[i - 1], a[i + 1], true);
        return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
    }
  
    function getPath(update, smoothing, pointsNew) {
        let points = pointsNew ? pointsNew : [
                [4, 12],
                [12, update],
                [20, 12]
            ],
            d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
        return `<path d="${d}" />`;
    }
  }, []);


  let selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  // const createEvento = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);
  //   try {
  //       const response = await fetch('api/eventos/new', {
  //           method: 'POST',
  //           body: JSON.stringify({
  //               nomeNoiva: evento.nomeNoiva,
  //               nomeNoivo: evento.nomeNoivo,
  //               localEvento: evento.localEvento,
  //               dataEvento: evento.dataEvento,
  //               orcamentoInicial: evento.orcamentoInicial,
  //               userId: session?.user.id,
  //           })
  //       })
  //       if (response.ok) {
  //           router.push('/dashboard/dasPage');
  //       }
  //   } catch (error) {
  //       console.log(error);
  //   } finally {
  //       setSubmitting(false);
  //   }
  // }
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      console.log("Eventos:", data.length);
      setEvento(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/cronogramasT/${session?.user.id}/cronograma`
      );
      const data = await response.json();
      console.log(data);
      setCronograma(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  useEffect(() => {
    var nomes = [];
    var precos = [];
    var cores = [];
    var totalMinimoV = 0;
    const fetchPosts = async () => {
      const response = await fetch(`/api/listaServicos/${session?.user.id}`);
      const data = await response.json();
      console.log("Serviços Seleccionados", data);
      data.map((servico) => {
        console.log(servico.nomeServico);
        nomes.push(servico.nomeServico);
        precos.push(servico.preco);
        cores.push(servico.cor);
        totalMinimoV += parseFloat(servico.preco);
        if (servico.nomeServico === "Transporte") {
          setTransporteVal(true);
        }
        if (servico.nomeServico === "Garçom") {
          setGarcomVal(true);
        }
        if (servico.nomeServico === "Fotografia e Vídeo") {
          setFotoVideoVal(true);
        }
        if (servico.nomeServico === "Catering") {
          setcateringVal(true);
        }
        if (servico.nomeServico === "Bolos e Sobremesas") {
          setbolosSobremesasVal(true);
        }
        if (servico.nomeServico === "Mestre de Ceremônia") {
          setMcVal(true);
        }
        if (servico.nomeServico === "Streaming") {
          setStreamingVal(true);
        }
        if (servico.nomeServico === "Local de Celebração") {
          setlocalSelebracaoVal(true);
        }
        if (servico.nomeServico === "Líquidos") {
          setliquidoVal(true);
        }
        if (servico.nomeServico === "Brindes") {
          setbrindesVal(true);
        }
        if (servico.nomeServico === "Musica e Manifestações Culturais") {
          setculturalVal(true);
        }
        if (servico.nomeServico === "Convites") {
          setconvitesVal(true);
        }
        if (servico.nomeServico === "Lua-de-mel") {
          setLuaMelVal(true);
        }
        if (servico.nomeServico === "Protocolos") {
          setprotocolosVal(true);
        }
        if (servico.nomeServico === "Vestuário") {
          setvestuariosVal(true);
        }
        if (servico.nomeServico === "Cabelo e Mekeup") {
          setmekeUpVal(true);
        }
        if (servico.nomeServico === "Jóias e Bijuterias") {
          setjoiasVal(true);
        }
        if (servico.nomeServico === "Buquê e Flores") {
          setfloresVal(true);
        }
      });
      if (data.length != 0) setServicosSeleccionados(data);
      if (data.length != 0) setPrecosLista(precos);
      if (data.length != 0) setCoresLista(cores);
      if (data.length != 0) setNomesLista(nomes);
      console.log(servicosLista);
      setTotalMinimo(totalMinimoV);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  useEffect(() => {
    var nomes = [];
    var precos = [];
    var cores = [];
    var totalMinimoV = 0;
    const fetchPosts = async () => {
      const response = await fetch(`/api/listaServicos/${session?.user.id}`);
      const data = await response.json();
      console.log("Serviços Seleccionados", data);
      console.log("Serviços Seleccionados", contagemVolaterl);
      data.map((servico) => {
        console.log(servico.nomeServico);
        nomes.push(servico.nomeServico);
        precos.push(servico.preco);
        cores.push(servico.cor);
        totalMinimoV += parseFloat(servico.preco);
        if (servico.nomeServico === "Transporte") {
          setTransporteVal(true);
        }
        if (servico.nomeServico === "Garçom") {
          setGarcomVal(true);
        }
        if (servico.nomeServico === "Fotografia e Vídeo") {
          setFotoVideoVal(true);
        }
        if (servico.nomeServico === "Catering") {
          setcateringVal(true);
        }
        if (servico.nomeServico === "Bolos e Sobremesas") {
          setbolosSobremesasVal(true);
        }
        if (servico.nomeServico === "Mestre de Ceremônia") {
          setMcVal(true);
        }
        if (servico.nomeServico === "Streaming") {
          setStreamingVal(true);
        }
        if (servico.nomeServico === "Local de Celebração") {
          setlocalSelebracaoVal(true);
        }
        if (servico.nomeServico === "Líquidos") {
          setliquidoVal(true);
        }
        if (servico.nomeServico === "Brindes") {
          setbrindesVal(true);
        }
        if (servico.nomeServico === "Musica e Manifestações Culturais") {
          setculturalVal(true);
        }
        if (servico.nomeServico === "Convites") {
          setconvitesVal(true);
        }
        if (servico.nomeServico === "Lua-de-mel") {
          setLuaMelVal(true);
        }
        if (servico.nomeServico === "Protocolos") {
          setprotocolosVal(true);
        }
        if (servico.nomeServico === "Vestuário") {
          setvestuariosVal(true);
        }
        if (servico.nomeServico === "Cabelo e Mekeup") {
          setmekeUpVal(true);
        }
        if (servico.nomeServico === "Jóias e Bijuterias") {
          setjoiasVal(true);
        }
        if (servico.nomeServico === "Buquê e Flores") {
          setfloresVal(true);
        }
      });

      if (data.length != 0) setServicosSeleccionados(data);
      if (data.length != 0) setNomesLista(nomes);
      if (data.length != 0) setPrecosLista(precos);
      if (data.length != 0) setCoresLista(cores);
      setTotalMinimo(totalMinimoV);
      setPlanificacaoTT(true);
    };
    if (session?.user.id) fetchPosts();
  }, [contagemVolaterl]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setEvento(data);
      if (evento.length === 0) setAlgumEvento(true);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  useEffect(() => {
    var listaVolatel = [];
    setIsSelected(false);
    if (!isSelected) setTatalP(0);

    if (
      transporteVal ||
      garcomVal ||
      fotoVideoVal ||
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
      floresVal
    )
      setIsSelected(true);
    precoTotal = 0;
    if (transporteVal) {
      precoTotal += 3000;
      setTransporteVal(true);
      listaVolatel.push({
        nomeServico: "Transporte",
        preco: "3000",
        cor: "rgb(255, 99, 132)",
      });
    }
    if (garcomVal) {
      precoTotal += 3000;
      setGarcomVal(true);
      listaVolatel.push({
        nomeServico: "Garçom",
        preco: "3000",
        cor: "rgb(54, 162, 235)",
      });
    }
    if (fotoVideoVal) {
      precoTotal += 3000;
      setFotoVideoVal(true);
      listaVolatel.push({
        nomeServico: "Fotografia e Video",
        preco: "3000",
        cor: "rgb(54, 162, 235)",
      });
    }
    if (cateringVal) {
      precoTotal += 3000;
      setcateringVal(true);
      listaVolatel.push({
        nomeServico: "Catering",
        preco: "3000",
        cor: "rgb(0,255,0)",
      });
    }
    if (bolosSobremesasVal) {
      precoTotal += 3000;
      setbolosSobremesasVal(true);
      listaVolatel.push({
        nomeServico: "Bolos e Sobremesas",
        preco: "3000",
        cor: "rgb(0,255,255)",
      });
    }
    if (mcVal) {
      precoTotal += 3000;
      setMcVal(true);
      listaVolatel.push({
        nomeServico: "MC",
        preco: "3000",
        cor: "rgb(0,255,255)",
      });
    }
    // navy
    if (streamingVal) {
      precoTotal += 3000;
      setStreamingVal(true);
      listaVolatel.push({
        nomeServico: "Streaming",
        preco: "3000",
        cor: "rgb(0,205,255)",
      });
    }
    // peach puff
    if (localSelebracaoVal) {
      precoTotal += 3000;
      setlocalSelebracaoVal(true);
      listaVolatel.push({
        nomeServico: "Local de Selebração",
        preco: "3000",
        cor: "rgb(255,218,185)",
      });
    }
    // azure
    if (liquidoVal) {
      precoTotal += 3000;
      setPrecosLista(true);
      listaVolatel.push({
        nomeServico: "Liquidos",
        preco: "3000",
        cor: "rgb(240,255,255)",
      });
    }
    // maroon
    if (brindesVal) {
      precoTotal += 3000;
      setbrindesVal(true);
      listaVolatel.push({
        nomeServico: "Brindes",
        preco: "3000",
        cor: "rgb(128,0,0)",
      });
    }
    // crimson
    if (culturalVal) {
      precoTotal += 3000;
      setculturalVal(true);
      listaVolatel.push({
        nomeServico: "Musica e Man. Cultural",
        preco: "3000",
        cor: "rgb(220,20,60)",
      });
    }
    // gold
    if (convitesVal) {
      precoTotal += 3000;
      setconvitesVal(true);
      listaVolatel.push({
        nomeServico: "Convites",
        preco: "3000",
        cor: "rgb(255,215,0)",
      });
    }
    // dark green
    if (luaMelVal) {
      precoTotal += 3000;
      setLuaMelVal(true);
      listaVolatel.push({
        nomeServico: "Lua-de-Mel",
        preco: "3000",
        cor: "rgb(0,100,0)",
      });
    }
    // light sea green
    if (protocolosVal) {
      precoTotal += 3000;
      setprotocolosVal(true);
      listaVolatel.push({
        nomeServico: "Protocolo",
        preco: "3000",
        cor: "rgb(32,178,170)",
      });
    }
    // snow
    if (vestuariosVal) {
      precoTotal += 3000;
      setvestuariosVal(true);
      listaVolatel.push({
        nomeServico: "Vestuario",
        preco: "3000",
        cor: "rgb(255,250,250)",
      });
    }
    // 	chocolate
    if (mekeUpVal) {
      precoTotal += 3000;
      setmekeUpVal(true);
      listaVolatel.push({
        nomeServico: "Cabelo e MekeUp",
        preco: "3000",
        cor: "rgb(210,105,30)",
      });
    }
    // rosy brown
    if (joiasVal) {
      precoTotal += 3000;
      setjoiasVal(true);
      listaVolatel.push({
        nomeServico: "Jóias e Bijuterias",
        preco: "3000",
        cor: "rgb(188,143,143)",
      });
    }
    // light steel blue
    if (floresVal) {
      precoTotal += 3000;
      setfloresVal(true);
      listaVolatel.push({
        nomeServico: "Buquê e Flores",
        preco: "3000",
        cor: "rgb(176,196,222)",
      });
    }
    setTatalP(precoTotal);
    setselecionadosLista(listaVolatel);
  }, [
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
    floresVal,
  ]);

  const closeHandler = () => {
    setVisible(false);
  };
  const openMomentos = () => {
    setMomentosVisible(true);
  };
  const closeMomentos = () => {
    setMomentosVisible(false);
  };
  const closeHandlerServicos = () => {
    setVisibleServicos(false);
  };
  const confirmarServicos = async () => {
    toast.info("Adicionando Serviços!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    precoTotal = 0;
    if (transporteVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Transporte",
            preco: "3000",
            cor: "rgb(255, 99, 132)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (garcomVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Garçom",
            preco: "3000",
            cor: "rgb(54, 162, 235)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (fotoVideoVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Fotografia e Vídeo",
            preco: "3000",
            cor: "rgb(54, 162, 235)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (cateringVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Catering",
            preco: "3000",
            cor: "rgb(0,255,0)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (bolosSobremesasVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Bolos e Sobremesas",
            preco: "3000",
            cor: "rgb(0,255,255)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (mcVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Mestre de Ceremônia",
            preco: "3000",
            cor: "rgb(0,255,255)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (streamingVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Streaming",
            preco: "3000",
            cor: "rgb(0,205,255)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (localSelebracaoVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Local de Celebração",
            preco: "3000",
            cor: "rgb(255,218,185)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (liquidoVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Líquidos",
            preco: "3000",
            cor: "rgb(240,255,255)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (brindesVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Brindes",
            preco: "3000",
            cor: "rgb(128,0,0)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (culturalVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Musica e Manifestações Culturais",
            preco: "3000",
            cor: "rgb(220,20,60)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (convitesVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Convites",
            preco: "3000",
            cor: "rgb(255,215,0)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (luaMelVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Lua-de-Mel",
            preco: "3000",
            cor: "rgb(0,100,0)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (protocolosVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Protocolos",
            preco: "3000",
            cor: "rgb(32,178,170)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (vestuariosVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Vestuário",
            preco: "3000",
            cor: "rgb(255,250,250)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (mekeUpVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Cabelo e Mekeup",
            preco: "3000",
            cor: "rgb(210,105,30)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (joiasVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Jóias e Bijuterias",
            preco: "3000",
            cor: "rgb(188,143,143)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    if (floresVal) {
      precoTotal += 3000;
      try {
        const response = await fetch("api/listaServicos/new", {
          method: "POST",
          body: JSON.stringify({
            nomeServico: "Buquê e Flores",
            preco: "3000",
            cor: "rgb(176,196,222)",
            userId: session?.user.id,
          }),
        });
      } catch (error) {
        toast.error("Erro ao adicionar serviços!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
      }
    }
    setTatalP(precoTotal);

    toast.success("Serviços Adicionados Com Sucesso!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  function removerConograma(iD) {
    cronograma.map((crono) => {
      if (crono._id === iD) {
        setData(crono.data);
        setCorpo(crono.corpo);
        setTitulo(crono.titulo);
        setIDD4(iD);
      }
    });
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
    });
    setVisibleEditar(true);
  }

  async function saveCronograma() {
    setVisible(false);
    setProcessando(true);
    try {
      const response = await fetch("api/cronogramas/new", {
        method: "POST",
        body: JSON.stringify({
          titulo,
          data,
          corpo,
          userId: session?.user.id,
        }),
      });
      if (response.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setProcessando(false);
      // router.push('/dashboard');
    }
  }
  function servicosSolicitados() {
    setPlanificacaoTT(false);
  }
  function servicosPlanificacao() {
    setPlanificacaoTT(true);
  }
  useEffect(() => {
    console.log(mekeUpVal);
  }, [mekeUpVal]);

  function seleccaoTudo() {
    setseleccionarTudo(true);
    setTransporteVal(false);
    setGarcomVal(false);
    setFotoVideoVal(false);
    setcateringVal(false);
    setbolosSobremesasVal(false);
    setMcVal(false);
    setStreamingVal(false);
    setlocalSelebracaoVal(false);
    setliquidoVal(false);
    setbrindesVal(false);
    setculturalVal(false);
    setconvitesVal(false);
    setLuaMelVal(false);
    setprotocolosVal(false);
    setvestuariosVal(false);
    setmekeUpVal(false);
    setjoiasVal(false);
    setfloresVal(false);
  }
  function removerTudo() {
    setseleccionarTudo(false);
    setTransporteVal(true);
    setGarcomVal(true);
    setFotoVideoVal(true);
    setcateringVal(true);
    setbolosSobremesasVal(true);
    setMcVal(true);
    setStreamingVal(true);
    setlocalSelebracaoVal(true);
    setliquidoVal(true);
    setbrindesVal(true);
    setculturalVal(true);
    setconvitesVal(true);
    setLuaMelVal(true);
    setprotocolosVal(true);
    setvestuariosVal(true);
    setmekeUpVal(true);
    setjoiasVal(true);
    setfloresVal(true);
  }
  async function removerServicoProduto(id, servico) {
    console.log("ID do produto:", id);
    toast.info("Removendo: " + servico, {
      position: toast.POSITION.TOP_RIGHT,
    });
    try {
      const response = await fetch(`api/listaServicos/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      toast.error(`Erro ao remover ${servico}!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      toast.success(`${servico} Removido com Sucesso!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      contagemVolaterl += 1;
      setPlanificacaoTT(false);
    }
  }
  function productSelec(id) {
    setdetalheProduto(true);
    const fetchPosts = async () => {
      const response = await fetch(`/api/listaServicos/${session?.user.id}`);
      const data = await response.json();
      data.map((servico) => {
        if (servico._id === id) {
          setTransporteVal(true);
          setServico(servico.nomeServico);
          setcustoEstimado(servico.preco);
          setcustoFinal("0");
          setcustoStatus(servico.preco);
        }
      });
    };
    if (session?.user.id) fetchPosts();
  }
  function productClose() {
    setdetalheProduto(false);
  }
  function eventosExiste() {
    setAlgumEvento(false);
  }
  function onMouseEnter(id) {
    setIsHovered(true);
    links.map((link) => {
      if (id === link.id) {
        setIDD4(link.id);
        setNomeVariavel(link.nome);
      }
    });
  }
  function onMouseLeave(id) {
    setIsHovered(false);
  }
  const data2 = {
    labels: nomesLista,
    datasets: [
      {
        label: "Serviços",
        data: precosLista,
        backgroundColor: coresLista,
        hoverOffset: 4,
      },
    ],
  };
  // Agua
  return (
    <>
      <main className='app'>
        <Nav />
        <Profile>
          {/* {evento.length === 0 ? ( */}
          {algumEvento ? (
            <>
              <svg
                onClick={() => eventosExiste()}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
              <div className="flex justify-center content-center justify-items-center">
                <Form
                  type="Salvar"
                  evento={evento}
                  setEvento={setEvento2}
                  submitting={submitting}
                  planificador={session?.user.name}
                  planificadorId={session?.user.id}
                />
              </div>
            </>
          ) : (
            <>
              {planificacaoTT ? (
                <>
                  <div className="flex flex-row">
                    {/* <div className="text-center font-bold text-2xl mb-4">Planificação</div> */}
                  </div>
                  <div>
                    <Image
                      src={"/assets/images/sacolaDinheiro.png"}
                      alt={"Gestao de Eventos Logo"}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center font-bold underline underline-offset-8 uppercase mb-4">
                    Orçamentação
                  </div>
                  <div className="flex flex-row mr-4 ml-4 justify-between">
                    <p className="font-bold mb-4">Orçamento Disponivel</p>
                    <p className="font-bold mb-4">Orçamento Real</p>
                    <p className="font-bold mb-4">Momentos do Evento</p>
                    {/* <button
                      type={"button"}
                      onClick={() => {}}
                      className="black_btn"
                    >
                      Calculadora
                    </button> */}
                  </div>
                  <Row gap={1}>
                    <Col>
                      <Card>
                        <div className="justify-center items-center">
                          <Card.Body>
                            <span className="font-satoshi font-semibold text-base text-gray-700 p-1">
                              {evento.length > 0 &&
                                evento.map((event) => (
                                  <>
                                    <Text h6 size={12} css={{ m: 0 }}>
                                      Orçamento Inicial
                                    </Text>
                                    <Text h6 size={12} css={{ m: 0 }}>
                                      {USDollar.format(event.orcamentoInicial)}.00
                                      Mt
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
                        <div
                          className="justify-center items-center"
                          onClick={() => servicosSolicitados()}
                        >
                          <Card.Body>
                            <span className="font-satoshi font-semibold text-base text-gray-700 p-1">
                              <Text h6 size={12} css={{ m: 0 }}>
                                Serv. Solicitados
                              </Text>
                              <Text h6 size={12} css={{ m: 0 }}>
                                {USDollar.format(totalP)}.00 Mt
                              </Text>
                              <Progress
                                size="sm"
                                value={(totalP / 54000) * 100}
                                color="warning"
                              />
                            </span>
                          </Card.Body>
                        </div>
                      </Card>
                    </Col>
                    <Col>
                      <Row>
                        {links.length > 0 &&
                          links.map((link) => (
                            <Col>
                              <Card>
                                <div
                                  onMouseEnter={() => onMouseEnter(link.id)}
                                  onMouseLeave={onMouseLeave}
                                  cursor
                                >
                                  <Card.Body>
                                    <span className="font-satoshi font-semibold text-base text-gray-700 p-1">
                                      <Link>
                                        {isHovering ? (
                                          <div className="flex text-center justify-center">
                                            {idd4 === link.id && (
                                              <Text h6 size={12} css={{ m: 0 }}>
                                                {nomeVariavel}
                                              </Text>
                                            )}
                                          </div>
                                        ) : (
                                          <></>
                                        )}
                                        <div className="flex flex-row gap-2">
                                          <Image
                                            src={link.img}
                                            alt={"Momentos do Evento"}
                                            width={50}
                                            height={50}
                                            className="object-contain"
                                          />
                                        </div>
                                      </Link>
                                    </span>
                                  </Card.Body>
                                </div>
                              </Card>
                            </Col>
                          ))}

                        <button
                          type={"button"}
                          onClick={() => openMomentos()}
                          className="black_btn"
                        >
                          +
                        </button>
                      </Row>
                    </Col>
                  </Row>

                  <Spacer y={1} />
                  <div className="text-center font-bold underline underline-offset-8 uppercase mb-4">
                    Selecção de Serviços
                  </div>
                  {seleccionarTudo ? (
                    <>
                      <button
                        type={"button"}
                        onClick={removerTudo}
                        className="black_btn m-4"
                      >
                        Remover Tudo
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type={"button"}
                        onClick={seleccaoTudo}
                        className="black_btn m-4"
                      >
                        Seleccionar Tudo
                      </button>
                    </>
                  )}

                  {isSelected ? (
                    <>
                      <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-2 justify-center mb-4">
                          <Checkbox
                            defaultSelected={transporteVal}
                            color="warning"
                            onChange={(e) => setTransporteVal(e)}
                          >
                            <p className="text-sm">Transporte</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={garcomVal}
                            color="warning"
                            onChange={(e) => setGarcomVal(e)}
                          >
                            <p className="text-sm">Garçom</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={fotoVideoVal}
                            color="warning"
                            onChange={(e) => setFotoVideoVal(e)}
                          >
                            <p className="text-sm">Fotografia e Vídeo</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={cateringVal}
                            color="warning"
                            onChange={(e) => setcateringVal(e)}
                          >
                            <p className="text-sm">Catering</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={bolosSobremesasVal}
                            color="warning"
                            onChange={(e) => setbolosSobremesasVal(e)}
                          >
                            <p className="text-sm">Bolos e Sobremesas</p>
                          </Checkbox>
                        </div>
                        <div className="flex flex-col gap-2 justify-center mb-4">
                          <Checkbox
                            defaultSelected={mcVal}
                            color="warning"
                            onChange={(e) => setMcVal(e)}
                          >
                            <p className="text-sm">Mestre de Ceremônia</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={streamingVal}
                            color="warning"
                            onChange={(e) => setStreamingVal(e)}
                          >
                            <p className="text-sm">Streaming</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={localSelebracaoVal}
                            color="warning"
                            onChange={(e) => setlocalSelebracaoVal(e)}
                          >
                            <p className="text-sm">Local de Celebração</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={liquidoVal}
                            color="warning"
                            onChange={(e) => setliquidoVal(e)}
                          >
                            <p className="text-sm">Líquidos</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={brindesVal}
                            color="warning"
                            onChange={(e) => setbrindesVal(e)}
                          >
                            <p className="text-sm">Brindes</p>
                          </Checkbox>
                          <Checkbox
                            // defaultSelected={brindesVal}
                            color="warning"
                            // onChange={(e) => setbrindesVal(e)}
                          >
                            <p className="text-sm">Pula-Pula</p>
                          </Checkbox>
                        </div>
                        <div className="flex flex-col gap-2 justify-center mb-4">
                          <Checkbox
                            defaultSelected={culturalVal}
                            color="warning"
                            onChange={(e) => setculturalVal(e)}
                          >
                            <p className="text-sm">
                              Musica e Manifestações Culturais
                            </p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={convitesVal}
                            color="warning"
                            onChange={(e) => setconvitesVal(e)}
                          >
                            <p className="text-sm">Convites</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={luaMelVal}
                            color="warning"
                            onChange={(e) => setLuaMelVal(e)}
                          >
                            <p className="text-sm">Lua-de-mel</p>
                          </Checkbox>
                        </div>
                        <div className="flex flex-col gap-2 justify-center mb-4">
                          <Checkbox
                            defaultSelected={vestuariosVal}
                            color="warning"
                            onChange={(e) => setvestuariosVal(e)}
                          >
                            <p className="text-sm">Vestuário</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={mekeUpVal}
                            color="warning"
                            onChange={(e) => setmekeUpVal(e)}
                          >
                            <p className="text-sm">Cabelo e Mekeup</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={joiasVal}
                            color="warning"
                            onChange={(e) => setjoiasVal(e)}
                          >
                            <p className="text-sm">Jóias e Bijuterias</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={floresVal}
                            color="warning"
                            onChange={(e) => setfloresVal(e)}
                          >
                            <p className="text-sm">Buquê e Flores</p>
                          </Checkbox>
                        </div>
                      </div>
                      <button
                        type={"button"}
                        onClick={confirmarServicos}
                        className="black_btn"
                      >
                        Confirmar
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-row gap-4 justify-center">
                        <div className="flex flex-col gap-2 justify-center mb-4">
                          <Checkbox
                            defaultSelected={transporteVal}
                            color="warning"
                            onChange={(e) => setTransporteVal(e)}
                          >
                            <p className="text-sm">Transporte</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={garcomVal}
                            color="warning"
                            onChange={(e) => setGarcomVal(e)}
                          >
                            <p className="text-sm">Garçom e Protocolo</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={fotoVideoVal}
                            color="warning"
                            onChange={(e) => setFotoVideoVal(e)}
                          >
                            <p className="text-sm">Fotografia e Vídeo</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={cateringVal}
                            color="warning"
                            onChange={(e) => setcateringVal(e)}
                          >
                            <p className="text-sm">Catering e Rodízio</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={bolosSobremesasVal}
                            color="warning"
                            onChange={(e) => setbolosSobremesasVal(e)}
                          >
                            <p className="text-sm">Bolos e Sobremesas</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={bolosSobremesasVal}
                            color="warning"
                            // onChange={(e) => setbolosSobremesasVal(e)}
                          >
                            <p className="text-sm">Som e Luz</p>
                          </Checkbox>
                        </div>
                        <div className="flex flex-col gap-2 justify-center mb-4">
                          <Checkbox
                            defaultSelected={mcVal}
                            color="warning"
                            onChange={(e) => setMcVal(e)}
                          >
                            <p className="text-sm">Mestre de Ceremônia</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={streamingVal}
                            color="warning"
                            onChange={(e) => setStreamingVal(e)}
                          >
                            <p className="text-sm">Streaming</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={localSelebracaoVal}
                            color="warning"
                            onChange={(e) => setlocalSelebracaoVal(e)}
                          >
                            <p className="text-sm">Local de Celebração</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={liquidoVal}
                            color="warning"
                            onChange={(e) => setliquidoVal(e)}
                          >
                            <p className="text-sm">Líquidos e Cocktails</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={brindesVal}
                            color="warning"
                            onChange={(e) => setbrindesVal(e)}
                          >
                            <p className="text-sm">Brindes</p>
                          </Checkbox>
                          <Checkbox
                            // defaultSelected={brindesVal}
                            color="warning"
                            // onChange={(e) => setbrindesVal(e)}
                          >
                            <p className="text-sm">Pula-Pula</p>
                          </Checkbox>
                        </div>
                        <div className="flex flex-col gap-2 justify-center mb-4">
                          <Checkbox
                            defaultSelected={culturalVal}
                            color="warning"
                            onChange={(e) => setculturalVal(e)}
                          >
                            <p className="text-sm">
                              Musica e Manifestações Culturais
                            </p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={convitesVal}
                            color="warning"
                            onChange={(e) => setconvitesVal(e)}
                          >
                            <p className="text-sm">Convites</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={luaMelVal}
                            color="warning"
                            onChange={(e) => setLuaMelVal(e)}
                          >
                            <p className="text-sm">Lua-de-mel</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={protocolosVal}
                            color="warning"
                            onChange={(e) => setprotocolosVal(e)}
                          >
                            <p className="text-sm">Churasco</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={protocolosVal}
                            color="warning"
                            // onChange={(e) => setprotocolosVal(e)}
                          >
                            <p className="text-sm">Telas e Projectores</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={protocolosVal}
                            color="warning"
                            // onChange={(e) => setprotocolosVal(e)}
                          >
                            <p className="text-sm">Tendas e Truss</p>
                          </Checkbox>
                        </div>
                        <div className="flex flex-col gap-2 justify-center mb-4">
                          <Checkbox
                            defaultSelected={vestuariosVal}
                            color="warning"
                            onChange={(e) => setvestuariosVal(e)}
                          >
                            <p className="text-sm">Vestuário</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={mekeUpVal}
                            color="warning"
                            onChange={(e) => setmekeUpVal(e)}
                          >
                            <p className="text-sm">Cabelo e Mekeup</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={joiasVal}
                            color="warning"
                            onChange={(e) => setjoiasVal(e)}
                          >
                            <p className="text-sm">Jóias e Bijuterias</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={floresVal}
                            color="warning"
                            onChange={(e) => setfloresVal(e)}
                          >
                            <p className="text-sm">Buquê e Flores</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={floresVal}
                            color="warning"
                            onChange={(e) => setfloresVal(e)}
                          >
                            <p className="text-sm">Fumaça e Fogos de Artificio</p>
                          </Checkbox>
                          <Checkbox
                            defaultSelected={floresVal}
                            color="warning"
                            onChange={(e) => setfloresVal(e)}
                          >
                            <p className="text-sm">DJ</p>
                          </Checkbox>
                        </div>
                      </div>
                      <p>Nenhum Serviço Selecciona</p>
                    </>
                  )}
    
                  <Spacer y={1} />
                </>
              ) : (
                <>
                  {/* <Text className='text-center' h6 size={24} css={{ m: 0 }}>Serviços Solicitados</Text> */}
                  <div class="flex">
                    <div class="flex-none">
                      <svg
                        onClick={() => servicosPlanificacao()}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                        />
                      </svg>
                    </div>
                    <div class="flex-auto w-64"></div>
                    <div class="flex-auto w-32">
                      <span className="font-satoshi font-semibold text-base text-gray-700 p-1">
                        <div className="flex gap-4 justify-end">
                            <div>
                                <a href="" className="button">
                                    <ul>
                                        <li>&#68;ownload</li>
                                        <li>&#68;ownloading</li>
                                        <li>Open File</li>
                                    </ul>
                                    <div>
                                        <svg viewBox="0 0 24 24"></svg>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="" className="button">
                                    <ul>
                                        <li>&#68;ownload</li>
                                        <li>&#68;ownloading</li>
                                        <li>PDF</li>
                                    </ul>
                                    <div>
                                        <svg viewBox="0 0 24 24"></svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <Row gap={1} className="flex-auto w-64 mt-4">
                    <div className="w-2/5">
                      <Col>
                        <Card>
                          <div>
                            <Card.Body>
                              <span className="font-satoshi text-base text-gray-700 p-1">
                                <Text
                                  className="font-satoshi font-semibold text-base text-center text-gray-700 p-1"
                                  h6
                                  size={18}
                                  css={{ m: 0 }}
                                >
                                  Produtos e Serviços
                                </Text>
                                {servicosSeleccionados.length > 0 &&
                                  servicosSeleccionados.map((servico) => (
                                    <>
                                      <Card className="max-w-[400px]">
                                        <div className="flex flex-row justify-between content-between m-4 gap-4">
                                          <div>
                                            <Text
                                              h6
                                              size={12}
                                              css={{ m: 0 }}
                                              onClick={() =>
                                                productSelec(servico._id)
                                              }
                                            >
                                              {servico.nomeServico}
                                            </Text>
                                          </div>
                                          <div className="flex flex-row gap-4">
                                            <div>
                                              <Text h6 size={12} css={{ m: 0 }}>
                                                {servico.preco},00
                                              </Text>
                                            </div>
                                            <div>
                                              <button
                                                type="button"
                                                title="Remover"
                                                onClick={() =>
                                                  removerServicoProduto(
                                                    servico._id,
                                                    servico.nomeServico
                                                  )
                                                }
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke-width="1.5"
                                                  stroke="currentColor"
                                                  className="w-3 h-3"
                                                >
                                                  <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                  />
                                                </svg>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </Card>
                                    </>
                                  ))}
                                <div className="flex flex-row justify-between content-between m-4 font-satoshi font-semibold text-gray-700 p-1">
                                  <div>
                                    <Text h6 size={14} css={{ m: 0 }}>
                                      Total:
                                    </Text>
                                  </div>
                                  <div>
                                    <Text h6 size={14} css={{ m: 0 }}>
                                      {totalMinimo},00
                                    </Text>
                                  </div>
                                </div>
                              </span>
                            </Card.Body>
                          </div>
                        </Card>
                      </Col>
                    </div>
                    <div className="w-3/5">
                      <Col>
                        {detalheProduto ? (
                          <>
                            <Card>
                              <div onClick={() => servicosSolicitados()}>
                                <Card.Body>
                                  <span className="font-satoshi font-semibold text-base text-gray-700 p-1">
                                    <div className="text-rigth">
                                      <Text
                                        h6
                                        size={18}
                                        css={{ m: 0 }}
                                        onClick={() => productClose()}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          className="w-6 h-6"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                          />
                                        </svg>
                                      </Text>
                                    </div>
                                    <div className="text-center">
                                      <Text h6 size={18} css={{ m: 0 }}>
                                        {servico}
                                      </Text>
                                    </div>
                                    <div className="flex flex-row justify-between content-between mt-4 gap-4">
                                      <div>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          P. Minimo
                                        </Text>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          {custoEstimado},00 Mt
                                        </Text>
                                      </div>
                                      <div>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          P. Final
                                        </Text>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          0,00 Mt
                                        </Text>
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => {}}
                                          title="Editar"
                                          type="button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </span>
                                </Card.Body>
                              </div>
                            </Card>
                            <div className="mt-4"></div>
                            <Card>
                              <div onClick={() => servicosSolicitados()}>
                                <Card.Body>
                                  <span className="font-satoshi font-semibold text-base text-gray-700 p-1">
                                    <div className="flex flex-row justify-between content-between mt-4 gap-4">
                                      <div>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          Serviço
                                        </Text>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          {servico}
                                        </Text>
                                      </div>
                                      <div>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          Custo Estimado
                                        </Text>
                                        <fieldset class="checkbox-group">
                                          <div class="checkbox">
                                            <label class="checkbox-wrapper">
                                              <input type="checkbox" class="checkbox-input" />
                                              <span class="checkbox-tile">
                                                <span class="checkbox-label">{custoEstimado}</span>
                                              </span>
                                            </label>
                                          </div>
                                        </fieldset>
                                      </div>
                                      <div>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          Custo Final
                                        </Text>
                                        <fieldset class="checkbox-group">
                                          <div class="checkbox">
                                            <label class="checkbox-wrapper">
                                              <input type="checkbox" class="checkbox-input" />
                                              <span class="checkbox-tile">
                                                <span class="checkbox-label">{custoFinal}</span>
                                              </span>
                                            </label>
                                          </div>
                                        </fieldset>
                                      </div>
                                      <div>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          Pago
                                        </Text>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          {custoStatus}
                                        </Text>
                                      </div>
                                      <div>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          Acção
                                        </Text>
                                        <Link
                                          href={"#"}
                                          className="dropdown_link"
                                          onClick={() => {}}
                                        >
                                          <div className="text-center">
                                            <h1>...</h1>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  </span>
                                </Card.Body>
                              </div>
                              <div className="flex flex-row justify-between content-between mt-4 gap-4 font-satoshi font-semibold text-base text-gray-700 p-1">
                                <div className="ml-4">
                                  <Text b h6 size={12} css={{ m: 0 }}>
                                    Total
                                  </Text>
                                </div>
                                <div>
                                  <Text b h6 size={12} css={{ m: 0 }}>
                                    {custoEstimado}
                                  </Text>
                                </div>
                                <div>
                                  <Text b h6 size={12} css={{ m: 0 }}>
                                    {custoFinal}
                                  </Text>
                                </div>
                                <div>
                                  <Text b h6 size={12} css={{ m: 0 }}>
                                    {custoStatus}
                                  </Text>
                                </div>
                                <div>
                                  <Link
                                    href={"#"}
                                    className="dropdown_link"
                                    onClick={() => {}}
                                  >
                                    <div className="text-center">
                                      <h1></h1>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </Card>
                          </>
                        ) : (
                          <>
                            <Card>
                              <div onClick={() => servicosSolicitados()}>
                                <Card.Body>
                                  <span className="font-satoshi font-semibold text-base text-gray-700 p-1">
                                    <div className="text-center">
                                      <div>
                                        <Image
                                          src={"/assets/images/sacolaDinheiro.png"}
                                          alt={"Gestao de Eventos Logo"}
                                          width={50}
                                          height={50}
                                          className="object-contain"
                                        />
                                      </div>
                                      <Text h6 size={18} css={{ m: 0 }}>
                                        Orçamento
                                      </Text>
                                    </div>
                                    <div className="flex flex-row justify-between content-between mt-4 gap-4">
                                      <div className="text-center">
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          Disponivel
                                        </Text>
                                        {evento.length > 0 &&
                                          evento.map((event) => (
                                            <>
                                              <Text h6 size={12} css={{ m: 0 }}>
                                                {USDollar.format(
                                                  event.orcamentoInicial
                                                )}
                                                .00
                                              </Text>
                                            </>
                                          ))}
                                      </div>
                                      <div className="text-center">
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          Minimo
                                        </Text>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          {totalMinimo}
                                        </Text>
                                      </div>
                                      <div className="text-center">
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          Final
                                        </Text>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          0.00
                                        </Text>
                                      </div>
                                      <div className="text-center">
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          Excedente
                                        </Text>
                                        <Text h6 size={12} css={{ m: 0 }}>
                                          0.00
                                        </Text>
                                      </div>
                                    </div>
                                  </span>
                                  <div className="text-center">
                                    <small>
                                      O orçamento disponível pode ser editado quando
                                      julgar necessário!
                                    </small>
                                  </div>
                                  <Divider className="my-4" />
                                  <span className="font-satoshi font-semibold text-base text-gray-700 p-1 my-4">
                                    <div className="text-center">
                                      <Text h6 size={18} css={{ m: 0 }}>
                                        Distribuição de custos
                                      </Text>
                                    </div>
                                    <div className="mt-4">
                                      <Doughnut data={data2} />
                                    </div>
                                  </span>
                                </Card.Body>
                              </div>
                            </Card>
                          </>
                        )}
                      </Col>
                    </div>
                  </Row>
                </>
              )}
            </>
          )}

          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={momentosVisible}
            onClose={closeMomentos}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Momentos do Evento
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Dropdown>
                <Dropdown.Button flat color="warning" css={{ tt: "capitalize" }}>
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Gropos"
                  color="warning"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="Almoço">Almoço</Dropdown.Item>
                  <Dropdown.Item key="After Party">After Party</Dropdown.Item>
                  <Dropdown.Item key="Enlace Matrimonial">
                    Enlace Matrimonial
                  </Dropdown.Item>
                  <Dropdown.Item key="Outros">Outros</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {selectedValue === "Outros" && (
                <>
                  <Input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Memento (Ex: Copo de água)"
                    contentLeft={<Mail fill="currentColor" />}
                  />
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeMomentos}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
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
                type="text"
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
                type="date"
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
              <div className="flex flex-row justify-between">
                <div>
                  <p className="font-bold">Serviços Seleccionados</p>
                </div>
                <div>
                  <p className="font-bold">Preço</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  {selecionadosLista.length > 0 &&
                    selecionadosLista.map((serv) => <p>{serv.nomeServico}</p>)}
                </div>
                <div>
                  {selecionadosLista.length > 0 &&
                    selecionadosLista.map((serv) => (
                      <p>{USDollar.format(serv.preco)}</p>
                    ))}
                </div>
              </div>
              <div className="flex flex-row justify-between">
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
      </main>
    </>
  );
}

export default page;
