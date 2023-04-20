import React, { useState } from 'react';
import { InnerWrapper } from 'styles/globalStyles';
import { DisplayResults } from './DisplayResults';

export const TopRated = () => {
  const [topBooks, setTopBooks] = useState([]);
  console.log('topBooks', topBooks)
  fetch('http://localhost:8080/books?top=true')
    .then((response) => response.json())
    .then((json) => setTopBooks(json.booksData))
    .catch((error) => console.error(error))

  return (
    <InnerWrapper>
      <h2>Top rated</h2>
      <h3>All books with a minimum rating of 4.5</h3>

      <DisplayResults
        multipleResults={topBooks} />

    </InnerWrapper>
  )
}

