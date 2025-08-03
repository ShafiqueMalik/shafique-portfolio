// lib/fetchFromSanity.ts
import { sanity } from '@/lib/sanity'; // Your sanity client

export async function fetchFromSanity<T>(
  query: string,
  params: Record<string, any> = {}
): Promise<T> {
  try {
    const data = await sanity.fetch<T>(query, params);

    if (!data) {
      throw new Error('No data returned from Sanity.');
    }

    return data;
  } catch (error: any) {
    console.error('❌ Failed to fetch from Sanity:', error?.message || error);
    // Re-throwing with a clean message
    throw new Error('Could not load data. Please try again later.');
  }
}

// // lib/fetchFromSanity.ts
// import { sanity } from '@/lib/sanity'; // your sanity client

// export async function fetchFromSanity<T>(
//   query: string,
//   params: Record<string, any> = {}
// ): Promise<T> {
//   try {
//     const data = await sanity.fetch<T>(query, params);
//     return data;
//   } catch (error) {
//     console.error('❌ Failed to fetch from Sanity:', error);
//     throw new Error('Failed to fetch data from Sanity');
//   }
// }
