import { connectToDB } from "@utils/database";
import Servicos from "@models/servicos";

export const POST = async (req, res) => {
    const { cor, preco, nomeServico, userId } = await req.json();
    
    try {
        await connectToDB();
        const newEvento = new Servicos({
            creator: userId,
            nomeServico,
            preco,
            cor,
        });

        await newEvento.save();
        return new Response(JSON.stringify(newEvento), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new Evento", { status: 500 })
    }
}