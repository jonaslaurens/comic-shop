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
      component: resolve('./src/templates/Serie.tsx'),
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
      component: resolve('./src/templates/Comic.tsx'),
      context: {
        id: comic.id,
        slug: comic.slug.current,
      },
    });
  });
};

const turnPublishersIntoPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      publishers: allSanityPublishers {
        nodes {
          id
          name
        }
      }
    }
  `);

  data.publishers.nodes.forEach((publisher) => {
    actions.createPage({
      path: `publisher/${publisher.name}`,
      component: resolve('./src/templates/Publisher.tsx'),
      context: {
        id: publisher.id,
      },
    });
  });
};

export const createPages = async (params) => {
  await Promise.all([
    turnSeriesIntoPages(params),
    turnComicsIntoPages(params),
    turnPublishersIntoPages(params),
  ]);
};
