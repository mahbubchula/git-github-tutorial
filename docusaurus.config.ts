import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Git & GitHub Studio',
  tagline: 'Step-by-step Git mastery with Mahbub Hassan',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://mahbubchula.github.io',
  baseUrl: '/git-github-tutorial/',

  organizationName: 'mahbubchula',
  projectName: 'git-github-tutorial',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/mahbubchula/git-github-tutorial/blob/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/mahbubchula/git-github-tutorial/blob/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Git & GitHub Studio',
      logo: {
        alt: 'Mahbub Hassan monogram',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guide',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://github.com/mahbubchula/git-github-tutorial',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorial',
          items: [
            {label: 'Start here', to: '/docs/intro'},
            {label: 'Git Foundations', to: '/docs/category/01--git-foundations'},
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mahbub on LinkedIn',
              href: 'https://www.linkedin.com/in/mahbub-hassan/',
            },
            {
              label: 'Mahbub on GitHub',
              href: 'https://github.com/mahbubchula',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {
              label: 'Civil Engineering · Chulalongkorn University',
              href: 'https://www.ce.eng.chula.ac.th/en/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Mahbub Hassan · Department of Civil Engineering, Faculty of Engineering, Chulalongkorn University`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
