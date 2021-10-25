import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  position: relative;
  font-size: 1.2em;

  @media (min-width: 500px) {
    flex-direction: row;
    height: 50px;
  }

  a {
    padding: 10px 0;
    margin: 0 20px;
  }
`;

const GradeLinkStyles = styled.a`
  transition: 0.3s;
  font-size: 1em;

  span {
    font-family: inherit;
    color: var(--red);
    padding: 5px 20px;
    text-decoration-color: var(--black);

    &:hover {
      color: var(--black);
      text-decoration-color: var(--red);
    }
  }

  &:hover {
    color: var(--black);
    transform: rotate(-3deg);
  }
`;

export { FooterStyles, GradeLinkStyles };
