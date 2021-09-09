import {FiPrinter as icon} from 'react-icons/fi';


export default {
  name: 'publishers',
  title: 'Publishers',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Publisher name',
      type: 'string',
      description: 'The name of the Publisher',
    },
    {
      name: 'logo',
      title: 'Publisher Logo',
      type: 'image',
      description: 'Logo of the Publisher',
    },
    {
      name: 'logoAlt',
      title: 'Publisher Logo Alt Text',
      type: 'string',
      description: 'Alt text for the logo',
    },
  ],

};
