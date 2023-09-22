import { Schema, model, models } from "mongoose";

const EventoSchema = new Schema ({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    nomeNoiva: {type: String},
    tipodeBodas: {type: String},
    contactoNoiva: {type: String},
    nomeNoivo: {type: String, require: true},
    contactoNoivo: {type: String, require: true},
    planificadorEvento: {type: String, require: true},
    nomePlanificador: {type: String, require: true},
    contactoPlanificador: {type: String, require: true},
    localEvento: {type: String, require: true},
    provincia: {type: String, require: true},
    distrito: {type: String, require: true},
    bairro: {type: String, require: true},
    numeroCasaQuarteirao: {type: String, require: true},
    pontoReferencia: {type: String, require: true},
    dataEvento: {type: String, require: true}, 
    temaEvento: {type: String, require: true},
    orcamentoInicial: {type: String, require: true},
    coresEvento: {type: String, require: true},
    convidadosPrevistos: {type: String, require: true},
    tipoEvento: {type: String, require: true},
})

const Evento = models.Evento || model("Evento", EventoSchema);

export default Evento;