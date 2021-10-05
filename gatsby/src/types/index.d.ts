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
  available: boolean;
}

interface ComicStoreState {
  comics: IComic[];
  cart: IComic[];
  series: ISerie[];
  getComic: (id: string) => void;
  addComicToCart: (id: string) => void;
  removeComicFromCart: (id: string) => void;
  resetCart: () => void;
}

export { LayoutProps, IComic, ISerie, ComicStoreState };
