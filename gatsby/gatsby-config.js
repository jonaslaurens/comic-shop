import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://jolau.be',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const siteMetadata = {
  title: 'Comic Shop',
  titleTemplate: '%s | Hall of Justice Comicshop',
  siteUrl,
  icon: `/HoJ_logo.png`,
  description:
    'Hall of Justice Comicshop Selling Comics to Everyone. Buy and Sell your comics from and to everyone.',
  twitter: '@jolau',
  author: 'Jonas Laurens',
};

module.exports = {
  siteMetadata,
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECTID,
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './static/HoJ_logo.png',
        name: `Hall of Justice Comicshop`,
        short_name: `HoJ`,
        description: `Hall of Justice Comicshop Selling Comics to Everyone. Buy and Sell your comics from and to everyone.`,
        start_url: `/`,
        background_color: `#5fdd8d`,
        theme_color: `#5fdd8d`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
            sitemap: 'https://hallofjusticecomicshop.be/sitemap.xml',
            host: 'https://hallofjusticecomicshop.be',
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
};
