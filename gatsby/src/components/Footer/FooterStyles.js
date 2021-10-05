import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  position: relative;

  @media (min-width: 800px) {
    flex-direction: row;
    height: 50px;
  }

  p {
    padding: 5px 0;
    margin: 0 20px;
  }
`;

const GradeLinkStyles = styled.a`
  background-color: var(--red);
  padding: 5px 10px;
  text-decoration-color: var(--white);
  transition: 0.3s;

  &:hover {
    color: var(--white);
    transform: rotate(-3deg);
  }
`;

export { FooterStyles, GradeLinkStyles };
