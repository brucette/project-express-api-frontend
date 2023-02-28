import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

export const Start = () => {
  const [theData, setTheData] = useState({});
  const numberOfPages = theData.num_of_pages;
  const [currentPage, setCurrentPage] = useState(1);

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
    <section>
      <h2>See all the books in our collection</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author(s)</th>
          </tr>
        </thead>
        {theData.results?.map((item) => (
          <tbody key={item.bookID}>
            <tr>
              <Cell>{item.bookID}</Cell>
              <Cell>{item.title}</Cell>
              <Cell>{item.authors}</Cell>
            </tr>
          </tbody>
        ))}
      </Table>
      <BtnDiv>
        <NavBtn type="button" onClick={prevPage}>Previous</NavBtn>
        <NavBtn type="button" onClick={nextPage}>Next</NavBtn>
      </BtnDiv>
    </section>
  )
}

const Table = styled.table`
  margin: 2rem 0;
`

const Cell = styled.td`
  padding: 1rem 0.5rem;
  border: 1px solid purple;
`

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