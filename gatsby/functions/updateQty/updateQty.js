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

exports.handler = async (event, context) => {
  const id = JSON.parse(event.body);

  client
    .patch(id) // Document ID to patch
    .dec({ qty: 1 })
    .commit() // Perform the patch and return a promise
    .then((updatedComic) => {
      console.log('Hurray, the comic is updated! New document:');
      console.log(updatedComic);
    })
    .catch((err) => {
      console.error('Oh no, the update failed: ', err.message);
    });
};
