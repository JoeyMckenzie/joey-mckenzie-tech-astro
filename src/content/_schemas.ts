import { z, defineCollection } from 'astro:content';

//* Astro let's us infer blog metadata types from front matters with the help of Zod
export const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    image: z.string(),
  }),
});
