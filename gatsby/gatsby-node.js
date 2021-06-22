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
      path: `comics/${serie.slug.current}`,
      component: resolve('./src/templates/Serie.js'),
      context: {
        id: serie.id,
        slug: serie.slug.current,
      },
    });
  });
};

export const createPages = async (params) => {
  await Promise.all([turnSeriesIntoPages(params)]);
};
