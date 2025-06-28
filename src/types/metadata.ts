import type { BlogJsonLd, BlogPostingJsonLd } from '@/utils/json-ld';

export interface PageMetadata {
  pageTitle: string;
  pageDescription: string;
  pageURL: string;
  ogDescription: string;
  structuredData?: BlogJsonLd | BlogPostingJsonLd;
}
