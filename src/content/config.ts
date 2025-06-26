import { defineCollection, z } from 'astro:content';

export const postSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string())
});

const posts = defineCollection({
  schema: postSchema
});

export const collections = {
  posts
};
