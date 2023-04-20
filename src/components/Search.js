import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, Devices } from 'styles/globalStyles';
import { DisplayResults } from './DisplayResults';

export const Search = () => {
  const [typed, setTyped] = useState('');
  const [authorBooks, setAuthorBooks] = useState([]);
  const [singleBook, setSingleBook] = useState({});
  const [submitted, setSumbitted] = useState(false);

  const handleInput = (event) => {
    setTyped(event.target.value)
  }

  const onSearchSubmit = (event) => {
    event.preventDefault()
    if (isNaN(Number(typed))) {
      fetch(`http://localhost:8080/books?author=${typed}`)
        .then((response) => response.json())
        .then((json) => setAuthorBooks(json.booksData))
        .catch((error) => console.error(error))
      setSingleBook({})
      setSumbitted(true)
    } else {
      fetch(`http://localhost:8080/books/${typed}`)
        .then((response) => response.json())
        .then((json) => setSingleBook(json.book))
        .catch((error) => console.error(error))
      setAuthorBooks([])
      setSumbitted(true)
    }
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
      {submitted && (
        <DisplayResults
          multipleResults={authorBooks}
          singleResult={singleBook} />
      )}
    </InnerWrapper>
  )
}

const Form = styled.form`
  width: 80%;

  input {
    width: 80%;
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