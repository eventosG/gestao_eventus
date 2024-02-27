"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Profile from '../../components/ProfilePage';
import Nav from '../../components/Nav';
import Image from "next/image"; 
import {
  Divider,
  Modal,
  Button,
  Text,
  Spacer,
} from "@nextui-org/react";
var line_items = [];
import StripeCheckout from 'react-stripe-checkout';
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
function page() {
  const [facturaVer, setFacturaVer] = useState(true);
  const { data: session } = useSession();
  const [momentosVisible, setMomentosVisible] = useState(false);
  const [totalSemIva, settotalSemIva] = useState("");
  const [totalIva, settotalIva] = useState("");
  const [total, settotal] = useState("");
  const [verAgora, setVerAgora] = useState("");
  const [nomesLista, setNomesLista] = useState([]);
  var isodate = new Date().toISOString();
  let d = new Date();
  let sevenDaysFromNow = d.setDate(d.getDate() + 7);
  sevenDaysFromNow = new Date(sevenDaysFromNow).toISOString();
  const closeMomentos = () => {
    setMomentosVisible(false);
  };
  var totalSemIVAVolatem = 0;
  var totalIVAVolatem = 0;
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/facturacao/${session?.user.id}`);
      const data = await response.json();
      data.map((tot) => {
        totalSemIVAVolatem += parseFloat(tot.totalPago);
        totalIVAVolatem += parseFloat(tot.totalPago)*0.16;
      })
      setNomesLista(data);
      settotalSemIva(totalSemIVAVolatem);
      settotalIva(totalIVAVolatem);
      settotal(totalIVAVolatem+totalSemIVAVolatem);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);
  const onToken = (onToken) => {
    const tampleteForms = {
      from_name: 'Gestao de Eventos',
      from_email: 'lyrthus@gmail.com',
      to_name: session?.user.email,
      message: "",
    }
    emailjs
      .sendForm('service_stj1kcb', 'template_rr2lm75', tampleteForms, {
        publicKey: 'EjReHUUIo8PCVMk1B',
      })
      .then(
        () => {
          toast.info(`Pagamento efectuado com sucesso, mandamos o Recibo para o seu email...`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        },
        (error) => {
          toast.error(`Error ao enviar email: ${error}`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        },
      );
    console.log(onToken);
  }
  return (
    <>
      <main className='app'>
        <Nav />
        <Profile>
        <div className='m-2 flex'>
              <div class="flex-auto w-32">
                <span className="font-satoshi font-semibold text-base text-gray-700 p-1">
                  <div className="flex flex-row justify-between bg-orange-100">
                    <div className="flex flex-row gap-4 mt-4">
                      <div>.</div>
                    </div>
                    <div className="flex gap-4 justify-end">
                      <div className='flex flex-row gap-4'>
                        <button
                          type="button"
                          onClick={() => formatoPagamento()}
                        >
                          Formato de Pagamento
                        </button>
                        <StripeCheckout
                          token={onToken}
                          name="Gestão de Eventos"
                          currency="MZN"
                          amount={total}
                          stripeKey="pk_test_51GxvyrCGChNeHFaHiiuqfUDv9rJwFttQvRCwRr4xIgdyalP7DVKAuHsFXklbwRLQY1QoCwNnUa8xQdmkNxObQkxB00PXm5gxpX"
                        />
                        <div className="mt-4">Meus Recibos</div>
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
                    </div>
                  </div>                  
                </span>
                </div>
              </div>
              <div className='m-2 p-2 bg-orange-100'>
                <div className='m-6'>
                  <div className='flex flex-between'>
                    <div>
                      <div className='font-bold text-2xl'>Gestão de Eventos</div>
                      <div>Av. Dom Alexandre, Nr. 318</div>
                      <div>E-mail: info@gestaodeeventos.co.mz</div>
                      <div>Contactos: (+258) 82 000 0000</div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='font-bold text-2xl text-right'>Identificação do Cliente</div>
                      <div className='text-right'><p>Endereço do Cliente</p></div>
                      <div className='text-right'>E-mail do Cliente</div>
                      <div className='text-right'>Contactos do Cliente</div>
                    </div>
                  </div>
                  <div className='flex justify-center font-bold text-2xl'>Cotação</div>
                  <div className='flex flex-between'>
                    <div>
                      <div className='flex flex-row'><p className='font-bold'>Caixa: </p>&nbsp;Gestão de Eventos</div>
                      <div className='flex flex-row'><p className='font-bold'>Itens: </p>&nbsp;0</div>
                      <div className='flex flex-row'><p className='font-bold'>Requisição:</p>&nbsp;1</div>
                    </div>
                    <div>
                      <div className='flex flex-row'><p className='font-bold'>Moeda: </p>&nbsp;MZN</div>
                      <div className='flex flex-row'><p className='font-bold'>Câmbio: </p>&nbsp;1.0</div>
                    </div>
                    <div>
                      <div className='text-right'><div className='flex flex-row'><p className='font-bold'>Número:</p>&nbsp;00001</div></div>
                      <div className='text-right'><div className='flex flex-row'><p className='font-bold'>Data:</p>&nbsp;{isodate.substring(0, 10)}</div></div>
                      <div className='text-right'><div className='flex flex-row'><p className='font-bold'>Data de Vencimento:</p>&nbsp;{sevenDaysFromNow.substring(0, 10)}</div></div>
                    </div>
                  </div>
                  <Spacer y={1} />
                  <div className='flex flex-row font-bold'>
                    <div className='w-[420px]'>Descrição</div>
                    <div className='w-[150px]'>Cód.</div>
                    <div className='w-[130px]'>Qt.</div>
                    <div className='w-[120px]'>Preço</div>
                    <div className='w-[130px]'>IVA</div>
                    <div className='w-[130px]'>Sub Total</div>
                    <div>...</div>
                  </div>
                  <Divider className="my-4" />
                  {nomesLista.length > 0 &&
                          nomesLista.map((product) => (
                          <>
                          <div className='flex flex-row'>
                    <div className='w-[420px]'>{product.nomeProduto}</div>
                    <div className='w-[150px]'>{product.codigoProduto}</div>
                    <div className='w-[130px]'>{product.quantidade}</div>
                    <div className='w-[120px]'>{product.preco}</div>
                    <div className='w-[130px]'>{product.iva}</div>
                    <div className='w-[130px]'>{parseFloat(product.preco)*parseInt(product.quantidade)+(parseFloat(product.preco)*parseInt(product.quantidade)*0.16)}</div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </div>
                  </div>
                  <Divider className="my-4" />
                          </>))}
                  
                  <Spacer y={2} />
                  <div className='flex flex-between'>
                    <div>
                      <Image
                        src={"/assets/img/QRcode.png"}
                        alt={"Gestao de Eventos Logo"}
                        width={100}
                        height={30}
                        className="object-contain"
                      />
                      <div className='flex flex-row'>Processado por computador</div>
                    </div>
                    <div>
                      <div className='flex flex-row font-bold'>Sub totais</div>
                      <Divider className="my-4" />
                      <div className='flex justify-between w-[300px]'>
                        <div className='w-[200px]'>Subtotal Sem IVA</div>
                        <div>{totalSemIva} Mt</div>
                      </div>
                      <div className='flex justify-between w-[300px]'>
                        <div className='w-[200px]'>IVA</div>
                        <div>{totalIva} Mt</div>
                      </div>
                    </div>
                  </div>
                  <Spacer y={2} />
                  {verAgora}
                  <div className='flex flex-between'>
                    <div>
                      <div className='flex flex-row'>.</div>
                    </div>
                    <div className='flex justify-between w-[350px] font-bold text-2xl'>
                      <div>Total:</div>
                      <div>{total} Mt</div>
                  </div>  
                  </div> 
                </div> 
              </div>                                        
        </Profile>
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={momentosVisible}
            onClose={closeMomentos}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Pagamento Parcial da Factura 00001
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              {/* 
                1. Se Saldo Total da Factura for menor ou igual a 299.000 (habilitar apenas 2 parcelas)
                2. Para data de realização do evento menor que 2 meses e maior ou igual a 4 meses (o prazo de pagamento sera de 2 meses consecutivos)
                3. Para data de realização do evento menor que 4 meses e maior ou igual a 4 meses (o prazo de pagamento sera de 3 meses consecutivos)
                4. Para data de realização do evento menor que 4 meses e maior ou igual a 6 meses (o prazo de pagamento sera de 3 meses consecutivos)
                5. Para data de realização do evento menor que 6 meses e maior ou igual a 8 meses (o prazo de pagamento sera de 4 meses consecutivos)
                6. Para data de realização do evento menor que 8 meses e maior ou igual a 12 meses (o prazo de pagamento sera de 9 meses consecutivos)
                7. Para data de realização do evento menor que 12 meses e maior ou igual a 18 meses (o prazo de pagamento sera de 15 meses consecutivos)
              */}
              {/* 
                1. Se Saldo Total da Factura estiver entre 300.000 e menor ou igual a 699.000 (habilitar apenas 3 parcelas com 40% referente a 1 parcela, 35% referente a 2 parcela e o restante para a ultima parcela)
                2. Para data de realização do evento menor que 2 meses e maior ou igual a 4 meses (o prazo de pagamento sera de 2 meses consecutivos)
                3. Para data de realização do evento menor que 4 meses e maior ou igual a 4 meses (o prazo de pagamento sera de 3 meses consecutivos)
                4. Para data de realização do evento menor que 4 meses e maior ou igual a 6 meses (o prazo de pagamento sera de 3 meses consecutivos)
                5. Para data de realização do evento menor que 6 meses e maior ou igual a 8 meses (o prazo de pagamento sera de 4 meses consecutivos)
                6. Para data de realização do evento menor que 8 meses e maior ou igual a 12 meses (o prazo de pagamento sera de 9 meses consecutivos)
                7. Para data de realização do evento menor que 12 meses e maior ou igual a 18 meses (o prazo de pagamento sera de 15 meses consecutivos)
              */}
              {/* 
                1. Se Saldo Total da Factura estiver entre 700.000 e menor ou igual a 999.000 (habilitar apenas 3 parcelas com 37% referente a 1 parcela, 37% referente a 2 parcela e o restante para a ultima parcela)
                2. Para data de realização do evento menor que 2 meses e maior ou igual a 4 meses (o prazo de pagamento sera de 2 meses consecutivos)
                3. Para data de realização do evento menor que 4 meses e maior ou igual a 4 meses (o prazo de pagamento sera de 3 meses consecutivos)
                4. Para data de realização do evento menor que 4 meses e maior ou igual a 6 meses (o prazo de pagamento sera de 3 meses consecutivos)
                5. Para data de realização do evento menor que 6 meses e maior ou igual a 8 meses (o prazo de pagamento sera de 4 meses consecutivos)
                6. Para data de realização do evento menor que 8 meses e maior ou igual a 12 meses (o prazo de pagamento sera de 9 meses consecutivos)
                7. Para data de realização do evento menor que 12 meses e maior ou igual a 18 meses (o prazo de pagamento sera de 15 meses consecutivos)
              */}
              {/* 
                1. Se Saldo Total da Factura estiver entre 1.000.000 e menor ou igual a 2.000.000 (habilitar apenas 3 parcelas com 37% referente a 1 parcela, 37% referente a 2 parcela e o restante para a ultima parcela)
                2. Para data de realização do evento menor que 2 meses e maior ou igual a 4 meses (o prazo de pagamento sera de 2 meses consecutivos)
                3. Para data de realização do evento menor que 4 meses e maior ou igual a 4 meses (o prazo de pagamento sera de 3 meses consecutivos)
                4. Para data de realização do evento menor que 4 meses e maior ou igual a 6 meses (o prazo de pagamento sera de 3 meses consecutivos)
                5. Para data de realização do evento menor que 6 meses e maior ou igual a 8 meses (o prazo de pagamento sera de 4 meses consecutivos)
                6. Para data de realização do evento menor que 8 meses e maior ou igual a 12 meses (o prazo de pagamento sera de 9 meses consecutivos)
                7. Para data de realização do evento menor que 12 meses e maior ou igual a 18 meses (o prazo de pagamento sera de 15 meses consecutivos)
              */}
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeMomentos}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
      </main>
    </> 
  )
}

export default page