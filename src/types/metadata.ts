import type { BlogJsonLd, BlogPostingJsonLd } from '@/utils/jsonld';

export interface PageMetadata {
  pageTitle: string;
  pageDescription: string;
  pageURL: string;
  ogDescription: string;
  structuredData?: BlogJsonLd | BlogPostingJsonLd;
}
