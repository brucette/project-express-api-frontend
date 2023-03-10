import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper } from 'styles/globalStyles';
import { DisplayResults } from './DisplayResults';

export const Search = () => {
  const [typed, setTyped] = useState('');
  console.log('typed', typed.isNaN)
  const [authorBooks, setAuthorBooks] = useState([]);
  const [singleBook, setSingleBook] = useState({});

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
    } else {
      fetch(`http://localhost:8080/books/${typed}`)
        .then((response) => response.json())
        .then((json) => setSingleBook(json.book))
        .catch((error) => console.error(error))
      setAuthorBooks([])
    }
  }
  return (
    <InnerWrapper>
      <h2>Search</h2>

      <Form onSubmit={onSearchSubmit}>
        <input value={typed} onChange={handleInput} />
        <button type="submit">search</button>
      </Form>

      <DisplayResults
        multipleResults={authorBooks}
        singleResult={singleBook} />
      {/* <BtnDiv> */}
      {/* <NavBtn type="button" onClick={prevPage}>Previous</NavBtn>
        <NavBtn type="button" onClick={nextPage}>Next</NavBtn> */}
      {/* </BtnDiv> */}
    </InnerWrapper>
  )
}

const Form = styled.form`
  width: 60%;

  input {
    width: 70%;
    margin-right: 1rem;
    padding: 0.8rem;
    background-color: whitesmoke;
    border: none;
  }

  input:focus {
    outline: 2px solid #C1A6A3;
  }

  button {
    width: 15%;
    margin-right: 1rem;
    padding: 0.8rem;
    background-color: #C1A6A3;
    border: 1px solid #555;
    color: whitesmoke;
  }
`
// const BtnDiv = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: space-around;
//   margin: 2rem auto;
//   border: 2px red solid;
// `

// const NavBtn = styled.button`
//   width: 45%;
//   padding: 0.5rem;
// `