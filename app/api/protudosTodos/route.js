import { connectToDB } from "../../../utils/database";
import { Product } from "../../../models/Products";
export const GET = async () => {
    try {
        await connectToDB();
        const eventos = await Product.find();
        return new Response(JSON.stringify(eventos), {
            status: 200
        })
    } catch (error) {
        return new Response('Error', {status:500})
    }
}