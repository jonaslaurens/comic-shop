const sanityClient = require('@sanity/client');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

// setup sanity client connection
const client = sanityClient({
  projectId: process.env.SANITY_PROJECTID,
  dataset: 'production',
  apiVersion: '2021-06-29', // use current UTC date - see "specifying API version"!
  token: process.env.NETLIFY_SANITY_TOKEN,
  useCdn: false,
});

exports.handler = async (event) => {
  const items = JSON.parse(event.body);

  const status = false;

  items.forEach((item) => {
    client
      .patch(item._id) // Document ID to patch
      .dec({ qty: 1 })
      .commit() // Perform the patch and return a promise
      .then((updatedComic) => {
        console.log('update success');
      })
      .catch((err) => {
        console.error('The update failed: ', err.message);
      });
  });

  if (status) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: 'Success',
      }),
    };
  }
  return {
    statusCode: 400,
    body: JSON.stringify({
      msg: 'Update failed',
    }),
  };
};
