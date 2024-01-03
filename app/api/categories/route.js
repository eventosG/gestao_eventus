import { connectToDB } from "../../../utils/database";
import { Category } from "../../../models/Category";

export const GET = async () => {
    try {
        await connectToDB();
        const eventos = await Category.find().populate('parent');
        return new Response(JSON.stringify(eventos), {
            status: 200
        })
    } catch (error) {
        return new Response('Error', {status:500})
    }
}