import { z } from 'astro:content';
import { postSchema } from '../content/config';

export type PostFrontmatter = z.infer<typeof postSchema>;
