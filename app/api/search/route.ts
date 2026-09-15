import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

const search = createFromSource(source);

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  return Response.json(await search.export());
}
