import 'server-only'

import type { QueryParams } from 'next-sanity'
import { client } from './client'

export interface SanityFetchOptions {
  query: string
  params?: QueryParams
  tags?: string[]
  revalidate?: number | false
}

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  revalidate = 60,
}: SanityFetchOptions): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  })
}
