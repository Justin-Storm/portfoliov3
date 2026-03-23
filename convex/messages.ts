import { convexToJson, v } from 'convex/values';
import { mutation } from './_generated/server';

export const addMessage = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        phoneNumber: v.optional(v.string()),
        message: v.string(),
    },
    handler: async (ctx, { name, email, phoneNumber, message }) => {
        const newMessage = await ctx.db.insert("messages", {
            name,
            email,
            phoneNumber,
            message
        });
        return newMessage;
    }
})