import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { InnerWrapper } from 'styles/globalStyles';
import styled from 'styled-components/macro';
import { DisplayResults } from './DisplayResults';

export const AllBooks = () => {
  const [theData, setTheData] = useState({});
  console.log(theData)
  const numberOfPages = theData.num_of_pages;
  const [currentPage, setCurrentPage] = useState(1);
  // const navigate = useNavigate();

  const nextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1)
    }
    fetch(`http://localhost:8080/books?page=${currentPage}`)
      .then((response) => response.json())
      .then((json) => setTheData(json.booksData))
      .catch((error) => console.error(error))
  }

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
    fetch(`http://localhost:8080/books?page=${currentPage}`)
      .then((response) => response.json())
      .then((json) => setTheData(json.booksData))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    // fetch('https://project-express-api-eyln4nn5aa-lz.a.run.app/books')
    fetch(`http://localhost:8080/books?page=${currentPage}`)
      .then((response) => response.json())
      .then((json) => setTheData(json.booksData))
      .catch((error) => console.error(error))
  }, []);

  return (
    <InnerWrapper>
      <h2>Browse all the books in our collection</h2>
      <DisplayResults
        multipleResults={theData.results} />
      <BtnDiv>
        <NavBtn type="button" onClick={prevPage}>Previous</NavBtn>
        <NavBtn type="button" onClick={nextPage}>Next</NavBtn>
      </BtnDiv>
    </InnerWrapper>
  )
}

const BtnDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 2rem auto;
  border: 2px red solid;
`

const NavBtn = styled.button`
  width: 45%;
  padding: 0.5rem;
`