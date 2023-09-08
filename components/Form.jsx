import Link from 'next/link';
import {Checkbox} from "@nextui-org/react";
import React, { useState, useEffect } from 'react';

function Form(
  {type,
  evento,
  setEvento,
  submitting,
  handleSubmit}
  ) {
    const [tipoEvento, setTipoEvento] = useState(false);
    const [eventosSelect, setEventosSelect] = useState("Casamento");
    const [eventosSelect2, setEventosSelect2] = useState("Quê Es?");
    const [bodas, setBodas] = useState(false);
    const [casamentoNormal, setCasamentoNormal] = useState(true);
    const [estado, setEstado] = useState(true);
    const pronvincias = [
        "Seleccione a Província",
        "Maputo Cidade",
        "Maputo Província",
    ];
    const distritoProvinciaMaputo = [
      "Boane",
      "Marracuene",
      "Matola",
    ];
    const distritoPMaputoBoane = [
      "Vila de Boane",
      "Eduardo Mondlane",
      "Gueguegue",
      "Matola-Rio Sede",
    ];
    const distritoPMaputoMarracuene = [
      "Santa Isabel",
      "Chiboene",
      "Facim",
      "Agostinho Neto",
      "Phazimane",
      "Memo 1",
      "Memo 2",
      "Michafutene",
      "Novo Cemitério",
      "Bobole",
      "Vila de Marraquene",
    ];
    const distritoPMaputoMatola = [
      "Zona Verde",
      "Ndlavela",
      "Infulene D",
      "T-3",
      "Acordos de Lusaka",
      "Khongolote",
      "Intaca",
      "Boquisso",
      "Mali",
      "Mukatine",
      "Ngolhoza",
      "Infulene",
      "Trevo",
      "Patrice Lumumba",
      "Machava",
      "São Damaso",
      "Tsalala",
      "Mathlemele",
      "Nkobe",
      "Matola Gare",
      "Singathela",
      "Fomento",
      "Liberdade",
      "Malhampsene",
      "Tchumene",
      "Outro",
    ];
    const distritoCidadeMaputo = [
      "Seleccione o Distrito",
      "KaMpfumu",
      "Nlhamankulu",
      "KaMaxakeni",
      "KaMavota",
      "KaMubukwana",
      "KaTembe",
      "KaNyaka",
    ];
    const bairroCMaputoKaMpfumu = [
      "Seleccione o Bairro",
      "Alto Maé A",
      "Alto Maé B",
      "Central A",
      "Central B",
      "Central C",
      "Coop",
      "Malhangalene A",
      "Malhangalene B",
      "Polana-Cimento A",
      "Polana-Cimento B",
      "Sommerschield",
    ];
    const bairroCMaputoNlhamankulu = [
      "Aeroporto A",
      "Chamanculo A",
      "Chamanculo B",
      "Chamanculo C",
      "Chamanculo D",
      "Malanga",
      "Minkadjuine",
      "Munhuana",
      "Unidade 7",
      "Xipamanine",
    ];
    const bairroCMaputoKaMaxakeni = [
      "Mafalala",
      "Maxaquene A",
      "Maxaquene B",
      "Maxaquene C",
      "Maxaquene D",
      "Polana Caniço A",
      "Polana Caniço B",
      "Urbanização",
    ];
    const bairroCMaputoKaMavota = [
      "3 de Fevereiro",
      "Albazine",
      "Costa do Sol",
      "F.P.L.M.",
      "Ferroviário",
      "Hulene A",
      "Hulene B",
      "Laulane",
      "Mahotas",
      "Mavalane A",
      "Mavalane B",
    ];
    const bairroCMaputoKaMubukwana = [
      "25 de Junho A",
      "25 de Junho B",
      "Bagamoyo",
      "George Dimitrov",
      "Inhagóia A",
      "Inhagóia B",
      "Jardim",
      "Luis Cabral",
      "Magoanine A",
      "Magoanine B",
      "Magoanine C",
      "Malhazine",
      "Nsalene",
      "Zimpeto",
    ];
    const bairroCMaputoKaTembe = [
      "Inguide",
      "Incassane",
      "Guachene",
      "Chali",
      "Chamissava",
    ];
    const bairroCMaputoKaNyaka  = [
      "Ribzwene",
      "Inguane",
      "Nhanquene",
    ];
    useEffect(() => {
      if (casamentoNormal === estado) {
        setCasamentoNormal(true);
        setBodas(false);
      } else {
        setCasamentoNormal(false);
        setBodas(true);
      }
    },[estado]);
    useEffect(() => {
      console.log("Evento Seleccionado", eventosSelect);  
    },[eventosSelect]);
    function verificarEstado() {
      if (estado === true) {
        setEstado(false);
      } else {
        setEstado(true);
      }
    }
    function eventoSeleccionado(evento) {
      setEventosSelect(evento);
      setEventosSelect(evento);
      console.log("Evento Seleccionado", eventosSelect);      
    }
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'><span className='orange_gradient'>{type}</span></h1>
      <p className='desc text-left max-w-md'>
      Gerenciar um evento pode ser uma tarefa complexa e desafiadora, 
      envolvendo diversos aspectos, desde o planejamento inicial até a 
      execução e avaliação final. Nesse contexto, a plataforma de Gestão de 
      Eventos oferece inúmeras vantagens que podem facilitar e aprimorar todo o processo.
      </p>
      <div className='flex-end mx-3 mt-5 gap-4'>
      <select 
          name="cars"
          value={eventosSelect}
          onChange={(ev) => eventoSeleccionado(ev.target.value)}
          id="cars"
          className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
           <option value="Casamento">Casamento</option>
           <option value="Lobolo">Lobolo</option>
           <option value="Anelamento">Anelamento</option>
           <option value="Despedida de Solteiro">Despedida de Solteiro</option>
           <option value="Aniversário">Aniversário</option>
           <option value="Graduação">Graduação</option>
           <option value="Sociais">Sociais</option>
          </select>
          {/* <button 
          onClick={() => setTipoEvento((prev) => !prev)}
            type='button'
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {tipoEvento ? (<>Casamento</>):(<>Outros Eventos</>)}
          </button> */}
      </div>
      
      {eventosSelect === "Casamento" && (
        <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        {
          casamentoNormal ? (
          <>
            <label className='flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center'>
             
              <h3>Casamento Normal</h3>
              <button 
                    type="button"
                    onClick={() => verificarEstado("bodas")}
                    className="black_btn"
                    >
                        Bodas
                    </button>
            </label>
        <span className='font-normal'>Quem és?</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Planificador(a)">Planificador(a)</option>
          <option value="Noivo(a)">Noivo(a)</option>
        </select>
        
        <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto com whatsapp'
            required
            type='text'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Nome dos Noivos</span>
         <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome da Noiva'
            type='text'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome do Noivo'
            required
            type='text'
            className='form_input'
          />
        </div>
        <div className='flex flex-row gap-4'>
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto da Noiva'
            type='number'
            required
            className='form_input'
          />
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto do Noivo'
            required
            type='number'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Residência dos Noivos</span>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {pronvincias.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <select name="cars2" id="cars2" className='form_input'>
              {distritoCidadeMaputo.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
        </div>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {bairroCMaputoKaMpfumu.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Número de Quarteirão e Casa'
          required
          className='form_input'
        />
        </div>
         <div className='flex flex-row gap-4'>
         <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Avenida/Rua'
          required
          className='form_input'
        />
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Ponto de Referência'
          required
          className='form_input'
        />
        </div>
        <span className='font-normal'>Data do Evento</span>
        <input 
          type='date'
          value={evento.dataEvento}
          onChange={(e) => setEvento({ ...evento, dataEvento: e.target.value })}
          placeholder='Data do Evento'
          required
          className='form_input'
        />
        <span className='font-normal'>Tema do Casamento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='(Opcinal)'
          className='form_input'
        />
        <span className='font-normal'>Orçamento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Orçamento Inicial'
          type="number"
          required
          className='form_input'
        />
        <span className='font-normal'>Cores do Casamento</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Preto">Preto</option>
          <option value="Branco">Branco</option>
          <option value="Azul">Azul</option>
          <option value="Preto/Branco">Preto/Branco</option>
          <option value="Branco/Azul">Branco/Azul</option>
          <option value="Azul/Preto">Azul/Preto</option>
        </select>
        <span className='font-normal'>Convidados Previstos</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Número de Convidados'
          type="number"
          className='form_input'
        />
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm'>
            Cancelar
          </Link>

          {/* <button 
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button> */}

        </div>
          </>
          ) : (
          <>
            <label className='flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center'>
            <h3>Bodas</h3>
              <button 
                    type="button"
                    onClick={() => verificarEstado("bodas")}
                    className="black_btn"
                    >
                        Casamento Normal
                    </button>
            </label>
            <span className='font-normal'>Tipo de Boda</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Planificador(a)">Bodas de Papel (01 Ano)</option>
          <option value="Planificador(a)">Bodas de Madeira ou Ferro (05 Ano)</option>
          <option value="Planificador(a)">Bodas de Estanho ou Zinho (10 Ano)</option>
          <option value="Planificador(a)">Bodas de Cristal (15 Ano)</option>
          <option value="Planificador(a)">Bodas de Porcelana (20 Ano)</option>
          <option value="Planificador(a)">Bodas de Prata (25 Ano)</option>
          <option value="Planificador(a)">Bodas de Pérola (30 Ano)</option>
          <option value="Planificador(a)">Bodas de Coral (35 Ano)</option>
          <option value="Planificador(a)">Bodas de Esmeralda (40 Ano)</option>
          <option value="Planificador(a)">Bodas de Platina (45 Ano)</option>
          <option value="Planificador(a)">Bodas de Ouro (50 Ano)</option>
        </select>
            <span className='font-normal'>Quem és?</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Planificador(a)">Planificador(a)</option>
          <option value="Noivo(a)">Noivo(a)</option>
        </select>
        
        <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto com whatsapp'
            required
            type='text'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Nome dos Noivos</span>
         <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome da Noiva'
            type='text'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome do Noivo'
            required
            type='text'
            className='form_input'
          />
        </div>
        <div className='flex flex-row gap-4'>
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto da Noiva'
            type='number'
            required
            className='form_input'
          />
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto do Noivo'
            required
            type='number'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Residência dos Noivos</span>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {pronvincias.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <select name="cars2" id="cars2" className='form_input'>
              {distritoCidadeMaputo.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
        </div>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {bairroCMaputoKaMpfumu.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Número de Quarteirão e Casa'
          required
          className='form_input'
        />
        </div>
         <div className='flex flex-row gap-4'>
         <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Avenida/Rua'
          required
          className='form_input'
        />
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Ponto de Referência'
          required
          className='form_input'
        />
        </div>
        <span className='font-normal'>Data do Evento</span>
        <input 
          type='date'
          value={evento.dataEvento}
          onChange={(e) => setEvento({ ...evento, dataEvento: e.target.value })}
          placeholder='Data do Evento'
          required
          className='form_input'
        />
        <span className='font-normal'>Tema das Bodas</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='(Opcinal)'
          className='form_input'
        />
        <span className='font-normal'>Orçamento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Orçamento Inicial'
          type="number"
          required
          className='form_input'
        />
        <span className='font-normal'>Cores das Bodas</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Preto">Preto</option>
          <option value="Branco">Branco</option>
          <option value="Azul">Azul</option>
          <option value="Preto/Branco">Preto/Branco</option>
          <option value="Branco/Azul">Branco/Azul</option>
          <option value="Azul/Preto">Azul/Preto</option>
        </select>
        <span className='font-normal'>Convidados Previstos</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Número de Convidados'
          type="number"
          className='form_input'
        />
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm'>
            Cancelar
          </Link>

          {/* <button 
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button> */}

        </div>
          </>
          )
        }        
      </form>
      )}
      {eventosSelect === "Lobolo" && (
        <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <>
        <label className='flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center'>
          <h3>Lobolo</h3>
        </label>
        <span className='font-normal'>Quem és?</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Planificador(a)">Planificador(a)</option>
          <option value="Noivo(a)">Noivo(a)</option>
        </select>
        
        <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto com whatsapp'
            required
            type='text'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Nome dos Noivos</span>
         <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome da Noiva'
            type='text'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome do Noivo'
            required
            type='text'
            className='form_input'
          />
        </div>
        <div className='flex flex-row gap-4'>
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto da Noiva'
            type='number'
            required
            className='form_input'
          />
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto do Noivo'
            required
            type='number'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Residência dos Noivos</span>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {pronvincias.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <select name="cars2" id="cars2" className='form_input'>
              {distritoCidadeMaputo.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
        </div>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {bairroCMaputoKaMpfumu.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Número de Quarteirão e Casa'
          required
          className='form_input'
        />
        </div>
         <div className='flex flex-row gap-4'>
         <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Avenida/Rua'
          required
          className='form_input'
        />
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Ponto de Referência'
          required
          className='form_input'
        />
        </div>
        <span className='font-normal'>Data do Evento</span>
        <input 
          type='date'
          value={evento.dataEvento}
          onChange={(e) => setEvento({ ...evento, dataEvento: e.target.value })}
          placeholder='Data do Evento'
          required
          className='form_input'
        />
        <span className='font-normal'>Tema do Lobolo</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='(Opcinal)'
          className='form_input'
        />
        <span className='font-normal'>Orçamento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Orçamento Inicial'
          type="number"
          required
          className='form_input'
        />
        <span className='font-normal'>Cores do Lobolo</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Preto">Preto</option>
          <option value="Branco">Branco</option>
          <option value="Azul">Azul</option>
          <option value="Preto/Branco">Preto/Branco</option>
          <option value="Branco/Azul">Branco/Azul</option>
          <option value="Azul/Preto">Azul/Preto</option>
        </select>
        <span className='font-normal'>Convidados Previstos</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Número de Convidados'
          type="number"
          className='form_input'
        />
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm'>
            Cancelar
          </Link>

          {/* <button 
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button> */}

        </div>
          </>      
      </form>
      )}
      {eventosSelect === "Anelamento" && (
        <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <>
        <label className='flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center'>
          <h3>Anelamento</h3>
        </label>
        <span className='font-normal'>Quem és?</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Planificador(a)">Planificador(a)</option>
          <option value="Noivo(a)">Noivo(a)</option>
        </select>
        
        <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto com whatsapp'
            required
            type='text'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Nome dos Noivos</span>
         <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome da Noiva'
            type='text'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome do Noivo'
            required
            type='text'
            className='form_input'
          />
        </div>
        <div className='flex flex-row gap-4'>
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto da Noiva'
            type='number'
            required
            className='form_input'
          />
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto do Noivo'
            required
            type='number'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Residência dos Noivos</span>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {pronvincias.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <select name="cars2" id="cars2" className='form_input'>
              {distritoCidadeMaputo.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
        </div>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {bairroCMaputoKaMpfumu.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Número de Quarteirão e Casa'
          required
          className='form_input'
        />
        </div>
         <div className='flex flex-row gap-4'>
         <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Avenida/Rua'
          required
          className='form_input'
        />
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Ponto de Referência'
          required
          className='form_input'
        />
        </div>
        <span className='font-normal'>Data do Evento</span>
        <input 
          type='date'
          value={evento.dataEvento}
          onChange={(e) => setEvento({ ...evento, dataEvento: e.target.value })}
          placeholder='Data do Evento'
          required
          className='form_input'
        />
        <span className='font-normal'>Tema do Anelamento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='(Opcinal)'
          className='form_input'
        />
        <span className='font-normal'>Orçamento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Orçamento Inicial'
          type="number"
          required
          className='form_input'
        />
        <span className='font-normal'>Cores do Anelamento</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Preto">Preto</option>
          <option value="Branco">Branco</option>
          <option value="Azul">Azul</option>
          <option value="Preto/Branco">Preto/Branco</option>
          <option value="Branco/Azul">Branco/Azul</option>
          <option value="Azul/Preto">Azul/Preto</option>
        </select>
        <span className='font-normal'>Convidados Previstos</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Número de Convidados'
          type="number"
          className='form_input'
        />
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm'>
            Cancelar
          </Link>

          {/* <button 
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button> */}

        </div>
          </>      
      </form>
      )}  
      {eventosSelect === "Despedida de Solteiro" && (
        <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <>
        <label className='flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center'>
          <h3>Despedida de Solteiro</h3>
        </label>
        <span className='font-normal'>Quem és?</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Planificador(a)">Planificador(a)</option>
          <option value="Noivo(a)">Noivo(a)</option>
        </select>
        
        <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto com whatsapp'
            required
            type='text'
            className='form_input'
          />
        </div>
        <div className='flex flex-row gap-4'>
          <span className='font-normal'>Para quem é a despedida de solteiro?</span>
          <select name="cars2" id="cars2" className='form_input'>
            <option value="Diga para quem é a despedida">Diga para quem é a despedida</option>
            <option value="Noiva">Noiva</option>
            <option value="Noivo">Noivo</option>
        </select>
        </div>
        
         <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome'
            required
            type='text'
            className='form_input'
          />
        </div>
        <div className='flex flex-row gap-4'>
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto'
            required
            type='number'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Residência do(a) Noivo(a)</span>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {pronvincias.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <select name="cars2" id="cars2" className='form_input'>
              {distritoCidadeMaputo.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
        </div>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {bairroCMaputoKaMpfumu.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Número de Quarteirão e Casa'
          required
          className='form_input'
        />
        </div>
         <div className='flex flex-row gap-4'>
         <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Avenida/Rua'
          required
          className='form_input'
        />
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Ponto de Referência'
          required
          className='form_input'
        />
        </div>
        <span className='font-normal'>Data da Despediada</span>
        <input 
          type='date'
          value={evento.dataEvento}
          onChange={(e) => setEvento({ ...evento, dataEvento: e.target.value })}
          placeholder='Data do Evento'
          required
          className='form_input'
        />
        <span className='font-normal'>Tema da Despedida</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='(Opcinal)'
          className='form_input'
        />
        <span className='font-normal'>Orçamento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Orçamento Inicial'
          type="number"
          required
          className='form_input'
        />
        <span className='font-normal'>Cores da Despedida</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Preto">Preto</option>
          <option value="Branco">Branco</option>
          <option value="Azul">Azul</option>
          <option value="Preto/Branco">Preto/Branco</option>
          <option value="Branco/Azul">Branco/Azul</option>
          <option value="Azul/Preto">Azul/Preto</option>
        </select>
        <span className='font-normal'>Convidados Previstos</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Número de Convidados'
          type="number"
          className='form_input'
        />
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm'>
            Cancelar
          </Link>

          {/* <button 
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button> */}

        </div>
          </>      
      </form>
      )}  
      {eventosSelect === "Aniversário" && (
        <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <>
        <label className='flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center'>
          <h3>Aniversário</h3>
        </label>
        <span className='font-normal'>Quem és?</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Planificador(a)">Planificador(a)</option>
          <option value="Aniversariante">Aniversariante</option>
        </select>
        
        <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto com whatsapp'
            required
            type='text'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Dados do Aniversariante</span>    
         <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome do Aniversariante'
            required
            type='text'
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Idade'
            required
            type='number'
            className='form_input'
          />
        </div>
        <button 
          type="button"
          onClick={() => {}}
          className="black_btn"
        >
          + Aniversariante
        </button>
        <div className='flex flex-row gap-4'>
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto do Aniversariante/Encarregado'
            required
            type='number'
            className='form_input'
          />
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Sexo do Aniversariante'
            required
            type='text'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Residência do Aniversariante</span>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {pronvincias.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <select name="cars2" id="cars2" className='form_input'>
              {distritoCidadeMaputo.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
        </div>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {bairroCMaputoKaMpfumu.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Número de Quarteirão e Casa'
          required
          className='form_input'
        />
        </div>
         <div className='flex flex-row gap-4'>
         <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Avenida/Rua'
          required
          className='form_input'
        />
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Ponto de Referência'
          required
          className='form_input'
        />
        </div>
        <span className='font-normal'>Data do Aniversário</span>
        <input 
          type='date'
          value={evento.dataEvento}
          onChange={(e) => setEvento({ ...evento, dataEvento: e.target.value })}
          placeholder='Data do Aniversário'
          required
          className='form_input'
        />
        <span className='font-normal'>Tema do Aniversário</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='(Opcinal)'
          className='form_input'
        />
        <span className='font-normal'>Orçamento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Orçamento Inicial'
          type="number"
          required
          className='form_input'
        />
        <span className='font-normal'>Cores do Aniversário</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Preto">Preto</option>
          <option value="Branco">Branco</option>
          <option value="Azul">Azul</option>
          <option value="Preto/Branco">Preto/Branco</option>
          <option value="Branco/Azul">Branco/Azul</option>
          <option value="Azul/Preto">Azul/Preto</option>
        </select>
        <span className='font-normal'>Convidados Previstos</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Número de Convidados'
          type="number"
          className='form_input'
        />
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm'>
            Cancelar
          </Link>

          {/* <button 
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button> */}

        </div>
          </>      
      </form>
      )}
      {eventosSelect === "Graduação" && (
        <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <>
        <label className='flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center'>
          <h3>Graduação</h3>
        </label>
        <span className='font-normal'>Quem és?</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Planificador(a)">Planificador(a)</option>
          <option value="Graduado">Graduado</option>
        </select>
        
        <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto com whatsapp'
            required
            type='text'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Dados do Graduado</span>
         <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome do Graduado'
            required
            type='text'
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Idade'
            required
            type='number'
            className='form_input'
          />
        </div>
        
        <div className='flex flex-row gap-4'>
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto do Graduado'
            required
            type='number'
            className='form_input'
          />
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Sexo do Graduado'
            required
            type='text'
            className='form_input'
          />
        </div>
        <button 
          type="button"
          onClick={() => {}}
          className="black_btn"
        >
          + Graduado
        </button>
        <span className='font-normal'>Residência do Graduado</span>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {pronvincias.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <select name="cars2" id="cars2" className='form_input'>
              {distritoCidadeMaputo.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
        </div>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {bairroCMaputoKaMpfumu.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Número de Quarteirão e Casa'
          required
          className='form_input'
        />
        </div>
         <div className='flex flex-row gap-4'>
         <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Avenida/Rua'
          required
          className='form_input'
        />
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Ponto de Referência'
          required
          className='form_input'
        />
        </div>
        <span className='font-normal'>Data da Graduação</span>
        <input 
          type='date'
          value={evento.dataEvento}
          onChange={(e) => setEvento({ ...evento, dataEvento: e.target.value })}
          placeholder='Data da Graduação'
          required
          className='form_input'
        />
        <span className='font-normal'>Tema da Graduação</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='(Opcinal)'
          className='form_input'
        />
        <span className='font-normal'>Orçamento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Orçamento Inicial'
          type="number"
          required
          className='form_input'
        />
        <span className='font-normal'>Convidados Previstos</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Número de Convidados'
          type="number"
          className='form_input'
        />
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm'>
            Cancelar
          </Link>

          {/* <button 
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button> */}

        </div>
          </>      
      </form>
      )}
      {eventosSelect === "Sociais" && (
        <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <>
        <label className='flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center'>
          <h3>Sociais</h3>
        </label>
        <span className='font-normal'>Quem és?</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Planificador(a)">Planificador(a)</option>
          <option value="Anfitrião">Anfitrião</option>
        </select>
        
        <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome'
            required
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto com whatsapp'
            required
            type='text'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Dados do Anfitrião</span>
         <div className='flex flex-row gap-4'>
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Nome do Anfitrião'
            required
            type='text'
            className='form_input'
          />
          <input 
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Idade'
            required
            type='number'
            className='form_input'
          />
        </div>
        
        <div className='flex flex-row gap-4'>
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Contacto do Anfitrião'
            required
            type='number'
            className='form_input'
          />
          <input
            value={evento.nomeNoivo}
            onChange={(e) => setEvento({ ...evento, nomeNoivo: e.target.value })}
            placeholder='Sexo do Anfitrião'
            required
            type='text'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Residência do Anfitrião</span>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {pronvincias.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <select name="cars2" id="cars2" className='form_input'>
              {distritoCidadeMaputo.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
        </div>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input'>
              {bairroCMaputoKaMpfumu.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Número de Quarteirão e Casa'
          required
          className='form_input'
        />
        </div>
         <div className='flex flex-row gap-4'>
         <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Avenida/Rua'
          required
          className='form_input'
        />
            <input 
          value={evento.localEvento}
          onChange={(e) => setEvento({ ...evento, localEvento: e.target.value })}
          placeholder='Ponto de Referência'
          required
          className='form_input'
        />
        </div>
        <span className='font-normal'>Data do Evento</span>
        <input 
          type='date'
          value={evento.dataEvento}
          onChange={(e) => setEvento({ ...evento, dataEvento: e.target.value })}
          placeholder='Data do Evento'
          required
          className='form_input'
        />
        <span className='font-normal'>Tipo de Evento Social</span>
        <select name="cars2" id="cars2" className='form_input'>
          <option value="Xitique">Xitique</option>
          <option value="Churasco">Churasco</option>
          <option value="Outro">Outro</option>
        </select>
        <span className='font-normal'>Tema do Evento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='(Opcinal)'
          className='form_input'
        />
        <span className='font-normal'>Orçamento</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Orçamento Inicial'
          type="number"
          required
          className='form_input'
        />
        <span className='font-normal'>Convidados Previstos</span>
        <input
          value={evento.orcamentoInicial}
          onChange={(e) => setEvento({ ...evento, orcamentoInicial: e.target.value })}
          placeholder='Número de Convidados'
          type="number"
          className='form_input'
        />
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm'>
            Cancelar
          </Link>

          {/* <button 
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button> */}

        </div>
          </>      
      </form>
      )} 
    </section>
  )
}

export default Form