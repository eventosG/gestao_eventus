import { Schema, model, models } from "mongoose";

const ServicosSchema = new Schema ({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    nomeServico: {type: String, require: true},
    preco: {type: String, require: true},
    cor: {type: String, require: true},
})

const Servicos = models.Servicos || model("Servicos", ServicosSchema);
export default Servicos;