import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import useContact from '../../utils/useContact';
import useForm from '../../utils/useForm';
import { useComicStore } from '../../store/globalState';
import { FormStyles } from './ContactFormStyles';

const ContactForm = () => {
  const { values, updateValues, resetValues } = useForm({
    name: '',
    email: '',
    message: '',
    siroop: '',
  });

  const { cart, resetCart } = useComicStore((state) => state);

  const { submitContact, loading } = useContact({
    values,
    resetValues,
    resetCart,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitContact(cart);
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <fieldset disabled={loading}>
        <legend>Your Info</legend>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={updateValues}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={updateValues}
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            name="message"
            id="message"
            value={values.message}
            onChange={updateValues}
          />
        </label>
        <input
          type="siroop"
          name="siroop"
          id="siroop"
          className="siroop"
          value={values.siroop}
          onChange={updateValues}
        />
      </fieldset>
      <div className="sendit">
        <button type="submit" disabled={loading}>
          <FaPaperPlane />
          &nbsp;{loading ? 'Placing Order...' : 'Order Ahead'}
        </button>
      </div>
    </FormStyles>
  );
};

export default ContactForm;
