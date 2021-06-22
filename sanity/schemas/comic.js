import {BsBook as icon} from 'react-icons/bi';

export default {
  name: 'comic',
  title: 'Comics',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Comic Title',
      type: 'string',
      description: 'Enter the Title of the Comic',
    },
    {
      name: 'number',
      title: 'Number',
      type: 'number',
      description: 'Comic Number'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.title}-${doc.number}`,
        maxLength: 100,
      },
    },
    {
      name: 'serie',
      title: 'Series',
      type: 'reference',
      to: [{ type: 'serie' }],
    },
    {
      name: 'images',
      title: 'Comic images',
      type: 'array',
      description: 'Drop Comic images here',
      of: [{ type: 'image' }],
    },
    {
      name: 'posted',
      title: 'Posted on',
      type: 'datetime',
    },
  ],
};
