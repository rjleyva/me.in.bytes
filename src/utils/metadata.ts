import type { PageMetadata } from '@/types/metadata';

export function createMetadata(meta: {
  pageTitle: string;
  pageDescription: string;
  pageURL: string;
  ogDescription?: string;
}): PageMetadata {
  return {
    ...meta,
    ogDescription: meta.ogDescription ?? meta.pageDescription
  };
}
