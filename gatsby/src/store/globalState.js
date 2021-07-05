import { toast } from 'react-toastify';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useComicStore = create(
  devtools((set) => ({
    comics: [],
    cart: [],
    initComics: (DBComics) =>
      set((state) => {
        state.comics = DBComics;
      }),

    // add item to cart and update qty
    addComicToCart: (comic) =>
      set((state) => {
        // create comic to add
        const comicToAdd = { ...comic, qty: 1 };

        const prevCart = [...state.cart];

        console.log(prevCart);
        // check if comic already is in cart
        if (prevCart.length === 0) {
          state.cart = [...state.cart, comicToAdd];
        } else if (
          prevCart.find((foundComic) => foundComic.id === comicToAdd.id)
        ) {
          // update qty of current item
        }

        // if comic exists update qty

        // add to cart

        // launch toast if all went well
        toast.success(
          `
        ${comicToAdd.serie.title} #${comicToAdd.number}
        ${comicToAdd.title}
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
      }),
    // remove item from cart and update qty

    // update qty
  }))
);
