import { createClient } from '@sanity/client'
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'

export const sanity = createClient({
  projectId: '4xipj1g3',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-05-15',
})

const builder = createImageUrlBuilder(sanity)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function fetchFromSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  try {
    const data = await sanity.fetch<T>(query, params, { next: { revalidate: 60 } })
    if (!data) throw new Error('No data returned from Sanity.')
    return data
  } catch (error) {
    console.error('Failed to fetch from Sanity:', error instanceof Error ? error.message : error)
    throw new Error('Could not load data. Please try again later.')
  }
}
