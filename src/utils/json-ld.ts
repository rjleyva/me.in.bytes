import type { CollectionEntry } from 'astro:content';

export interface BlogPostingJsonLd {
  '@context'?: 'https://schema.org';
  '@type': 'BlogPosting';
  headline: string;
  url: string;
  datePublished: string;
  dateModified: string;
  description: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  keywords?: string;
  image?: string;
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
}

export interface BlogJsonLd {
  '@context': 'https://schema.org';
  '@type': 'Blog';
  name: string;
  url: string;
  description: string;
  blogPost: BlogPostingJsonLd[];
  publisher?: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
}

function mapPostToJsonLd(
  post: CollectionEntry<'posts'>,
  url: string
): BlogPostingJsonLd {
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
  },
  options?: {
    publisherName?: string;
    publisherLogo?: string;
  }
): BlogJsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: metadata.pageTitle,
    url: metadata.pageURL,
    description: metadata.pageDescription,
    blogPost: posts.map(post =>
      mapPostToJsonLd(
        post,
        new URL(`/blog/${post.slug}/`, import.meta.env.SITE).toString()
      )
    ),
    ...(options?.publisherName && {
      publisher: {
        '@type': 'Organization',
        name: options.publisherName,
        ...(options.publisherLogo && {
          logo: {
            '@type': 'ImageObject',
            url: options.publisherLogo
          }
        })
      }
    })
  };
}

export function generatePostJsonLd(
  post: CollectionEntry<'posts'>,
  pageURL: string
): BlogPostingJsonLd {
  return {
    '@context': 'https://schema.org',
    ...mapPostToJsonLd(post, pageURL),
    url: pageURL,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageURL
    }
  };
}
