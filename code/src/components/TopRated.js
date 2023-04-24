import React, { useState } from 'react';
import { InnerWrapper } from 'styles/globalStyles';
import { API_URL } from 'utils/utils';
import { DisplayResults } from './DisplayResults';

export const TopRated = () => {
  const [topBooks, setTopBooks] = useState([]);

  fetch(API_URL('books?top=true'))
    .then((response) => response.json())
    .then((json) => setTopBooks(json.body.booksData))
    .catch((error) => console.error(error))

  return (
    <InnerWrapper>
      <h2>Top rated</h2>
      <h3>All books with a minimum rating of 4.6</h3>

      <DisplayResults
        multipleResults={topBooks} />
    </InnerWrapper>
  )
}