import { useState } from 'react';
import { toast } from 'react-toastify';

const useContact = ({ values, resetValues }) => {
  const [loading, setLoading] = useState(false);

  const submitContact = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      name: values.name,
      email: values.email,
      message: values.message,
      siroop: values.siroop,
    };

    // send data to server
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/formSubmit`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    // parse the result
    const text = await res.json();

    if (res.status >= 400 && res.status < 600) {
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
    }
  };

  return {
    loading,
    submitContact,
  };
};

export default useContact;
