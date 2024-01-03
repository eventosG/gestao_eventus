"use client";
import Profile from '../../components/ProfilePage';
import { Image } from "@nextui-org/react";
import Nav from '../../components/Nav';
import React, { useState, useEffect } from "react";
import {
  Button,
  Loading,
  Textarea,
  Card,
  Row,
  Text,
  Modal,
  Input,
  Dropdown,
  Avatar,
  Link,
  Grid,  
  Col,
  Progress,
  Collapse,
  Table,
  Tooltip,
  User,
} from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { Mail } from "./Mail";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {Divider, Spacer} from "@nextui-org/react";
import Padrinhos from "./formularios/Padrinhos";
import Protocolos from "./formularios/Protocolos";
import Cavalheiros from "./formularios/Cavalheiros";
import Damas from "./formularios/Damas";
import FamiliaNoiva from "./formularios/FamiliaNoiva";
import FamiliaNoivo from "./formularios/FamiliaNoivo";
import FamiliaGraduado from "./formularios/FamiliaGraduado";
import {Select, SelectItem} from "@nextui-org/react";
import {animals} from "./data";

const linkG = process.env.NEXTAUTH_URL;
const links2 = [
  { img: "/assets/images/almoco.png", nome: "Almoço", id: "1" },
  { img: "/assets/images/arco.png", nome: "Enlace Matrimonial", id: "2" },
  { img: "/assets/images/party.png", nome: "After Party", id: "3" },
];
function Convidados() {
  let textoVariavel = "";
  let users = [];
  const router = useRouter();
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);
  const [visibleMesa, setVisibleMesa] = useState(false);
  const [visiblePadrinho, setVisiblePadrinho] = useState(false);
  const [visibleDetalhes, setVisibleDetalhes] = useState(false);
  const [visibleEditar, setVisibleEditar] = useState(false);
  const [visibleRemover, setVisibleRemover] = useState(false);
  const [nomeVariavel, setNomeVariavel] = useState("");
  const [iDDD, setIDDD] = useState(false);
  const [statusPadrinho, setStatusPadrinho] = useState(false);
  const [statusProtocolo, setStatusProtocolo] = useState(false);
  const [statusCavalheiro, setStatusCavalheiro] = useState(false);
  const [statusDamas, setStatusDamas] = useState(false);
  const [statusFamiliaNoiva, setStatusFamiliaNoiva] = useState(false);
  const [statusFamiliaNoivo, setStatusFamiliaNoivo] = useState(false);
  const [statusFamiliaGraduado, setStatusFamiliaGraduado] = useState(false);
  const [idd4, setIDD4] = useState("");
  const [grupo, setGrupo] = useState("");
  const [mesa, setMesa] = useState("");
  const [nomeConvidado, setNomeConvidado] = useState("");
  const [emailConvidado, setEmailConvidado] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [titulo, setTitulo] = useState("");
  const [seleccionadoFrom, setSeleccionadoFrom] = useState("");
  const [status, setStatus] = useState("pendente");
  const [grupos, setGrupos] = useState([]);
  const [mesas, setMesas] = useState([]);
  const [padrinhos, setPadrinhos] = useState([]);
  const [damas, setDamas] = useState([]);
  const [cavalheiros, setCavalheros] = useState([]);
  const [protocolos, setProtocolos] = useState([]);
  const [outros, setOutros] = useState([]);
  const [convitesSelect, setConvitesSelect] = useState([]);
  const [isHovering, setIsHovered] = useState(false);
  const [isHoveringEspeciais, setIsHoveredEspeciais] = useState(false);
  const [momentosVisible, setMomentosVisible] = useState(false);
  const [processando, setProcessando] = useState(false);
  const [selected, setSelected] = React.useState(new Set(["momento"]));
  const [selected1, setSelected1] = React.useState(new Set(["especiais"]));
  const [selected2, setSelected2] = React.useState(new Set(["familiares"]));
  const [selected3, setSelected3] = React.useState(new Set(["amigos"]));
  const [selected4, setSelected4] = React.useState(new Set(["colegas"]));
  const [selectedMesas, setSelectedMesas] = React.useState(new Set(["mesas"]));
  const [selectedMesasTipoConvidado, setSelectedMesasTipoConvidado] =
    React.useState(new Set(["Grupo"]));

  const links = [];
  let selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  let selectedValue1 = React.useMemo(
    () => Array.from(selected1).join(", ").replaceAll("_", " "),
    [selected1]
  );
  let selectedValue2 = React.useMemo(
    () => Array.from(selected2).join(", ").replaceAll("_", " "),
    [selected2]
  );
  let selectedValue3 = React.useMemo(
    () => Array.from(selected3).join(", ").replaceAll("_", " "),
    [selected3]
  );
  let selectedValue4 = React.useMemo(
    () => Array.from(selected4).join(", ").replaceAll("_", " "),
    [selected4]
  );
  let selectedValueMesas = React.useMemo(
    () => Array.from(selectedMesas).join(", ").replaceAll("_", " "),
    [selectedMesas]
  );
  let selectedValueTipoConvidado = React.useMemo(
    () =>
      Array.from(selectedMesasTipoConvidado).join(", ").replaceAll("_", " "),
    [selectedMesasTipoConvidado]
  );
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/todoGrupos/${session?.user.id}/grupos`
      );
      const data = await response.json();
      console.log(data);
      setGrupos(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/todaMesas/${session?.user.id}/mesas`);
      const data = await response.json();

      setMesas(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);
  useEffect(() => {
    let volatel = [];
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/todosPadrinhos/${session?.user.id}/padrinhos`
      );
      const data = await response.json();
      if (data.length != 0) {
        data.map((padrinho) => {
          if (padrinho.tipoConvidado === "Padrinho") {
            volatel.push({
              id: padrinho._id,
              name: padrinho.nomeConvidado,
              role: padrinho.grupo,
              team: padrinho.mesa,
              status: padrinho.status,
              age: padrinho.mensagem,
              avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              email: padrinho.emailConvidado,
            });
          }
        });
        setPadrinhos(volatel);
      }
    };
    if (session?.user.id) fetchPosts();
  }, []);
  useEffect(() => {
    let volatel = [];
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/todosPadrinhos/${session?.user.id}/padrinhos`
      );
      const data = await response.json();
      if (data.length != 0) {
        data.map((padrinho) => {
          if (padrinho.tipoConvidado === "Dama") {
            volatel.push({
              id: padrinho._id,
              name: padrinho.nomeConvidado,
              role: padrinho.grupo,
              team: padrinho.mesa,
              status: padrinho.status,
              age: padrinho.mensagem,
              avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              email: padrinho.emailConvidado,
            });
          }
        });
        setDamas(volatel);
      }
    };
    if (session?.user.id) fetchPosts();
  }, []);
  useEffect(() => {
    let volatel = [];
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/todosPadrinhos/${session?.user.id}/padrinhos`
      );
      const data = await response.json();
      if (data.length != 0) {
        data.map((padrinho) => {
          if (padrinho.tipoConvidado === "Cavalheiro") {
            volatel.push({
              id: padrinho._id,
              name: padrinho.nomeConvidado,
              role: padrinho.grupo,
              team: padrinho.mesa,
              status: padrinho.status,
              age: padrinho.mensagem,
              avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              email: padrinho.emailConvidado,
            });
          }
        });
        setCavalheros(volatel);
      }
    };
    if (session?.user.id) fetchPosts();
  }, []);
  useEffect(() => {
    let volatel = [];
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/todosPadrinhos/${session?.user.id}/padrinhos`
      );
      const data = await response.json();
      if (data.length != 0) {
        data.map((padrinho) => {
          if (padrinho.tipoConvidado === "Protocolo") {
            volatel.push({
              id: padrinho._id,
              name: padrinho.nomeConvidado,
              role: padrinho.grupo,
              team: padrinho.mesa,
              status: padrinho.status,
              age: padrinho.mensagem,
              avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              email: padrinho.emailConvidado,
            });
          }
        });
        setProtocolos(volatel);
      }
    };
    if (session?.user.id) fetchPosts();
  }, []);
  useEffect(() => {
    let volatel = [];
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/todosPadrinhos/${session?.user.id}/padrinhos`
      );
      const data = await response.json();
      if (data.length != 0) {
        data.map((padrinho) => {
          if (padrinho.tipoConvidado === "Outros") {
            volatel.push({
              id: padrinho._id,
              name: padrinho.nomeConvidado,
              role: padrinho.grupo,
              team: padrinho.mesa,
              status: padrinho.status,
              age: padrinho.mensagem,
              avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              email: padrinho.emailConvidado,
            });
          }
        });
        setOutros(volatel);
      }
    };
    if (session?.user.id) fetchPosts();
  }, []);
  const closeHandler = () => {
    setVisible(false);
  };
  const closeHandlerMesa = () => {
    setVisibleMesa(false);
  };
  const closeHandlerPadrinho = () => {
    setVisiblePadrinho(false);
  };
  function visiblePadrinhosPopUp() {
    textoVariavel = "Adicionar Padrinho";
    setNomeConvidado("");
    setEmailConvidado("");
    setMensagem("");
    setGrupo("");
    setMesa("");
    setVisiblePadrinho(true);
  }
  async function saveGrupo() {
    setVisible(false);
    setProcessando(true);
    try {
      const response = await fetch("api/grupos/new", {
        method: "POST",
        body: JSON.stringify({
          grupo: grupo,
          userId: session?.user.id,
        }),
      });
      if (response.ok) {
        router.push("/convidados");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setProcessando(false);
      router.push("/convidados");
    }
  }
  async function saveMesa() {
    setVisibleMesa(false);
    setProcessando(true);
    try {
      const response = await fetch("api/mesas/new", {
        method: "POST",
        body: JSON.stringify({
          mesa: mesa,
          userId: session?.user.id,
        }),
      });
      if (response.ok) {
        router.push("/convidados");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setProcessando(false);
      router.push("/convidados");
    }
  }
  async function savePadrinho() {
    setVisiblePadrinho(false);
    setProcessando(true);
    try {
      const response = await fetch("api/padrinho/new", {
        method: "POST",
        body: JSON.stringify({
          mensagem,
          nomeConvidado,
          emailConvidado,
          grupo: selectedValue,
          mesa: selectedValueMesas,
          tipoConvidado: selectedValueTipoConvidado,
          userId: session?.user.id,
        }),
      });
      if (response.ok) {
        router.push("/convidados");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setProcessando(false);
      router.push("/convidados");
    }
  }

  async function editPadrinho(iDD2) {
    setVisibleEditar(false);
    setProcessando(true);
    try {
      const response = await fetch(`api/padrinho/${iDD2}`, {
        method: "PATCH",
        body: JSON.stringify({
          mensagem,
          nomeConvidado,
          emailConvidado,
          grupo: selectedValue,
          mesa: selectedValueMesas,
          tipoConvidado: selectedValueTipoConvidado,
          userId: session?.user.id,
          status,
        }),
      });
      if (response.ok) {
        router.push("/convidados");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setProcessando(false);
      router.push("/convidados");
    }
  }

  async function deletePadrinho(iDD2) {
    setVisibleRemover(false);
    setProcessando(true);
    try {
      const response = await fetch(`api/padrinho/${iDD2}`, {
        method: "DELETE",
      });
      if (response.ok) {
        router.push("/convidados");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setProcessando(false);
      router.push("/convidados");
    }
  }
  function editarConvidado(iD) {
    padrinhos.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setStatus(padrinho.status);
        setIDDD(iD);
      }
      damas.map((padrinho) => {
        if (padrinho.id === iD) {
          setNomeConvidado(padrinho.name);
          setEmailConvidado(padrinho.email);
          setMensagem(padrinho.age);
          setGrupo(padrinho.role);
          setMesa(padrinho.team);
          setIDDD(padrinho.id);
        }
      });
      cavalheiros.map((padrinho) => {
        if (padrinho.id === iD) {
          setNomeConvidado(padrinho.name);
          setEmailConvidado(padrinho.email);
          setMensagem(padrinho.age);
          setGrupo(padrinho.role);
          setMesa(padrinho.team);
          setIDDD(padrinho.id);
        }
      });
      protocolos.map((padrinho) => {
        if (padrinho.id === iD) {
          setNomeConvidado(padrinho.name);
          setEmailConvidado(padrinho.email);
          setMensagem(padrinho.age);
          setGrupo(padrinho.role);
          setMesa(padrinho.team);
          setIDDD(padrinho.id);
        }
      });
      outros.map((padrinho) => {
        if (padrinho.id === iD) {
          setNomeConvidado(padrinho.name);
          setEmailConvidado(padrinho.email);
          setMensagem(padrinho.age);
          setGrupo(padrinho.role);
          setMesa(padrinho.team);
          setIDDD(padrinho.id);
        }
      });
    });
    setVisibleEditar(true);
  }

  function removerConvidado(iD) {
    padrinhos.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setIDDD(iD);
      }
    });
    damas.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setIDDD(padrinho.id);
      }
    });
    cavalheiros.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setIDDD(padrinho.id);
      }
    });
    protocolos.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setIDDD(padrinho.id);
      }
    });
    outros.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setIDDD(padrinho.id);
      }
    });
    setVisibleRemover(true);
  }
  const closeHandlerEditar = () => {
    setVisibleEditar(false);
  };
  const closeHandlerRemover = () => {
    setVisibleRemover(false);
  };

  function handleVerPadrinho(iD) {
    padrinhos.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setIDDD(padrinho.id);
      }
    });
    damas.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setIDDD(padrinho.id);
      }
    });
    cavalheiros.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setIDDD(padrinho.id);
      }
    });
    protocolos.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setIDDD(padrinho.id);
      }
    });
    outros.map((padrinho) => {
      if (padrinho.id === iD) {
        setNomeConvidado(padrinho.name);
        setEmailConvidado(padrinho.email);
        setMensagem(padrinho.age);
        setGrupo(padrinho.role);
        setMesa(padrinho.team);
        setIDDD(padrinho.id);
      }
    });
    setVisibleDetalhes(true);
  }
  function closeDetalhes() {
    setVisibleDetalhes(false);
  }
  const openMomentos = () => {
    setMomentosVisible(true);
  };
  function closeMomentos() {
    setMomentosVisible(false);
  }
  const confirmarConvidado = () => {
    setMomentosVisible(false);
    if ("Convidados Especiais" === selectedValue) {
      if (selectedValue1 === "Padrinhos") {
        links.push("Padrinhos");
      }
      if (selectedValue1 === "Cavalheiros") {
        links.push("Cavalheiros");
      }
      if (selectedValue1 === "Damas") {
        links.push("Damas");
      }
      if (selectedValue1 === "Protocolos") {
        links.push("Protocolos");
      }
    }
    if ("Familiares" === selectedValue) {
      if (selectedValue1 === "Familiares Da Noiva") {
        links.push("Familiares Da Noiva");
      }
      if (selectedValue1 === "Familiares Do Noivo") {
        links.push("Familiares Do Noivo");
      }
      if (selectedValue1 === "Familiares Do Graduado") {
        links.push("Familiares Do Graduado");
      }
      if (selectedValue1 === "Familiares Do Aniversariante") {
        links.push("Familiares Do Aniversariante");
      }
    }
    if ("Amigos" === selectedValue) {
      if (selectedValue1 === "Amigos Da Noiva") {
        links.push("Amigos Da Noiva");
      }
      if (selectedValue1 === "Amigos Do Noivo") {
        links.push("Amigos Do Noivo");
      }
      if (selectedValue1 === "Amigos Do Graduado") {
        links.push("Amigos Do Graduado");
      }
      if (selectedValue1 === "Amigos Do Aniversariante") {
        links.push("Amigos Do Aniversariante");
      }
    }
    if ("Colegas" === selectedValue) {
      if (selectedValue1 === "Colegas Do Trabalho") {
        links.push("Colegas Do Trabalho");
      }
      if (selectedValue1 === "Colegas Da Escola") {
        links.push("Colegas Da Escola");
      }
      if (selectedValue1 === "Colegas Da Faculdade") {
        links.push("Colegas Da Faculdade");
      }
      if (selectedValue1 === "Colegas Do Curso") {
        links.push("Colegas Do Curso");
      }
    }
    if ("Colegas" === selectedValue) {
      if (selectedValue1 === "Colegas Do Trabalho") {
        links.push("Colegas Do Trabalho");
      }
      if (selectedValue1 === "Colegas Da Escola") {
        links.push("Colegas Da Escola");
      }
      if (selectedValue1 === "Colegas Da Faculdade") {
        links.push("Colegas Da Faculdade");
      }
      if (selectedValue1 === "Colegas Do Curso") {
        links.push("Colegas Do Curso");
      }
    }
    setConvitesSelect([...convitesSelect, links]);
  };
  function onMouseEnter(id) {
    setIsHovered(true);
    links2.map((link) => {
      if (id === link.id) {
        setIDD4(link.id);
        setNomeVariavel(link.nome);
      }
    });
  }
  function onMouseEnterEspeciais() {
    setIsHoveredEspeciais(true);
  }
  function onMouseLeaveEspeciais() {
    setIsHoveredEspeciais(false);
  }
  function onMouseLeave(id) {
    setIsHovered(false);
  }
  function selectedEvent(df) {
    console.log(df[0]);
    if (df[0] === "Padrinhos") {
      setStatusFamiliaGraduado(false)
      setStatusFamiliaNoiva(false)
      setStatusPadrinho(true)
      setStatusProtocolo(false)
      etStatusFamiliaNoivo(false)
      setStatusDamas(false)
      setStatusCavalheiro(false)
    };
    if (df[0] === "Protocolos") {
      setStatusFamiliaGraduado(false)
      setStatusFamiliaNoiva(false)
      setStatusPadrinho(false)
      setStatusCavalheiro(false)
      etStatusFamiliaNoivo(false)
      setStatusDamas(false)
      setStatusProtocolo(true)
    };
    if (df[0] === "Cavalheiros") {
      setStatusFamiliaGraduado(false)
      setStatusFamiliaNoiva(false)
      setStatusPadrinho(false)
      setStatusProtocolo(false)
      setStatusFamiliaNoivo(false)
      setStatusDamas(false)
      setStatusCavalheiro(true)
    };
    if (df[0] === "Damas") {
      setStatusFamiliaGraduado(false)
      setStatusFamiliaNoiva(false)
      setStatusPadrinho(false)
      setStatusProtocolo(false)
      setStatusFamiliaNoivo(false)
      setStatusCavalheiro(false)
      setStatusDamas(true)
    };
    if (df[0] === "Familiares Da Noiva") {
      setStatusFamiliaGraduado(false)
      setStatusPadrinho(false)
      setStatusProtocolo(false)
      setStatusCavalheiro(false)
      setStatusFamiliaNoivo(false)
      setStatusFamiliaNoiva(true)
      setStatusDamas(false)
    };
    
    if (df[0] === "Familiares Do Noivo") {
      setStatusFamiliaGraduado(false)
      setStatusPadrinho(false)
      setStatusProtocolo(false)
      setStatusCavalheiro(false)
      setStatusFamiliaNoiva(false)
      setStatusDamas(false)
      setStatusFamiliaNoivo(true)
    };
    if (df[0] === "Familiares Do Graduado") {
      setStatusPadrinho(false)
      setStatusProtocolo(false)
      setStatusCavalheiro(false)
      setStatusFamiliaNoiva(false)
      setStatusDamas(false)
      setStatusFamiliaGraduado(true)
      setStatusFamiliaNoivo(false)
    };
  }
  const columns = [
    { name: "NOME DO CONVIDADO", uid: "name" },
    { name: "GRUPO/MESA", uid: "role" },
    { name: "STATUS CONVITE", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
            {user.email}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Detalhes do Convidado">
                <IconButton onClick={() => handleVerPadrinho(user.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Editar Convidado">
                <IconButton onClick={() => editarConvidado(user.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Remover Convidado"
                color="error"
                onClick={() => removerConvidado(user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <>
      <main className='app'>
        <Nav />        
        <Profile>
          <div>
            {/* <Row>
              {convitesSelect.length > 0 &&
                convitesSelect.map((link) => (
                  <button
                    type={"button"}
                    onClick={() => selectedEvent(link)}
                    className="black_btn"
                  >
                    {link}
                  </button>
                ))}

              <button
                type={"button"}
                onClick={() => openMomentos()}
                className="black_btn"
              >
                +
              </button>
            </Row> */}
            <div className="flex justify-center">
              {statusPadrinho && <Padrinhos />}
              {statusProtocolo && <Protocolos />}
              {statusCavalheiro && <Cavalheiros />}
              {statusDamas && <Damas />}
              {statusFamiliaNoiva && <FamiliaNoiva />}
              {statusFamiliaNoivo && <FamiliaNoivo />}
              {statusFamiliaGraduado && <FamiliaGraduado />}
            </div>
          </div>
          <Spacer y={1} />
          <div className="flex flex-col text-center justify-center items-center ">
          <Text b size={18}>
                  Momentos do Evento
                </Text>
                <Spacer y={0.4} />
            <div className="w-1/2">
            <Row className="flex gap-4">        
            {links2.length > 0 &&
              links2.map((link) => (
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
          <Spacer y={1} />
          <Divider className="my-4" />
          </div>      
          </div>
          
          <Spacer y={3} />
          <div className="flex flex-row gap-4 mb-2"
            onMouseEnter={() => onMouseEnterEspeciais()}
            onMouseLeave={onMouseLeaveEspeciais}
            cursor
            >
            <Text 
            
            b 
            size={20}>
            Convidados Especiais 
            </Text>
            {isHoveringEspeciais && (
              <div>
                <button
                type={"button"}
                onClick={() => {}}
                className="black_btn"
              >
                +
            </button>
            </div>
            )}
            
          </div>
          
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          
          </div>
          <Divider className="my-4" />   
          <div className="flex flex-row gap-4 my-2">
          
          </div>
          <Spacer y={3} />
          <div className="flex flex-row gap-4 mb-2"><Text b size={20}>
                Meus Convidados
          </Text>
            </div>
            
          
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          
        </div>
          <Divider className="" />  
          <Spacer y={1} /> 
          <Card>
              <div className='justify-center items-center'>
                <Card.Body>
                <Grid.Container gap={2} className="flex justify-between">                         
                  <div className="flex flex-row">              
                    <Grid>
                      <Button onPress={() => setVisible(true)} bordered color="gradient" auto>
                        + Grupos
                      </Button>
                    </Grid>
                    <Grid>
                      <Button onPress={() => setVisibleMesa(true)} bordered color="gradient" auto>
                        + Mesas
                      </Button>
                    </Grid>
                    <Grid>
                      <Button onPress={visiblePadrinhosPopUp} bordered color="gradient" auto>
                        + Convidado
                      </Button>
                    </Grid>
                  </div>
                  <div  className="flex flex-row">
                    <Grid>
                    <form class="search-box">
                      <input className="text-blue-500" type="text" placeholder=" "/>
                      <button type="reset"></button>
                    </form>
                    </Grid>
                    <Grid>
                      <Button onPress={() => {}} bordered color="gradient" auto>
                        Gerir Mesas
                      </Button>
                    </Grid>          
                  </div>
                  </Grid.Container>
              </Card.Body>
            </div>
          </Card>
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={momentosVisible}
            onClose={closeMomentos}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Categoria de Convidados
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Dropdown>
                <Dropdown.Button flat color="warning" css={{ tt: "capitalize" }}>
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Convidados"
                  color="warning"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="Convidados Especiais">
                    Convidados Especiais
                  </Dropdown.Item>
                  <Dropdown.Item key="Familiares">Familiares</Dropdown.Item>
                  <Dropdown.Item key="Amigos">Amigos</Dropdown.Item>
                  <Dropdown.Item key="Colegas">Colegas</Dropdown.Item>
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
                    placeholder="Outros Convidados"
                    contentLeft={<Mail fill="currentColor" />}
                  />
                </>
              )}
              {selectedValue === "Amigos" && (
                <>
                  <Dropdown>
                    <Dropdown.Button
                      flat
                      color="warning"
                      css={{ tt: "capitalize" }}
                    >
                      {selectedValue1}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="Convidados"
                      color="warning"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selected1}
                      onSelectionChange={setSelected1}
                    >
                      <Dropdown.Item key="Amigos Da Noiva">
                        Amigos Da Noiva
                      </Dropdown.Item>
                      <Dropdown.Item key="Amigos Do Noivo">
                        Amigos Do Noivo
                      </Dropdown.Item>
                      <Dropdown.Item key="Amigos Do Graduado">
                        Amigos Do Graduado
                      </Dropdown.Item>
                      <Dropdown.Item key="Amigos Do Aniversariante">
                        Amigos Do Aniversariante
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
              {selectedValue === "Familiares" && (
                <>
                  <Dropdown>
                    <Dropdown.Button
                      flat
                      color="warning"
                      css={{ tt: "capitalize" }}
                    >
                      {selectedValue1}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="Convidados"
                      color="warning"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selected1}
                      onSelectionChange={setSelected1}
                    >
                      <Dropdown.Item key="Familiares Da Noiva">
                        Familiares Da Noiva
                      </Dropdown.Item>
                      <Dropdown.Item key="Familiares Do Noivo">
                        Familiares Do Noivo
                      </Dropdown.Item>
                      <Dropdown.Item key="Familiares Do Graduado">
                        Familiares Do Graduado
                      </Dropdown.Item>
                      <Dropdown.Item key="Familiares Do Aniversariante">
                        Familiares Do Aniversariante
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
              {selectedValue === "Convidados Especiais" && (
                <>
                  <Dropdown>
                    <Dropdown.Button
                      flat
                      color="warning"
                      css={{ tt: "capitalize" }}
                    >
                      {selectedValue1}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="Convidados"
                      color="warning"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selected1}
                      onSelectionChange={setSelected1}
                    >
                      <Dropdown.Item key="Padrinhos">Padrinhos</Dropdown.Item>
                      <Dropdown.Item key="Cavalheiros">Cavalheiros</Dropdown.Item>
                      <Dropdown.Item key="Damas">Damas</Dropdown.Item>
                      <Dropdown.Item key="Protocolos">Protocolos</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
              {selectedValue === "Colegas" && (
                <>
                  <Dropdown>
                    <Dropdown.Button
                      flat
                      color="warning"
                      css={{ tt: "capitalize" }}
                    >
                      {selectedValue1}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="Convidados"
                      color="warning"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selected1}
                      onSelectionChange={setSelected1}
                    >
                      <Dropdown.Item key="Colegas Do Trabalho">
                        Colegas Do Trabalho
                      </Dropdown.Item>
                      <Dropdown.Item key="Colegas Da Escola">
                        Colegas Da Escola
                      </Dropdown.Item>
                      <Dropdown.Item key="Colegas Da Faculdade">
                        Colegas Da Faculdade
                      </Dropdown.Item>
                      <Dropdown.Item key="Colegas Do Curso">
                        Colegas Do Curso
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={confirmarConvidado}>
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
                  Grupos
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                value={grupo}
                onChange={(e) => setGrupo(e.target.value)}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Nome do Grupo"
                contentLeft={<Mail fill="currentColor" />}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeHandler}>
                Cancelar
              </Button>
              <Button auto onPress={saveGrupo}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>   
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visibleMesa}
            onClose={closeHandlerMesa}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Mesas
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                value={mesa}
                onChange={(e) => setMesa(e.target.value)}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Nome da Mesa"
                contentLeft={<Mail fill="currentColor" />}
              />
              <Input
                // value={mesa}
                // onChange={(e) => setMesa(e.target.value)}
                type="number"
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Numero de Cadeiras"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeHandlerMesa}>
                Cancelar
              </Button>
              <Button auto onPress={saveMesa}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>   
          {/* Inicio Padrinhos */}
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visiblePadrinho}
            onClose={closeHandlerPadrinho}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  {textoVariavel}
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                type='text'
                value={nomeConvidado}
                onChange={(e) => setNomeConvidado(e.target.value)}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Nome do Convidado"
                contentLeft={<Mail fill="currentColor" />}
              />
              <Input
                type='email'
                value={emailConvidado}
                onChange={(e) => setEmailConvidado(e.target.value)}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email do Convidado"
                contentLeft={<Mail fill="currentColor" />}
              />
              <Input
                type='email'
                // value={emailConvidado}
                // onChange={(e) => setEmailConvidado(e.target.value)}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Contacto (Com WhatsApp)"
                contentLeft={<Mail fill="currentColor" />}
              />
              <Dropdown>
                <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
                  {selectedValueTipoConvidado}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Grupo"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedMesasTipoConvidado}
                  onSelectionChange={setSelectedMesasTipoConvidado}
                >
                  <Dropdown.Item key="Padrinho">Padrinho</Dropdown.Item>
                  <Dropdown.Item key="Dama">Dama</Dropdown.Item>
                  <Dropdown.Item key="Cavalheiro">Cavalheiro</Dropdown.Item>
                  <Dropdown.Item key="Protocolo">Protocolo</Dropdown.Item>
                  <Dropdown.Item key="Outros">Outros</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Gropos"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  {grupos?.length > 0 && grupos?.map((grup) => 
                    <Dropdown.Item key={grup.grupo}>{grup.grupo}</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
                  {selectedValueMesas}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Mesas"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedMesas}
                  onSelectionChange={setSelectedMesas}
                >
                  {mesas.length > 0 && mesas.map((mes) => 
                    <Dropdown.Item key={mes.mesa}>{mes.mesa}</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Textarea
                label="Mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Escreva uma mensagem de motivação para o seu convidado"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeHandlerPadrinho}>
                Cancelar
              </Button>
              <Button auto onPress={savePadrinho}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>  
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visibleDetalhes}
            onClose={closeDetalhes}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Detalhes de {nomeConvidado}
                </Text> 
              </Text>
            </Modal.Header>
            <Modal.Body>
              <span className='font-satoshi font-semibold text-base text-gray-700 p-1'>Link do Convite: https://www.hiventus.com/confirmarPresenca/{iDDD}</span>
              <span className='font-satoshi font-semibold text-base text-gray-700 p-1'>Mesa: {mesa}</span>
              <span className='font-satoshi font-semibold text-base text-gray-700 p-1'>Grupo: {grupo}</span>
            </Modal.Body>
            <Modal.Footer>
              <Button auto onPress={closeDetalhes}>
                OK
              </Button>
            </Modal.Footer>
          </Modal> 
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visibleEditar}
            onClose={closeHandlerEditar}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  {textoVariavel}
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                type='text'
                value={nomeConvidado}
                onChange={(e) => setNomeConvidado(e.target.value)}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Nome do Padrinho"
                contentLeft={<Mail fill="currentColor" />}
              />
              <Input
                type='email'
                value={emailConvidado}
                onChange={(e) => setEmailConvidado(e.target.value)}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email do Padrinho"
                contentLeft={<Mail fill="currentColor" />}
              />
              <Dropdown>
                <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Gropos"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  {grupos?.length > 0 && grupos?.map((grup) => 
                    <Dropdown.Item key={grup.grupo}>{grup.grupo}</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
                  {selectedValueMesas}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Mesas"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedMesas}
                  onSelectionChange={setSelectedMesas}
                >
                  {mesas.length > 0 && mesas.map((mes) => 
                    <Dropdown.Item key={mes.mesa}>{mes.mesa}</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Textarea
                label="Mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Escreva uma mensagem de motivação para o seu convidado"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeHandlerEditar}>
                Cancelar
              </Button>
              <Button auto onPress={() => editPadrinho(iDDD)}>
                Editar
              </Button>
            </Modal.Footer>
          </Modal> 
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visibleRemover}
            onClose={closeHandlerRemover}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Remover Convidado
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <p>Remover {nomeConvidado}?</p>
            </Modal.Body>
            <Modal.Footer>          
              <Button auto onPress={closeHandlerRemover}>
              Cancelar
              </Button>
              <Button auto flat color="error" onPress={() => deletePadrinho(iDDD)}>
                Remover
              </Button>
            </Modal.Footer>
          </Modal> 
          {/* Fim Padrinhos */} 
        </Profile>
      </main>
    </>
    
  );
}

export default Convidados;
