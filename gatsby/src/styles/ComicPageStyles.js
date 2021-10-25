import styled from 'styled-components';

const SingleComicPageStyles = styled.main`
  width: 100%;
  display: grid;

  grid-template-columns: 1fr;

  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageStyles = styled.div`
  padding: 38px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 400px !important;
  }
`;

const ComicInfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 38px 0;

  .pricetag {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h2,
  p {
    text-align: left;
  }

  h2 {
    padding-bottom: 5px;
  }

  button {
    margin-top: 20px;
  }
`;

export { ComicInfoStyles, ImageStyles, SingleComicPageStyles };
