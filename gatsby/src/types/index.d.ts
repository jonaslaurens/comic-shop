import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

interface ISerie {
  title: String;
}

interface IComic {
  id: string;
  _id: string;
  title: string;
  number: number;
  serie: {
    [key: string]: ISerie;
  };
}

export { LayoutProps, IComic, ISerie };
