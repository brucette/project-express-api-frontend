import React, { useState, useEffect } from 'react';
import { InnerWrapper, Button, Devices } from 'styles/globalStyles';
import styled from 'styled-components/macro';
import { DisplayResults } from './DisplayResults';

export const AllBooks = () => {
  const [theData, setTheData] = useState({});
  console.log('theData', theData)
  const numberOfPages = theData.num_of_pages;
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = (page) => {
    // https://project-express-api-eyln4nn5aa-lz.a.run.app/
    fetch(`http://localhost:8080/books?page=${page}`)
      .then((response) => response.json())
      .then((json) => setTheData(json.booksData))
      .catch((error) => console.error(error))
  }

  const nextPage = () => {
    if (currentPage < numberOfPages) {
      fetchData(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      fetchData(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  }

  useEffect(() => {
    fetchData(currentPage)
  }, []);

  return (
    <InnerWrapper>
      <h2>Browse all the books in our collection</h2>

      <DisplayResults
        multipleResults={theData.results} />

      <BtnDiv>
        <Button type="button" onClick={prevPage}>Previous</Button>
        <Button type="button" onClick={nextPage}>Next</Button>
      </BtnDiv>
    </InnerWrapper>
  )
}

const BtnDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin: 2rem auto;

  @media ${Devices.laptop} {
    width: 50%;
  }
`