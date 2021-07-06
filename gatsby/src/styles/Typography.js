import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html, span, p, a, li, input, textare, strong {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-weight: 300;
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

  p {
    padding-left: 0;
    padding-right: 0;
  }

  strong {
    font-weight: bold;
  }

  p, li {
    letter-spacing: 0.5px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bangers';
    color: var(--black);
    font-weight: normal;
    margin: 0;
  }


  h1 {
    font-size: 4rem;
    text-align: center;
    margin: .5em;

    @media (min-width: 440px) {
      font-size: 5rem;
    }

    @media (min-width: 860px) {
      font-size: 8rem;
    }

    @media (min-width: 920px) {
      font-size: 10rem;
    }
  }


  h2 {
    font-size: 4rem;
    padding: 30px 0 40px 0;
    text-align: center;

    @media (min-width: 440px) {
      font-size: 4.5rem;
    }

    @media (min-width: 920px) {
      font-size: 5rem;
    }
  }


  h3 {
    font-size: 2.8rem;
    padding: 20px 0 15px 0;
    display: inline-block;

    @media (min-width: 440px) {
      font-size: 3rem;
    }

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

  p, a, li, strong, span {
    font-size: 1.8em;
    margin: 0;
    line-height: 4.4rem;

    @media (min-width: 440px) {
      font-size: 1.5em;
    }
  }




`;

export default Typography;
