import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-study' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    clientLogo: z.string(),
    mainImage: z.string(),
    galleryImages: z.array(z.string()).optional(),
    info: z.array(z.object({
      label: z.string(),
      items: z.array(z.string()),
    })),
    about: z.object({
      heading: z.string(),
      text: z.string(),
    }),
    functions: z.array(z.object({
      name: z.string(),
      description: z.string(),
    })),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
    quote: z.object({
      text: z.string(),
      author: z.string(),
      role: z.string(),
    }).optional(),
    date: z.string(),
  }),
});

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

const funkcjonalnosci = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/funkcjonalnosci' }),
  schema: z.object({
    title: z.string(),
  }),
});

const planStatus = z.enum(['included', 'optional', 'unavailable']);

const obszary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/obszary' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    modules: z.array(z.object({
      name: z.string(),
      description: z.string(),
      starter: planStatus,
      professional: planStatus,
      enterprise: planStatus,
    })),
  }),
});

const partnerzy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partnerzy' }),
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    website: z.string().url(),
    phone: z.string().optional(),
    email: z.string().email().optional(),
    linkedin: z.string().url().optional(),
    specialization: z.array(z.string()),
    shortDescription: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'baza-wiedzy': bazaWiedzy,
  'case-study': caseStudy,
  'funkcjonalnosci': funkcjonalnosci,
  'obszary': obszary,
  'partnerzy': partnerzy,
};
