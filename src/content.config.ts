import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bazaWiedzy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/baza-wiedzy' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    date: z.string(),
    author: z.string().optional(),
    authorJob: z.string().optional(),
    authorImage: z.string().optional(),
    authorBio: z.string().optional(),
  }),
});

export const collections = {
  'baza-wiedzy': bazaWiedzy,
};
