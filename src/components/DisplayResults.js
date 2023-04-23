import React from 'react';
import styled from 'styled-components/macro';

export const DisplayResults = ({ multipleResults, singleResult }) => {
  return (
    <ResultTable>
      <Row>
        <IdHeader>ID</IdHeader>
        <TitleHeader>Title</TitleHeader>
        <AuthorHeader>Author(s)</AuthorHeader>
      </Row>
      {multipleResults?.length > 0 && (
        multipleResults.map((item) => (
          <Row key={item.bookID}>
            <Id>{item.bookID}</Id>
            <Title>{item.title}</Title>
            <Author>{item.authors}</Author>
          </Row>
        ))
      )}
      {(singleResult !== undefined && singleResult !== null) ? (
        <Row>
          <Id>{singleResult.bookID}</Id>
          <Title>{singleResult.title}</Title>
          <Author>{singleResult.authors}</Author>
        </Row>
      ) : <div />}
    </ResultTable>
  )
}

const ResultTable = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  margin: 0.1rem 0; 
`

const IdHeader = styled.div`
  width: 17%;
  /* min-width: 17%;
  max-width: 17%; */
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
`

const TitleHeader = styled(IdHeader)`
  width: 50%;
  /* min-width: 50%;
  max-width: 50%; */
`

const AuthorHeader = styled(IdHeader)`
  width: 33%;
  /* min-width: 33%;
  max-width: 33%; */
`

const Id = styled.div`
  width: 17%;
  /* min-width: 17%;
  max-width: 17%;  */
  background-color: #b1c4bb;
  padding: 0.8rem 0.5rem;
  margin: 0 0.1rem;
  border-radius: 3px;
  text-align: center;
`

const Title = styled(Id)`
  width: 50%;
  /* min-width: 50%;
  max-width: 50%;  */
  text-align: left;
  //word-wrap: break-word;
  overflow-wrap: anywhere;
`

const Author = styled(Id)`
  width: 33%;
  /* min-width: 33%;
  max-width: 33%; */
`