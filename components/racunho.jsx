<form 
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
          <option value="Planificador(a)" onClick={() => setPlanificadorEvento("Planificador(a)")}>Planificador(a)</option>
          <option value="Noivo" onClick={() => setPlanificadorEvento("Noivo")}>Noivo</option>
          <option value="Noiva" onClick={() => setPlanificadorEvento("Noiva")}>Noiva</option>
        </select>
        
        <div className='flex flex-row gap-4'>
          <input 
            value={nomePlanificador}
            onChange={(e) => setNomePlanificador(e.target.value)}
            placeholder='Nome'
            required
            className='form_input'
          />
          <input 
            value={contactoPlanificador}
            onChange={(e) => setContactoPlanificador(e.target.value)}
            placeholder='Contacto com whatsapp'
            required
            type='text'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Nome dos Noivos</span>
         <div className='flex flex-row gap-4'>
          <input 
            value={nomeNoiva}
            onChange={(e) => setNomeNoiva(e.target.value)}
            placeholder='Nome da Noiva'
            type='text'
            required
            className='form_input'
          />
          <input 
            value={nomeNoivo}
            onChange={(e) => setNomeNoivo(e.target.value)}
            placeholder='Nome do Noivo'
            required
            type='text'
            className='form_input'
          />
        </div>
        <div className='flex flex-row gap-4'>
          <input
            value={contactoNoiva}
            onChange={(e) => setContactoNoiva(e.target.value)}
            placeholder='Contacto da Noiva'
            type='number'
            required
            className='form_input'
          />
          <input
            value={contactoNoivo}
            onChange={(e) => setContactoNoivo(e.target.value)}
            placeholder='Contacto do Noivo'
            required
            type='number'
            className='form_input'
          />
        </div>
        <span className='font-normal'>Residência dos Noivos</span>
         <div className='flex flex-row gap-4'>
            <select name="cars2" id="cars2" className='form_input' onChange={(e) => setProvinciaSelecionada(e.target.value)}>
              {pronvincias.map((provincia) => <option value={provincia}>{provincia}</option>)}
            </select>
            {provinciaSelecionada === "Maputo Cidade" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setDistritoSelecionado(e.target.value)}>
                {distritoCidadeMaputo.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}
            {provinciaSelecionada === "Maputo Província" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setDistritoSelecionado(e.target.value)}>
                {distritoProvinciaMaputo.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
        </div>
         <div className='flex flex-row gap-4'>
            {distritoSelecionado === "KaMpfumu" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setBairroSelecionado(e.target.value)}>
                {bairroCMaputoKaMpfumu.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
            {distritoSelecionado === "Nlhamankulu" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setBairroSelecionado(e.target.value)}>
                {bairroCMaputoNlhamankulu.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
            {distritoSelecionado === "KaMaxakeni" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setBairroSelecionado(e.target.value)}>
                {bairroCMaputoKaMaxakeni.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
            {distritoSelecionado === "KaMavota" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setBairroSelecionado(e.target.value)}>
                {bairroCMaputoKaMavota.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
            {distritoSelecionado === "KaMubukwana" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setBairroSelecionado(e.target.value)}>
                {bairroCMaputoKaMubukwana.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
            {distritoSelecionado === "KaTembe" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setBairroSelecionado(e.target.value)}>
                {bairroCMaputoKaTembe.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
            {distritoSelecionado === "KaNyaka" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setBairroSelecionado(e.target.value)}>
                {bairroCMaputoKaNyaka.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
            {distritoSelecionado === "Boane" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setBairroSelecionado(e.target.value)}>
                {distritoPMaputoBoane.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
            {distritoSelecionado === "Marracuene" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setBairroSelecionado(e.target.value)}>
                {distritoPMaputoMarracuene.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
            {distritoSelecionado === "Matola" && (
              <select name="cars2" id="cars2" className='form_input' onChange={(e) => setBairroSelecionado(e.target.value)}>
                {distritoPMaputoMatola.map((provincia) => <option value={provincia}>{provincia}</option>)}
              </select>
            )}            
            <input 
          value={numeroCasaQuarteirao}
          onChange={(e) => setNumeroCasaQuarteirao(e.target.value)}
          placeholder='Número de Quarteirão e Casa'
          required
          className='form_input'
        />
        </div>
         <div className='flex flex-row gap-4'>
         <input 
          value={avenidaRua}
          onChange={(e) => setAvenidaRua(e.target.value)}
          placeholder='Avenida/Rua'
          required
          className='form_input'
        />
            <input 
          value={pontoReferencia}
          onChange={(e) => setPontoReferencia(e.target.value)}
          placeholder='Ponto de Referência'
          required
          className='form_input'
        />
        </div>
        <span className='font-normal'>Data do Casamento</span>
        <input 
          type='date'
          value={dataEvento}
          onChange={(e) => setDataEvento(e.target.value)}
          placeholder='Data do Evento'
          required
          className='form_input'
        />
        <span className='font-normal'>Tema do Casamento</span>
        <input
          value={temaEvento}
          onChange={(e) => setTemaEvento(e.target.value)}
          placeholder='(Opcinal)'
          className='form_input'
        />
        <span className='font-normal'>Orçamento</span>
        <input
          value={orcamentoInicial}
          onChange={(e) => setOrcamentoInicial(e.target.value)}
          placeholder='Orçamento Inicial'
          type="number"
          required
          className='form_input'
        />
        <span className='font-normal'>Cores do Casamento</span>
        <select name="cars2" id="cars2" className='form_input' onChange={(e) => setCoresEvento(e.target.value)}>
          <option value="Preto">Preto</option>
          <option value="Branco">Branco</option>
          <option value="Azul">Azul</option>
          <option value="Preto/Branco">Preto/Branco</option>
          <option value="Branco/Azul">Branco/Azul</option>
          <option value="Azul/Preto">Azul/Preto</option>
        </select>
        <span className='font-normal'>Convidados Previstos</span>
        <input
          value={convidadosPrevistos}
          onChange={(e) => setConvidadosPrevistos(e.target.value)}
          placeholder='Número de Convidados'
          type="number"
          className='form_input'
        />
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm'>
            Cancelar
          </Link>
          <button 
            type='submit'
            disabled={submitting}
            onClick={() => createEvento("Casamento")}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button>
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