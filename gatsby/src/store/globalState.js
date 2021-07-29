import { toast } from 'react-toastify';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useComicStore = create(
  devtools((set, get) => ({
    comics: [],
    cart: [],
    initComics: (DBComics) =>
      set((state) => {
        state.comics = DBComics;
      }),

    // add item to cart and update qty
    addComicToCart: (id) =>
      set((state) => {
        // copy the original arrays
        const prevCart = [...state.cart];

        // copy comics
        const prevComics = [...state.comics];

        const comic = state.getComic(id)[0];

        // get the item index
        const index = state.comics.findIndex((item) => item.id === id);

        if (!comic.available) {
          toast.error(`This comic is no longer available`, {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
          });
          return;
        }

        // set availability to false
        prevComics[index].available = false;

        // add comic to cart
        prevCart.push(comic);

        // launch toast if all went well
        toast.success(
          `
        ${comic.serie.title} #${comic.number}
        ${comic.title}
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

        // set cart to updated cart
        return { cart: prevCart, comics: prevComics };
      }),
    // remove item from cart and update qty
    removeComicFromCart: (id) =>
      set((state) => {
        // copy the original arrays
        const prevCart = [...state.cart];
        const prevComics = [...state.comics];

        const comic = state.getComic(id)[0];

        // get the item index
        const comicIndex = state.comics.findIndex((item) => item.id === id);

        // set availability to false
        prevComics[comicIndex].available = true;

        // add comic to cart
        const filteredCart = prevCart.filter((currentComic) => {
          if (currentComic.id !== id) {
            return currentComic;
          }
        });

        // launch toast if all went well
        toast.success(
          `
        ${comic.serie.title} #${comic.number}
        ${comic.title}
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

        // set cart to updated cart
        return { cart: filteredCart, comics: prevComics };
      }),
    getComic: (id) => get(id).comics.filter((item) => item.id === id),
  }))
);
