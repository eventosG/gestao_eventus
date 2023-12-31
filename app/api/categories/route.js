// import mongooseConnect from "../../../../../lib/mongoose";
import mongooseConnect from "../../../lib/mongoose";
// import { Category } from "../../../../../app/api/categories/route.js";
import { Category } from "../../../models/Category";

export const GET = async () => {
    try {
        await mongooseConnect();
        const eventos = await Category.find().populate('parent');
        return new Response(JSON.stringify(eventos), {
            status: 200
        })
    } catch (error) {
        return new Response('Error', {status:500})
    }
}