const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gloo',
  tagline: ' A modular toolkit for building fast, reliable Web applications and libraries with Rust and Wasm ',
  url: 'https://gloo-rs.web.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rustwasm',
  projectName: 'gloo',
  themeConfig: {
    navbar: {
      title: 'Gloo',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'left',
          label: 'Crates',
          items: [
            {
              label: 'Console',
              href: '/docs/console'
            },
            {
              label: 'Dialog',
              href: '/docs/dialog'
            },
            {
              label: 'Events',
              href: '/docs/event'
            },
            {
              label: 'File',
              href: '/docs/file'
            },
            {
              label: 'Storage',
              href: '/docs/storage'
            },
            {
              label: 'Timer',
              href: '/docs/timer'
            },
          ]
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://docs.rs/gloo',
          label: 'docs.rs',
          position: 'right',
        },
        {
          href: 'https://github.com/rustwasm/gloo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/DFgBACbDVG', // #gloo in Yew server
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rustwasm/gloo',
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['rust', 'toml'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/rustwasm/gloo/blob/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/rustwasm/gloo/blob/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
