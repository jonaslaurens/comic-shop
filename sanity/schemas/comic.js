import {BsBook as icon} from 'react-icons/bi';
import PriceInput from '../components/PriceInput';

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
      description: 'Comic Number',
      validation: Rule => [
        Rule.required().error('Please Enter the Number of the Comic')
      ]
    },

    {
      name: 'serie',
      title: 'Series',
      type: 'reference',
      to: [{ type: 'serie' }],
      validation: Rule => [
        Rule.required().error('Please Enter the Serie of the Comic. If Serie does not exist, create it first!')
      ]
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
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cent',
      validation: (Rule) => Rule.min(100).max(500000),
      inputComponent: PriceInput,
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
     {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.title}-${doc.number}-${doc.posted}`,
        maxLength: 100,
      },
    },
  ],
};
