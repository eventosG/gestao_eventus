"use client";
import React, { useState } from "react";
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
function page() {
  const [facturaVer, setFacturaVer] = useState(true);
  const [momentosVisible, setMomentosVisible] = useState(false);
  const closeMomentos = () => {
    setMomentosVisible(false);
  };
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
                        >
                          Pagamento Total
                        </button>
                        <button
                          type="button"
                          onClick={() => setMomentosVisible(true)}
                        >
                          Pagamento Parcial
                        </button>
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
                  <div className='flex justify-center font-bold text-2xl'>Factura</div>
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
                      <div className='text-right'><div className='flex flex-row'><p className='font-bold'>Data:</p>&nbsp;01/02/2024</div></div>
                      <div className='text-right'><div className='flex flex-row'><p className='font-bold'>Data de Vencimento:</p>&nbsp;01/02/2024</div></div>
                    </div>
                  </div>
                  <Spacer y={1} />
                  <div className='flex flex-row font-bold'>
                    <div className='w-[420px]'>Descrição</div>
                    <div className='w-[150px]'>Cód.</div>
                    <div className='w-[130px]'>Qt.</div>
                    <div className='w-[120px]'>Preço</div>
                    <div className='w-[130px]'>IVA</div>
                    <div>Sub Total</div>
                  </div>
                  <Divider className="my-4" />
                  <div className='flex flex-row'>
                    <div className='w-[420px]'>Produto Selecionado</div>
                    <div className='w-[150px]'>PS</div>
                    <div className='w-[130px]'>1</div>
                    <div className='w-[120px]'>2.564,48</div>
                    <div className='w-[130px]'>410,32</div>
                    <div>2.974,80</div>
                  </div>
                  <Divider className="my-4" />
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
                        <div>2.564,48 Mt</div>
                      </div>
                      <div className='flex justify-between w-[300px]'>
                        <div className='w-[200px]'>IVA</div>
                        <div>410,32 Mt</div>
                      </div>
                    </div>
                  </div>
                  <Spacer y={2} />
                  <div className='flex flex-between'>
                    <div>
                      <div className='flex flex-row'>.</div>
                    </div>
                    <div className='flex justify-between w-[350px] font-bold text-2xl'>
                      <div>Total:</div>
                      <div>2.974,80 Mt</div>
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