import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 文章：content/blog/<slug>.md 或 content/blog/<slug>/index.md
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// 圖文：每篇一個資料夾 content/photos/<slug>/index.md，照片放在同一個資料夾
const photos = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './content/photos' }),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      title: z.string().optional(),
      images: z.array(image()).min(1),
      draft: z.boolean().default(false),
    }),
});

// 短文：content/notes/<任意檔名>.md，只需要 date
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/notes' }),
  schema: z.object({
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, photos, notes };
