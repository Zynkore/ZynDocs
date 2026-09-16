import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const docsLlms = {
  async index() {
    return source
      .getPages()
      .map((page) => `- [${page.data.title}](${page.url})`)
      .join('\n');
  },
  async full() {
    return this.index();
  },
  async page(page: { data: { title: string; description?: string } }) {
    return `# ${page.data.title}\n\n${page.data.description ?? ''}`;
  },
};
