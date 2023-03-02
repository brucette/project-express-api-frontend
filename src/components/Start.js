import React from 'react'; // , { useState, useEffect }
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Start = () => {
  // const navigate = useNavigate();

  return (
    <ChoiceDiv>
      {/* <Selection type="button" onClick={() =>navigate('all-books')}>Browse all books</Selection>
      <Selection type="button">See top rated books</Selection>
      <Selection type="button">Seearch by id or author</Selection> */}
    </ChoiceDiv>
  )
}

const ChoiceDiv = styled.section`
  /* display: flex;
  flex-direction: column; */
`

// const Selection = styled.button`
//   background-color: #C1A6A3; //#8B475F;
//   color: #8B475F;
//   margin: 2.5rem;
//   padding: 1rem;
//   border: none;
// `