import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, Devices } from 'styles/globalStyles';
import { DisplayResults } from './DisplayResults';

export const Search = () => {
  const [typed, setTyped] = useState('');
  const [authorBooks, setAuthorBooks] = useState([]);
  const [singleBook, setSingleBook] = useState({});

  const handleInput = (event) => {
    setTyped(event.target.value);
  }

  const onSearchSubmit = (event) => {
    event.preventDefault();
    setSingleBook({});
    setAuthorBooks([]);
    // import { API_URL } from 'utils/utils';
    // fetch(API_URL(`books?author=${typed}`))
    if (isNaN(Number(typed))) {
      fetch(`http://localhost:8080/books?author=${typed}`)
        .then((response) => response.json())
        .then((json) => setAuthorBooks(json))
        .catch((error) => console.error(error))
    } else {
      // fetch(API_URL(`books/${typed}`))
      fetch(`http://localhost:8080/books/${typed}`)
        .then((response) => response.json())
        .then((json) => setSingleBook(json))
        .catch((error) => console.error(error))
    }
    setTyped('')
  }

  return (
    <InnerWrapper>
      <h2>Search</h2>
      <Form onSubmit={onSearchSubmit}>
        <input
          value={typed}
          onChange={handleInput}
          placeholder="enter author name or book id" />
        <button type="submit">search</button>
      </Form>

      {authorBooks.success && (
        <DisplayResults
          multipleResults={authorBooks.body.booksData}
          singleResult={singleBook} />
      )}
      {!authorBooks.success && (
        <NoResults>{authorBooks.message}</NoResults>
      )}
      {singleBook.success && (
        <DisplayResults
          multipleResults={authorBooks}
          singleResult={singleBook.body.book} />
      )}
      {!singleBook.success && (
        <NoResults>{singleBook.message}</NoResults>
      )}
    </InnerWrapper>
  )
}

const Form = styled.form`
  width: 80%;

  input {
    width: 80%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.8rem;
    background-color: whitesmoke;
    border: none;
  }

  input:focus {
    outline: 2px solid #C1A6A3;
  }

  button {
    width: 25%;
    margin-right: 1rem;
    font-size: 1rem;
    padding: 0.7rem;
    background-color: #C1A6A3;
    border: 1px solid #555;
    color: whitesmoke;
    border-radius: 3px;
  }

  @media ${Devices.laptop} {
    width: 60%;

    input {
      width: 70%;
      margin-right: 1rem;
    }

    button {
      width: 15%;
      cursor: pointer;
    }
  }`

const NoResults = styled.div`
  margin: 2rem 0;
`
