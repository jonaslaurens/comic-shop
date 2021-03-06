/* eslint-disable import/no-unresolved */
import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container/Container';
import SEO from '../components/SEO';
import { useComicStore } from '../store/globalState';

const SearchStyles = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 280px);

  @media (min-width: 762px) {
    min-height: calc(100vh - 66px - 80px);
  }
`;

const SearchPage = ({ location }) => {
  const series = useComicStore((state) => state.series);
  const [searchValue, setSearchValue] = useState('');

  const [foundComics, setFoundComics] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value.toLowerCase());

    if (event.target.value === '') {
      return setFoundComics([]);
    }

    const result = series.filter((serie) => {
      if (
        serie.title.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return serie;
      }
    });

    setFoundComics(result);
  };

  return (
    <Container>
      <SEO title="Search" location={location} description="" image="" />
      <SearchStyles>
        <h1>Search</h1>
        <input
          value={searchValue}
          onChange={(e) => handleSearch(e)}
          type="text"
        />
        {searchValue === '' ? (
          <p>Enter a Series in the Searchbox</p>
        ) : (
          [
            foundComics.length > 0 ? (
              foundComics.map((serie) => (
                <Link key={serie.title} to={`/series/${serie.slug.current}`}>
                  {serie.title}
                </Link>
              ))
            ) : (
              <p>Serie Not Found</p>
            ),
          ]
        )}
      </SearchStyles>
    </Container>
  );
};
export default SearchPage;
