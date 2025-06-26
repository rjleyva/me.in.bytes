import type { CollectionEntry } from 'astro:content';

function mapPostToJsonLd(post: CollectionEntry<'posts'>) {
  const url = new URL(`/blog/${post.slug}/`, import.meta.env.SITE).toString();

  return {
    '@type': 'BlogPosting',
    headline: post.data.title,
    url,
    datePublished: post.data.date.toISOString(),
    dateModified: (post.data.updated ?? post.data.date).toISOString(),
    description: post.data.description,
    author: {
      '@type': 'Person',
      name: post.data.author
    },
    keywords: post.data.tags?.length ? post.data.tags.join(', ') : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
}

export function generateBlogJsonLd(
  posts: CollectionEntry<'posts'>[],
  metadata: {
    pageTitle: string;
    pageDescription: string;
    pageURL: string;
  }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: metadata.pageTitle,
    url: metadata.pageURL,
    description: metadata.pageDescription,
    blogPost: posts.map(mapPostToJsonLd)
  };
}

export function generatePostJsonLd(
  post: CollectionEntry<'posts'>,
  pageURL: string
) {
  return {
    '@context': 'https://schema.org',
    ...mapPostToJsonLd(post),
    url: pageURL,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageURL
    }
  };
}
