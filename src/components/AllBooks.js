import React, { useState, useEffect } from 'react';
import { InnerWrapper, Button, Devices } from 'styles/globalStyles';
import styled from 'styled-components/macro';
import { API_URL } from 'utils/utils';
import { DisplayResults } from './DisplayResults';

export const AllBooks = () => {
  const [theData, setTheData] = useState({});
  const numberOfPages = theData.num_of_pages;
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = (page) => {
    fetch(API_URL(`books?page=${page}`))
      .then((response) => response.json())
      .then((json) => setTheData(json.body.booksData))
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