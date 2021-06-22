import {ImBooks as icon} from 'react-icons/im';


export default {
  name: 'serie',
  title: 'Series',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Serie Title',
      type: 'string',
      description: 'Enter the Title of the Serie',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Series Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],

};
