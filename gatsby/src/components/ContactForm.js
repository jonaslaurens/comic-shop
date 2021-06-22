import React from 'react';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';
import useContact from '../utils/useContact';
import useForm from '../utils/useForm';

const FormStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
    &.order,
    &.menu {
      grid-column: span 1;
      .sizes {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 5px;
        button {
          margin: 0;
        }
      }
    }
    label {
      input,
      textarea {
        width: 100%;
        padding: 8px 5px;
      }
    }
  }

  .siroop {
    display: none;
  }

  @media (max-width: 935px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }

  @media (max-width: 500px) {
    .sizes {
      flex-direction: column;
    }
  }
`;

const ContactForm = () => {
  const { values, updateValues, resetValues } = useForm({
    name: '',
    email: '',
    message: '',
    siroop: '',
  });

  const { submitContact, loading } = useContact({ values, resetValues });

  return (
    <FormStyles onSubmit={submitContact}>
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
      <fieldset disabled={loading}>
        <button type="submit" disabled={loading}>
          <FaPaperPlane />
          &nbsp;{loading ? 'Submitting...' : 'Submit'}
        </button>
      </fieldset>
    </FormStyles>
  );
};

export default ContactForm;
