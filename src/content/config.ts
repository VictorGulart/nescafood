import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string().optional(),
    image: z.string(),
    tag: z.string().optional(),
  }),
});

export const collections = { products };
