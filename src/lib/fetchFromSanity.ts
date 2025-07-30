// lib/fetchFromSanity.ts
import { sanity } from '@/lib/sanity'; // your sanity client

export async function fetchFromSanity<T>(
  query: string,
  params: Record<string, any> = {}
): Promise<T> {
  try {
    const data = await sanity.fetch<T>(query, params);
    return data;
  } catch (error) {
    console.error('❌ Failed to fetch from Sanity:', error);
    throw new Error('Failed to fetch data from Sanity');
  }
}
