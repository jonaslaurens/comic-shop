import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html, span, p, a, li, input, textare, strong {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-weight: 300;
  }

  p > strong {
    font-size: 1em;
  }

  a {
    font-family: 'Bangers';
    text-decoration: underline;
    color: var(--black);
    display: inline-block;
    transition: all .3s ease-in;
    font-weight: 400;
    text-decoration-color: var(--red);

    &:hover {
      color: var(--red);
    }
  }

  strong {
    font-weight: bold;
  }

  p, li {
    letter-spacing: 0.5px;
  }

  p, a, li, span, strong {
    font-size: 1.8em;
    margin: 0;
    line-height: 1.8em;
  }

  small {
    font-size: 1.5em;
  }

  strong {
    font-size: 1.8em;
  }

  button {
    font-size: 1.8em;;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bangers';
    color: var(--black);
    font-weight: normal;
    margin: 0;
  }


  h1 {
    font-size: 4em;
    text-align: center;
    margin: .5em;

    @media (min-width: 440px) {
      font-size: 6em;
    }

    @media (min-width: 920px) {
      font-size: 10em;
    }
  }


  h2 {
    font-size: 4em;
    padding: 30px 0 40px 0;
    text-align: center;

    @media (min-width: 440px) {
      font-size: 4.5em;
    }

    @media (min-width: 920px) {
      font-size: 5em;
    }
  }


  h3 {
    font-size: 2em;
    padding: 20px 0 15px 0;
    display: inline-block;

  }

  h4 {
    font-size: 1.8rem;
    padding: 15px 30px;

    @media (min-width: 440px) {
      font-size: 2rem;
    }
  }

  h5 {
    font-size: 1.8rem;
    padding: 15px 30px;

    @media (min-width: 440px) {
      font-size: 2rem;
    }
  }

  .variant-h3 {
    font-size: 2.8rem;
    padding: 20px 0 15px 0;
    display: inline-block;
    color: var(--black);

    @media (min-width: 440px) {
      font-size: 3rem;
    }
  }






`;

export default Typography;
