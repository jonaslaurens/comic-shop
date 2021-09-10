import { graphql, useStaticQuery } from 'gatsby';
import React, { createContext, useState, FC, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useComicStore } from './globalState';

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

type ContextType = {
  cart: IComic[];
  addComic: (comic: IComic) => void;
  removeItem: (id: string) => void;
};

const contextDefaultValues: ContextType = {
  cart: [],
  addComic: () => {},
  removeItem: () => {},
};

export const CartContext = createContext<ContextType>(contextDefaultValues);

export const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState<IComic[]>(contextDefaultValues.cart);

  const data = useStaticQuery(graphql`
    query {
      comics: allSanityComic(
        sort: {
          order: [ASC, ASC, ASC]
          fields: [serie___publisher___name, serie___title, number]
        }
      ) {
        nodes {
          id
          images {
            asset {
              gatsbyImageData
            }
          }
          number
          serie {
            publisher {
              id
              name
              logoAlt
              logo {
                asset {
                  gatsbyImageData
                }
              }
            }
            id
            title
          }
          _id
          price
          title
          posted(fromNow: true)
          available
        }
      }
    }
  `);

  const { initComics } = useComicStore((state) => state);

  useEffect(() => {
    initComics(data.comics.nodes);
  }, []);

  const addComic = async (item: IComic) => {
    // add comic to cart
    setCart((oldCart) => [...oldCart, item]);

    toast.success(
      `
        ${item.serie.title} #${item.number}
        ${item.title}
        has been added to your cart
      `,
      {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      }
    );
  };

  const removeItem = (comicId: string) => {
    // find index
    const index = cart.findIndex((comic) => comic.id === comicId);
    // remove index from cart
    setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  };

  return (
    <CartContext.Provider value={{ cart, addComic, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
