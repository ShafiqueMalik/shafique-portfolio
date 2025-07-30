import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanity = createClient({
  projectId: '4xipj1g3', // find in sanity.json or studio.sanity.io/manage
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-05-15',
});

const builder = imageUrlBuilder(sanity);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Get URL for a file asset
 * @param {string} assetRef - File reference (e.g., 'file-abc123-def456')
 * @returns {string} File URL
 */
export function getFileUrl(assetRef: string | null) {
  if (!assetRef) return null;
  const [_file, id, extension] = assetRef.split('-');
  return `https://cdn.sanity.io/files/${sanity.config().projectId}/${
    sanity.config().dataset
  }/${id}.${extension}`;
}
