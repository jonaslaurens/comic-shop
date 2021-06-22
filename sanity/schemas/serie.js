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
      name: 'publisher',
      title: 'Publisher',
      type: 'reference',
      to: [{ type: 'publishers' }],
      validation: Rule => [
        Rule.required().error('Please Enter the Publisher of the Comic. If Publisher does not exist, create it first!')
      ]
    },
  ],

};
