import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <p className="font-semibold text-xl">{appName}</p>,
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
      },
      {
        type: 'icon',
        label: 'GitHub Repository',
        icon: <span aria-hidden="true">↗</span>,
        text: 'GitHub Repository',
        url: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
      },
    ],
  };
}
