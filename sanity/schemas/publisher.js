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
    }
  ],

};
