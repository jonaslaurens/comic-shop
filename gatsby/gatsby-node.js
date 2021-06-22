import { resolve } from 'path';

const turnSeriesIntoPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      series: allSanitySerie {
        nodes {
          slug {
            current
          }
          title
          id
        }
      }
    }
  `);

  data.series.nodes.forEach((serie) => {
    actions.createPage({
      path: `series/${serie.slug.current}`,
      component: resolve('./src/templates/Serie.js'),
      context: {
        id: serie.id,
        slug: serie.slug.current,
      },
    });
  });
};

const turnComicsIntoPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      comics: allSanityComic {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.comics.nodes.forEach((comic) => {
    actions.createPage({
      path: `comic/${comic.slug.current}`,
      component: resolve('./src/templates/Comic.js'),
      context: {
        id: comic.id,
        slug: comic.slug.current,
      },
    });
  });
};

export const createPages = async (params) => {
  await Promise.all([turnSeriesIntoPages(params), turnComicsIntoPages(params)]);
};
