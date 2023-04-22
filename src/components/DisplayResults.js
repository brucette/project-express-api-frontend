import React from 'react';
import styled from 'styled-components/macro';

export const DisplayResults = ({ multipleResults, singleResult }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author(s)</th>
        </tr>
      </thead>
      {multipleResults?.length > 0 && (
        multipleResults.map((item) => (
          <tbody key={item.bookID}>
            <Row>
              <IdCell>{item.bookID}</IdCell>
              <Cell>{item.title}</Cell>
              <Cell>{item.authors}</Cell>
            </Row>
          </tbody>
        )))}
      {singleResult !== undefined && singleResult !== null ? (Object.keys(singleResult).length > 0) ? (
        <tbody key={singleResult.bookID}>
          <Row>
            <IdCell>{singleResult.bookID}</IdCell>
            <Cell>{singleResult.title}</Cell>
            <Cell>{singleResult.authors}</Cell>
          </Row>
        </tbody>
      ) : <tbody /> : <tbody />}
    </Table>
  )
}

const Table = styled.table`
  margin: 2rem 0;
`

const Row = styled.tr`
  width: 100%;
`

const Cell = styled.td`
  padding: 1rem 0.5rem;
  background-color: #b1c4bb;
  border-radius: 3px;
`

const IdCell = styled(Cell)`
  text-align: center;
`