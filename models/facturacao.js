import { Schema, model, models } from "mongoose";

const FacturacaoSchema = new Schema ({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    tipoDoc: {type: String},
    numeroDoc: {type: String},
    tipoPagamento: {type: String},
    totalPago: {type: String},
    remanescente: {type: String},
    status: {type: String},
    nomeProduto: {type: String, require: true},
    quantidade: {type: String, require: true},
    codigoProduto: {type: String, require: true},
    preco: {type: String, require: true},
    iva: {type: String, require: true},
    desconto: {type: String, require: true},
})

const Facturacao = models.Facturacao || model("Facturacao", FacturacaoSchema);

export default Facturacao;