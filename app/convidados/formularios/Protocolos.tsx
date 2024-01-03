"use client";
import Link from "next/link";
import React from "react";
import {Textarea} from "@nextui-org/react";

function Protocolos() {
  return (
    <>
      <form
        // onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <>
          <label className="flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center">
            <h3>Cavalheiros</h3>
            {/* <Reactphone /> */}
          </label>
          <div className="flex flex-row gap-4">
            <input
              // value={nomePlanificador}
              // onChange={(e) => setNomePlanificador(e.target.value)}
              placeholder="Nome Completo do Cavalheiro"
              required
              className="form_input"
            />
            <input
              // value={contactoPlanificador}
              // onChange={(e) => setContactoPlanificador(e.target.value)}
              placeholder="Contacto do Cavalheiro"
              required
              type="text"
              className="form_input"
            />
          </div>
          <div className="flex-start mx-3 mb-5 gap-4">            
            <button
                type="submit"
                // disabled={submitting}
                // onClick={() => createEvento("Sociais")}
                className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
              >
              +
              {/* {submitting ? `${type}...` : type} */}
            </button>
            <h1>Adicionar Cavalheiro</h1>
          </div>
          <div className="flex flex-row gap-4">
          {/* <Textarea
              label="Description"
              placeholder="Enter your description"
              defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
              className="flex w-full"
            /> */}
            <textarea name="messagens" id="messagens" placeholder="Gostariamos de te-los como os nossos Cavalheiro..."></textarea>
          </div> 
          <div className="flex-end mx-3 mb-5 gap-4">
          <button
              type="submit"
              // disabled={submitting}
              // onClick={() => createEvento("Sociais")}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
              Gravar
              {/* {submitting ? `${type}...` : type} */}
            </button>
            <button
              type="submit"
              // disabled={submitting}
              // onClick={() => createEvento("Sociais")}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
              Enviar
              {/* {submitting ? `${type}...` : type} */}
            </button>
          </div>
        </>
      </form>
    </>
  );
}

export default Protocolos;
