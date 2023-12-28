<<<<<<< HEAD
"use client";
import React, { useState, useEffect } from "react";
import Profile from "@app/profile/page";
import { Card, Row, Text, Col, Image } from "@nextui-org/react";
import { useSession } from "next-auth/react";

function page() {
  const { data: session } = useSession();
  const [evento, setEvento] = useState([]);
=======
'use client';
import Profile from "../profile/page";
import React, { useState, useEffect } from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Nav from '../../components/Nav';
import { Container, Textarea, Modal, Input, Button, Card, Row, Text, Avatar, Grid, Spacer, Col, Progress } from "@nextui-org/react";
import { useSession } from 'next-auth/react';
import Countdown from './countdown';
import { useRouter } from 'next/navigation';
import { Mail } from '../convidados/Mail';
import Link from "next/link";
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

  const closeHandler = () => {
    setVisible(false);
  };
  const pictureUsers = [ 
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  ];
>>>>>>> 81cace7 (novo update)
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
<<<<<<< HEAD
      console.log("Eventos:", data.length);
      setEvento(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);
  return (
    <Profile>
      <>
        {/* <Text className='text-center' h6 size={24} css={{ m: 0 }}>Serviços Solicitados</Text> */}
        <div class="flex">
          <div class="flex-auto w-64"></div>
          <div class="flex-auto w-32">
            <span className="font-satoshi font-semibold text-base text-gray-700 p-1">
              <div className="flex gap-4 justify-end">
                <div className="flex flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => {}}
                    className="black_btn gap-4"
                  >
                    Editar Perfil
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </span>
          </div>
        </div>
        <Row gap={1} className="flex-auto w-64 mt-4">
          <div className="w-2/5">
            <Col>
              <div className="text-center">
                <Text b h6 size={18} css={{ m: 0 }}>
                  Eventos Em Andamento
                </Text>
              </div>
              <br />
              {evento.length > 0 &&
                evento.map((event) => (
                  <>
                    <Card>
                      <div>
                        <Card.Body>
                          <div className="">
                            <Text b h6 size={15} css={{ m: 0 }}>
                              Tipo de Evento: {event.tipoEvento}
                            </Text>
                            <Text h6 size={12} css={{ m: 0 }}>
                              {event.nomeNoiva} & {event.nomeNoivo}
                            </Text>
                          </div>
                        </Card.Body>
                      </div>
                    </Card>
                  </>
                ))}

              <div className="text-center mt-4">
                <Text b h6 size={18} css={{ m: 0 }}>
                  Eventos Em Pausa
                </Text>
              </div>
              <br />
              <Card>
                <div>
                  <Card.Body>
                    <div className=""></div>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </div>
          <div className="w-3/5">
            <Col>
              <Card>
                <div onClick={() => {}}>
                  <Card.Body>
                    <div className="flex flex-row gap-4">
                      <div>
                        <Image
                          alt="Profilo Pic"
                          src={session?.user.image}
                          className="flex mt-4"
                          width={60}
                          height={60}
                          onClick={() => {}}
                        />
                      </div>
                      <div>
                        <Text b h6 size={25} css={{ m: 0 }}>
                          {session?.user.name}
                        </Text>
                        <Text h6 size={12} css={{ m: 0 }}>
                          {session?.user.email}
                        </Text>
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </Card>
              <div className="mt-4"></div>
              <Card>
                <div onClick={() => {}}>
                  <Card.Body>
                    <div>
                      <div className="flex flex-row gap-4">
                        <div>
                          <Text b h6 size={15} css={{ m: 0 }}>
                            Nome Completo
                          </Text>
                          <input
                            placeholder="Nome"
                            required
                            className="form_input"
                          />
                        </div>
                        <div>
                          <Text b h6 size={15} css={{ m: 0 }}>
                            E-mail
                          </Text>
                          <input
                            placeholder="Email"
                            required
                            type="text"
                            className="form_input"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row gap-4">
                        <div>
                          <Text b h6 size={15} css={{ m: 0 }}>
                            Endereço
                          </Text>
                          <input
                            placeholder="Endereço"
                            required
                            className="form_input"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row gap-4">
                        <div>
                          <Text b h6 size={15} css={{ m: 0 }}>
                            Provincia
                          </Text>
                          <input
                            placeholder="Provincia"
                            required
                            className="form_input"
                          />
                        </div>
                        <div>
                          <Text b h6 size={15} css={{ m: 0 }}>
                            Bairro
                          </Text>
                          <input
                            placeholder="Bairro"
                            required
                            type="text"
                            className="form_input"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row gap-4">
                        <div>
                          <Text b h6 size={15} css={{ m: 0 }}>
                            Contacto
                          </Text>
                          <input
                            placeholder="Contacto"
                            required
                            className="form_input"
                          />
                        </div>
                        <div>
                          <Text b h6 size={15} css={{ m: 0 }}>
                            Designação
                          </Text>
                          <input
                            placeholder="Designação"
                            required
                            type="text"
                            className="form_input"
                          />
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </div>
        </Row>
      </>
    </Profile>
=======
      console.log(data)
      setEvento(data);
    }
    if(session?.user.id) fetchPosts();
  },[]);
  useEffect(() => {
    jQuery(document).ready(function($){
      var timelines = $('.cd-horizontal-timeline'),
        eventsMinDistance = 60;
    
      (timelines.length > 0) && initTimeline(timelines);
    
      function initTimeline(timelines) {
        timelines.each(function(){
          var timeline = $(this),
            timelineComponents = {};
          //cache timeline components 
          timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
          timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
          timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
          timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
          timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
          timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
          timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
          timelineComponents['eventsContent'] = timeline.children('.events-content');
    
          //assign a left postion to the single events along the timeline
          setDatePosition(timelineComponents, eventsMinDistance);
          //assign a width to the timeline
          var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
          //the timeline has been initialize - show it
          timeline.addClass('loaded');
    
          //detect click on the next arrow
          timelineComponents['timelineNavigation'].on('click', '.next', function(event){
            event.preventDefault();
            updateSlide(timelineComponents, timelineTotWidth, 'next');
          });
          //detect click on the prev arrow
          timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
            event.preventDefault();
            updateSlide(timelineComponents, timelineTotWidth, 'prev');
          });
          //detect click on the a single event - show new event content
          timelineComponents['eventsWrapper'].on('click', 'a', function(event){
            event.preventDefault();
            timelineComponents['timelineEvents'].removeClass('selected');
            $(this).addClass('selected');
            updateOlderEvents($(this));
            updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
            updateVisibleContent($(this), timelineComponents['eventsContent']);
          });
    
          //on swipe, show next/prev event content
          timelineComponents['eventsContent'].on('swipeleft', function(){
            var mq = checkMQ();
            ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
          });
          timelineComponents['eventsContent'].on('swiperight', function(){
            var mq = checkMQ();
            ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
          });
    
          //keyboard navigation
          $(document).keyup(function(event){
            if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
              showNewContent(timelineComponents, timelineTotWidth, 'prev');
            } else if( event.which=='39' && elementInViewport(timeline.get(0))) {
              showNewContent(timelineComponents, timelineTotWidth, 'next');
            }
          });
        });
      }
    
      function updateSlide(timelineComponents, timelineTotWidth, string) {
        //retrieve translateX value of timelineComponents['eventsWrapper']
        var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
          wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
        //translate the timeline to the left('next')/right('prev') 
        (string == 'next') 
          ? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
          : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
      }
    
      function showNewContent(timelineComponents, timelineTotWidth, string) {
        //go from one event to the next/previous one
        var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
          newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();
    
        if ( newContent.length > 0 ) { //if there's a next/prev event - show it
          var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
            newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
          
          updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
          updateVisibleContent(newEvent, timelineComponents['eventsContent']);
          newEvent.addClass('selected');
          selectedDate.removeClass('selected');
          updateOlderEvents(newEvent);
          updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
        }
      }
    
      function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
        //translate timeline to the left/right according to the position of the selected event
        var eventStyle = window.getComputedStyle(event.get(0), null),
          eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
          timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
          timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
        var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);
    
            if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
              translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
            }
      }
    
      function translateTimeline(timelineComponents, value, totWidth) {
        var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
        value = (value > 0) ? 0 : value; //only negative translate value
        value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
        setTransformValue(eventsWrapper, 'translateX', value+'px');
        //update navigation arrows visibility
        (value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
        (value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
      }
    
      function updateFilling(selectedEvent, filling, totWidth) {
        //change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
          eventLeft = eventStyle.getPropertyValue("left"),
          eventWidth = eventStyle.getPropertyValue("width");
        eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
        var scaleValue = eventLeft/totWidth;
        setTransformValue(filling.get(0), 'scaleX', scaleValue);
      }
    
      function setDatePosition(timelineComponents, min) {
        for (i = 0; i < timelineComponents['timelineDates'].length; i++) { 
            var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
              distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
            timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
        }
      }
    
      function setTimelineWidth(timelineComponents, width) {
        var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
          timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
          timeSpanNorm = Math.round(timeSpanNorm) + 4,
          totalWidth = timeSpanNorm*width;
        timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
        updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);
      
        return totalWidth;
      }
    
      function updateVisibleContent(event, eventsContent) {
        var eventDate = event.data('date'),
          visibleContent = eventsContent.find('.selected'),
          selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
          selectedContentHeight = selectedContent.height();
    
        if (selectedContent.index() > visibleContent.index()) {
          var classEnetering = 'selected enter-right',
            classLeaving = 'leave-left';
        } else {
          var classEnetering = 'selected enter-left',
            classLeaving = 'leave-right';
        }
    
        selectedContent.attr('class', classEnetering);
        visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
          visibleContent.removeClass('leave-right leave-left');
          selectedContent.removeClass('enter-left enter-right');
        });
        eventsContent.css('height', selectedContentHeight+'px');
      }
    
      function updateOlderEvents(event) {
        event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
      }
    
      function getTranslateValue(timeline) {
        var timelineStyle = window.getComputedStyle(timeline.get(0), null),
          timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
                 timelineStyle.getPropertyValue("-moz-transform") ||
                 timelineStyle.getPropertyValue("-ms-transform") ||
                 timelineStyle.getPropertyValue("-o-transform") ||
                 timelineStyle.getPropertyValue("transform");
    
            if( timelineTranslate.indexOf('(') >=0 ) {
              var timelineTranslate = timelineTranslate.split('(')[1];
            timelineTranslate = timelineTranslate.split(')')[0];
            timelineTranslate = timelineTranslate.split(',');
            var translateValue = timelineTranslate[4];
            } else {
              var translateValue = 0;
            }
    
            return Number(translateValue);
      }
    
      function setTransformValue(element, property, value) {
        element.style["-webkit-transform"] = property+"("+value+")";
        element.style["-moz-transform"] = property+"("+value+")";
        element.style["-ms-transform"] = property+"("+value+")";
        element.style["-o-transform"] = property+"("+value+")";
        element.style["transform"] = property+"("+value+")";
      }
    
      //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
      function parseDate(events) {
        var dateArrays = [];
        events.each(function(){
          var dateComp = $(this).data('date').split('/'),
            newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
          dateArrays.push(newDate);
        });
          return dateArrays;
      }
    
      function parseDate2(events) {
        var dateArrays = [];
        events.each(function(){
          var singleDate = $(this),
            dateComp = singleDate.data('date').split('T');
          if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
            var dayComp = dateComp[0].split('/'),
              timeComp = dateComp[1].split(':');
          } else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
            var dayComp = ["2000", "0", "0"],
              timeComp = dateComp[0].split(':');
          } else { //only DD/MM/YEAR
            var dayComp = dateComp[0].split('/'),
              timeComp = ["0", "0"];
          }
          var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
          dateArrays.push(newDate);
        });
          return dateArrays;
      }
    
      function daydiff(first, second) {
          return Math.round((second-first));
      }
    
      function minLapse(dates) {
        //determine the minimum distance among events
        var dateDistances = [];
        for (i = 1; i < dates.length; i++) { 
            var distance = daydiff(dates[i-1], dates[i]);
            dateDistances.push(distance);
        }
        return Math.min.apply(null, dateDistances);
      }
    
      /*
        How to tell if a DOM element is visible in the current viewport?
        http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      */
      function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
    
        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
    
        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
      }
    
      function checkMQ() {
        //check if mobile or desktop device
        return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
      }
    });
  },[]);
  async function tempoDetalhes(pais, lat, log) {
    const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${log}&appid=${API_key}`);
      const data = await response.json();
      if (!data.length) return;
      setlistaTempo(data);
      console.log("Tempo", data);
    
  }
  async function teste() {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=${API_key}`);
      const data = await response.json();
      if (!data.length) return;
      const {name,lon,lat} = data[0];
      tempoDetalhes(name,lon,lat);
  }
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/cronogramasT/${session?.user.id}/cronograma`);
      const data = await response.json();
      console.log(data)
      setCronograma(data);
    }
    if(session?.user.id) fetchPosts();
  },[]);
  useEffect(() => {
    let volatel = 0;
    const fetchPosts = async () => {
      const response = await fetch(`/api/todosPadrinhos/${session?.user.id}/padrinhos`);
      const data = await response.json();
      if (data.length != 0) {
        setConvidados(data.length);
        data.map((padrinho) => {
          if (padrinho.status === "confirmado") {          
            setConvidadosConfirmados((prev) => parseInt(prev) + 1)
          }
        });
        
      }         
    }
    if(session?.user.id) fetchPosts();
  },[]);
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
  async function deletePadrinho(iDD2) {
    setVisibleRemover(false);
    setProcessando(true);
    try {
      const response = await fetch(`api/cronogramas/${iDD2}`, {
          method: 'DELETE',
          
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
  async function editCronogramaConfirm(iDD2) {
    setVisibleEditar(false);
    setProcessando(true);
    try {
      const response = await fetch(`api/cronogramas/${iDD2}`, {
          method: 'PATCH',
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
  function confirmadosConvidados() {
    setConfirmados(true);
    setOrcamento(false);
    setTarefas(false);
  }
  function orcamentoCCC() {
    setOrcamento(true);
    setConfirmados(false);
    setTarefas(false);
  }
  function tarefasDDD() {
    setTarefas(true);
    setConfirmados(false);
    setOrcamento(false);
  }
  function CloseAll() {
    setTarefas(false);
    setConfirmados(false);
    setOrcamento(false);
  }
  return (
    <main className='app'>
      <Nav />
      <Profile>
        <Container>
          <Card>
            <div className='justify-center items-center bg-[url("/assets/images/wedding-1183271_1920.jpg")] bg-conver'>
              <Card.Body>              
              <>
                  <Row justify="center" align="center">
                    <div className='justify-center items-center'>
                      <Grid.Container gap={1}>
                        <Grid xs={12}>
                          <Avatar.Group>
                            {pictureUsers.map((url, index) => (
                              <Avatar
                                key={index}
                                size="xl"
                                pointer
                                src={url}
                                bordered
                                color="gradient"
                                stacked
                              />
                            ))}
                          </Avatar.Group>
                        </Grid>
                      </Grid.Container>             
                    </div>          
                  </Row>
                    <span className='font-satoshi font-semibold text-base text-white p-1'>Nome da Noiva & Nome do Noivo</span>
                    <p className="text-white"><span className='font-satoshi font-semibold text-base text-white p-1'>Local do Evento:</span> Av. Dom Alexandre, Nr. 318</p>
                      <p className="text-white"><span className='font-satoshi font-semibold text-base text-white p-1'>Data do Evento:</span> 12-11-2024</p>
                    <p className="text-white"><span className='font-satoshi font-semibold text-base text-white p-1'>Tema:</span> Mar</p>
                    <p className="text-white"><span className='font-satoshi font-semibold text-base text-white p-1'>Cores:</span> Azul, Preto</p>
                    <Spacer y={1} />
                    <p className='mb-2 text-white' onClick={() => teste()}>Contagem Regressiva</p>
                    <Countdown data={"12-11-2024"}/>
                  </>            
            </Card.Body>
            </div>
          </Card>
          <Container gap={0}>
            <Spacer y={1} />
            <Row gap={1}>
              <Col>
              <Link
                      href={"#"}
                      className="dropdown_link"
                      onClick={(e) => tarefasDDD()}
                    >
                      <Card>
                  <div className='justify-center items-center'>
                    <Card.Body>
                    <span className='font-satoshi font-semibold text-base text-gray-700 p-1 text-center'>
                    <Text h6 size={12} css={{ m: 0 }}>
                      Tarefas Realizadas
                      </Text>
                      <Text h6 size={12} css={{ m: 0 }}>
                      11/22
                      </Text>
                      <Progress size="sm" value={25} color="warning" />
                    </span> 
                    </Card.Body>
                    </div>
                  </Card>
                </Link>                
              </Col>
              <Col>
                <Link
                      href={"#"}
                      className="dropdown_link"
                      onClick={(e) => orcamentoCCC()}
                    >
                      <Card>
                        <div className='justify-center items-center'>
                          <Card.Body>
                          <span className='font-satoshi font-semibold text-base text-gray-700 p-1 text-center'>
                          <Text h6 size={12} css={{ m: 0 }}>
                            Orcamento Executado
                            </Text>
                            <Text h6 size={12} css={{ m: 0 }}>
                            3.000,00 / 100.000,00
                            </Text>
                            <Progress size="sm" value={25} color="warning" />
                          </span> 
                          </Card.Body>
                          </div>
                        </Card>
                    </Link>    
              </Col>
              <Col>
              <Link
                          href={"#"}
                          className="dropdown_link"
                          onClick={(e) => confirmadosConvidados()}
                        >
                          <Card>
                            <div className='justify-center items-center'>
                              <Card.Body>
                              <span className='font-satoshi font-semibold text-base text-gray-700 p-1 text-center'>
                              <Text h6 size={12} css={{ m: 0 }}>
                                Convidados confirmados (RSVP)
                                </Text>
                                <Text h6 size={12} css={{ m: 0 }}>
                                08/15
                                </Text>
                                <Progress size="sm" value={25} color="warning" />
                              </span> 
                              </Card.Body>
                            </div>
                          </Card>
                  </Link> 
              </Col>
            </Row>
            <Spacer y={1} />
            {confirmados && (
            <>
              <Row gap={1}>
                <Col>
                    <Card>
                      <div className='flex justify-center' onClick={(e) => CloseAll()}>
                        <table class="styled-table">
                            <thead>
                                <tr class="active-row">
                                    <th>Convidado</th>
                                    <th>Grupo</th>
                                    <th>Mesa</th>
                                    <th>Momento</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="active-row">
                                    <td>Maria Andre</td>
                                    <td>Matrinha</td>
                                    <td>Mar</td>
                                    <td>-</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Jorge Andre</td>
                                    <td>Padrino</td>
                                    <td>Mar</td>
                                    <td>-</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Mateus Cossa</td>
                                    <td>Cavalheiro</td>
                                    <td>Ceu</td>
                                    <td>-</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Denis Joao</td>
                                    <td>Cavalheiro</td>
                                    <td>Ceu</td>
                                    <td>-</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Ana Rodrigues</td>
                                    <td>Dama</td>
                                    <td>Ceu</td>
                                    <td>-</td>
                                    <td>Pendente</td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                    </Card>
                </Col>
              </Row>
            </>
            )}
            {orcamento && (
            <>
            <Row gap={1}>
                <Col>
                    <Card>
                      <div className='flex justify-center' onClick={(e) => CloseAll()}>
                        <table class="styled-table">
                            <thead>
                                <tr class="active-row">
                                    <th>Servicos</th>
                                    <th>Prazo</th>
                                    <th>Preco Total</th>
                                    <th>Saldo</th>
                                    <th>Status</th>
                                    <th>...</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="active-row">
                                    <td>Transporte</td>
                                    <td>12-11-2023</td>
                                    <td>6.000,00</td>
                                    <td>1.000,00</td>
                                    <td>Incompleto</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={() => {}}
                                        className="black_btn"
                                      >
                                        Pagar
                                      </button>
                                    </td>
                                </tr>
                                <tr class="active-row">
                                    <td>Ornamentacao</td>
                                    <td>12-11-2023</td>
                                    <td>3.000,00</td>
                                    <td>3.000,00</td>
                                    <td>Incompleto</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={() => {}}
                                        className="black_btn"
                                      >
                                        Pagar
                                      </button>
                                    </td>
                                </tr>
                                <tr class="active-row">
                                    <td>Vestuario</td>
                                    <td>12-11-2023</td>
                                    <td>25.000,00</td>
                                    <td>25.000,00</td>
                                    <td>Completo</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={() => {}}
                                        className="black_btn"
                                      >
                                        Cancelar
                                      </button>
                                    </td>
                                </tr>
                                <tr class="active-row">
                                    <td>Salao</td>
                                    <td>12-11-2023</td>
                                    <td>50.000,00</td>
                                    <td>25.000,00</td>
                                    <td>Incompleto</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={() => {}}
                                        className="black_btn"
                                      >
                                        Pagar
                                      </button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                      </div>
                    </Card>
                </Col>
              </Row>
            </>
            )}
            {tarefas && (
            <>
            <Row gap={1}>
                <Col>
                    <Card>
                      <div className='flex justify-center' onClick={(e) => CloseAll()}>
                        <table class="styled-table">
                            <thead>
                                <tr class="active-row">
                                    <th>Tarefa</th>
                                    <th>Status</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="active-row">
                                  <td>
                                    <div className="flex flex-col">
                                      <div className="text-orange-500 font-bold">Doces e Salgados</div>
                                      <div><small className="font-bold">Fornecedor: Hele & Magaia</small></div>
                                    </div>                                    
                                  </td>
                                  <td>Pendente</td>
                                  <td>12-11-2023</td>
                                </tr>
                                <tr class="active-row">
                                    <td>
                                      <div className="flex flex-col">
                                        <div className="text-orange-500 font-bold">Ornamentacao</div>
                                        <div><small className="font-bold">Fornecedor: Ines Cossa, Lda.</small></div>
                                      </div> 
                                    </td>
                                    <td>Pendente</td>
                                    <td>14-11-2023</td>
                                </tr>
                                <tr class="active-row">
                                    <td>
                                      <div className="flex flex-col">
                                        <div className="text-orange-500 font-bold">Vestuario</div>
                                        <div><small className="font-bold">Fornecedor: Estilo dos Anjos</small></div>
                                      </div> 
                                    </td>
                                    <td>Feito</td>
                                    <td>16-11-2023</td>
                                </tr>
                                <tr class="active-row">
                                    <td>
                                      <div className="flex flex-col">
                                        <div className="text-orange-500 font-bold">Salao</div>
                                        <div><small className="font-bold">Fornecedor: Artes em Corte</small></div>
                                      </div> 
                                    </td>
                                    <td>Feito</td>
                                    <td>12-11-2023</td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                    </Card>
                </Col>
              </Row>
            </>
            )}
            <Spacer y={1} />
            <div className="text-2xl text-center">TIME LINE</div>
            <section class="cd-horizontal-timeline">
              <div class="timeline">
                <div class="events-wrapper">
                  <div class="events">
                    <ol>
                      <li><a href="#0" data-date="14/06/2016" class="selected">Junho 14</a></li>
                      <li><a href="#0" data-date="21/06/2016">Junho 21</a></li>
                      <li><a href="#0" data-date="24/06/2016">Junho 24</a></li>
                      <li><a href="#0" data-date="30/06/2016">Junho 21-30</a></li>
                      <li><a href="#0" data-date="08/07/2016"> Julho</a></li>
                      <li><a href="#0" data-date="17/07/2016">Junho 28</a></li>
                      <li><a href="#0" data-date="23/07/2016">Junho 30</a></li>
                      <li><a href="#0" data-date="26/07/2016">Agosto 23</a></li>
                      <li><a href="#0" data-date="30/07/2016">Sep 25</a></li>
                      
                      
                    </ol>

                    <span class="filling-line" aria-hidden="true"></span>
                  </div>
                </div>
                  
                <ul class="cd-timeline-navigation">
                  <li><a href="#0" class="prev inactive">Prev</a></li>
                  <li><a href="#0" class="next">Next</a></li>
                </ul>
              </div>

              <div class="events-content">
                <ol>
                  <li class="selected" data-date="14/06/2016">
                    <h2>TK</h2>
                    <em>June 14th, 2016</em>
                    <p>	
                      AMA issues CSAPH 	2-A-16, “Human Environmental Effects of LED Community Lighting.”
                    </p>
                  </li>

                  <li data-date="21/06/2016">
                    <h2>TK</h2>
                    <em>June 21st, 2016</em>
                    <p>	
                      CNN publishes “Doctors issue warning about LED streetlighting.”
                    </p>
                  </li>

                  <li data-date="24/06/2016">
                    <h2>TK</h2>
                    <em>June 24th, 2016</em>
                    <p>	
                      In response to AMA Report 2-A-16, IES Issues “IES Board Position on AMA CSAPH Report 2-A-16.
                    </p>
                  </li>

                  <li data-date="30/06/2016">
                    <h2>TK</h2>
                    <em>June 21-30th, 2016</em>
                    <p>	
                      Various entities in the lighting community issue responses to AMA Report 2-A-16.
                    </p>
                  </li>

                  <li data-date="08/07/2016">
                    <h2>TK</h2>
                    <em>July, 2016</em>
                    <p>	
                      Lighting publications report on the AMA controversy. 
                    </p>
                  </li>

                  <li data-date="17/07/2016">
                    <h2>TK</h2>
                    <em>June 28th, 2017</em>
                    <p>	
                      IES issues Position Statement PS-09-17 (status update of dialogue with AMA). 
                    </p>
                  </li>

                  <li data-date="23/07/2016">
                    <h2>TK</h2>
                    <em>June 30th, 2017</em>
                    <p>	
                      IALD endorses IES Position Statement PS-09-17. 
                    </p>
                  </li>

                  <li data-date="26/07/2016">
                    <h2>TK</h2>
                    <em>August 23rd, 2017</em>
                    <p>	
                      U.S. Department of Energy’s Solid-State Lighting program issues an activity and research update in its SSL Postings newsletter. 
                    </p>
                  </li>

                  <li data-date="30/07/2016">
                    <h2>TK</h2>
                    <em>September 25, 2017</em>
                    <p>	
                      The Washington Post publishes, “Some cities are taking another look at LED lighting after AMA warning.”
                    </p>
                  </li>

                  
                </ol>
              </div> 
            </section>
            <div className="flex text-2xl text-center justify-center">
              <button
                    type="button"
                    onClick={() => {}}
                    className="black_btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>

                    Gerar Relatório Final
                  </button>
                  </div>
          </Container>
        </Container>  
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Cronograma
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
                placeholder="Titulo do Cronograma"
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
                placeholder="Titulo do Cronograma"
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
            open={visibleEditar}
            onClose={() => setVisibleEditar(false)}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Editar Cronograma
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
                placeholder="Titulo do Cronograma"
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
                placeholder="Titulo do Cronograma"
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
              <Button auto flat color="error" onPress={() => setVisibleEditar(false)}>
                Cancelar
              </Button>
              <Button auto onPress={() => editCronogramaConfirm(idd4)}>
                Confirmar
              </Button>
            </Modal.Footer>
        </Modal>  
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visibleRemover}
            onClose={() => setVisibleRemover(false)}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Remover Cronograma
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
            <Text b size={18}>
                  Tem certeza que deseja remover o cronograma com titulo {titulo}
                </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button auto onPress={() => setVisibleRemover(false)}>
                Cancelar
              </Button>
              <Button auto flat color="error" onPress={() => deletePadrinho(idd4)}>
                Confirmar
              </Button>
            </Modal.Footer>
        </Modal>
      </Profile>
    </main>
>>>>>>> 81cace7 (novo update)
  );
}

export default page;
