import Padrinho from "../../../../models/padrinho";
import { connectToDB } from "../../../../utils/database";
// import Padrinho from "@models/padrinho";
// import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const prompt = await Padrinho.findById(params.id).populate("creator");
        if (!prompt) return new Response("Not found", {status: 404})
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 

export const PATCH = async (request, { params }) => {
    const {mensagem, nomeConvidado, emailConvidado, grupo, mesa, tipoConvidado, userId, status} = await request.json();
    try {
        await connectToDB();
        const existingPrompt = await Padrinho.findById(params.id);
        if (!existingPrompt) return new Response("Not found", {status: 404});

        existingPrompt.mensagem = mensagem;
        existingPrompt.nomeConvidado = nomeConvidado;
        existingPrompt.emailConvidado = emailConvidado;
        existingPrompt.grupo = grupo;
        existingPrompt.mesa = mesa;
        existingPrompt.tipoConvidado = tipoConvidado;
        existingPrompt.userId = userId;
        existingPrompt.status = status;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        await Padrinho.findByIdAndRemove(params.id)
        return new Response("Sucess", { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 