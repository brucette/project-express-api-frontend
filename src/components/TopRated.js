import React, { useState } from 'react';
import { InnerWrapper } from 'styles/globalStyles';
import { DisplayResults } from './DisplayResults';

export const TopRated = () => {
  const [topBooks, setTopBooks] = useState([]);

  fetch('http://localhost:8080/books?top=true')
    .then((response) => response.json())
    .then((json) => setTopBooks(json.booksData))
    .catch((error) => console.error(error))

  // const nextPage = () => {
  //   if (currentPage < numberOfPages) {
  //     setCurrentPage(currentPage + 1)
  //   }
  //   fetch(`http://localhost:8080/books?page=${currentPage}`)
  //     .then((response) => response.json())
  //     .then((json) => setTheData(json.booksData))
  //     .catch((error) => console.error(error))
  // }

  // const prevPage = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1)
  //   }
  //   fetch(`http://localhost:8080/books?page=${currentPage}`)
  //     .then((response) => response.json())
  //     .then((json) => setTheData(json.booksData))
  //     .catch((error) => console.error(error))
  // }

  return (
    <InnerWrapper>
      <h2>Top rated</h2>

      <DisplayResults
        multipleResults={topBooks} />
      {/* <BtnDiv>
        <NavBtn type="button" onClick={prevPage}>Previous</NavBtn>
        <NavBtn type="button" onClick={nextPage}>Next</NavBtn>
      </BtnDiv> */}
    </InnerWrapper>
  )
}

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