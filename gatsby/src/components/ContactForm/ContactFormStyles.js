import styled from 'styled-components';

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
    font-size: 1em;
    position: relative;
    margin: 0;

    label,
    fieldset,
    input,
    legend {
      font-size: 1.8em;
    }

    label {
      input,
      textarea {
        width: 98%;
        padding: 8px 5px;
        border: 1px solid var(--grey);
        font-size: 1em;
      }

      textarea {
        resize: none;
      }
    }
  }

  .sendit {
    width: 100%;
  }

  button {
    width: 100%;
    display: block;
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

export { FormStyles };
