import { useState } from 'react';
import { toast } from 'react-toastify';
import { createOrder } from './createOrder';

const useContact = ({ values, resetValues, resetCart }) => {
  const [loading, setLoading] = useState(false);

  const submitContact = async (cart) => {
    setLoading(true);

    // created data object
    const orderedComics = await createOrder(cart);

    const body = {
      name: values.name,
      email: values.email,
      message: values.message,
      siroop: values.siroop,
      order: orderedComics,
    };

    // TODO: when an order is beign made update the availibility value on the backend

    // update comics quantity on server
    const responseQtyMutation = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/updateQty`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      }
    );

    // send data to server
    const resonseFormSubmit = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/formSubmit`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    // parse form result
    const text = await resonseFormSubmit.json();

    if (resonseFormSubmit.status >= 400 && resonseFormSubmit.status < 600) {
      setLoading(false);
      toast.error(text.msg, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setLoading(false);
      toast.success(`I'll get back to you ASAP!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      resetValues({ name: '', email: '', message: '', siroop: '' });
      resetCart();
    }
  };

  return {
    loading,
    submitContact,
  };
};

export default useContact;
