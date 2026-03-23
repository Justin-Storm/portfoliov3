import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
    messages: defineTable({
        name: v.string(),
        email: v.string(),
        phoneNumber: v.optional(v.string()),
        message: v.string(),
    })
})