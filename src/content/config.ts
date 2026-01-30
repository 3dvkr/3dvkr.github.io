// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    thumbnails: z.object({
        default: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number()
        }),
        high: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number()
        }).optional()
    }).optional(),
    published: z.boolean().default(false),
    date: z.date(),
    // slug: z.string()
    excerpt: z.string().optional()
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog-posts': blogCollection,
};