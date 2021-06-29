import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #a51818;
    --black: #2E2E2E;
    --yellow: #dddf3b;
    --white: #fff;
    --grey: #efefef;
  }

  html {
    background-color: var(--white);
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    margin: 0;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 1rem 2rem;
    border-radius: 2px;
    margin: 30px 0px;
    cursor: pointer;
    font-family: 'Bangers';
    font-size: 1.2em;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;

    &:hover {
      transform: rotate(3deg);
    }
  }

  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } */

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
     width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--white);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }


  hr {
    border: 0;
    height: 3px;
    background-color: var(--black);
    opacity: .2;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    position: relative;
    display: inline-block;
    --rotate: -3deg;
    transform: rotate(var(--rotate));
    order: 1;
    transition: 0.3s;
    font-size: inherit;

    &::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: var(--yellow);
      transform: skew(-12deg)  rotate(6deg);
      z-index: -1;
    }

    &:hover {
      --rotate: 6deg;
    }
  }

`;

export default GlobalStyles;
