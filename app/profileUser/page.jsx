"use client";
import React, { useState, useEffect } from "react";
import Profile from "@app/profile/page";
import { Card, Row, Text, Col, Image } from "@nextui-org/react";
import { useSession } from "next-auth/react";

function page() {
  const { data: session } = useSession();
  const [evento, setEvento] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
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
  );
}

export default page;
