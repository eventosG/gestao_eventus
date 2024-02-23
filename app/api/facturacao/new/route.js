import { connectToDB } from "../../../../utils/database";
import Facturacao from "../../../../models/facturacao";

export const POST = async (req, res) => {
    const { 
            tipoPagamanto,
            totalPago,
            remanescente,
            tipoDoc,
            numeroDoc,
            status,
            nomeProduto,
            quantidade,
            codigoProduto,
            preco,
            iva,
            desconto,
            userId } = await req.json();
    
    try {
        await connectToDB();
        const newEvento = new Facturacao({
            creator: userId,
            tipoPagamanto,
            totalPago,
            remanescente,
            tipoDoc,
            numeroDoc,
            status,
            nomeProduto,
            quantidade,
            codigoProduto,
            preco,
            iva,
            desconto,
        });

        await newEvento.save();
        return new Response(JSON.stringify(newEvento), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new Doc", { status: 500 })
    }
}