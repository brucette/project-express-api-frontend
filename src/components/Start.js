import React from 'react'; // , { useState, useEffect }
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Start = () => {
  // const navigate = useNavigate();

  return (
    <ChoiceDiv>
      <h2>Select one option in the navigation menu to view available books</h2>
    </ChoiceDiv>
  )
}

const ChoiceDiv = styled.section`
  /* display: flex;
  flex-direction: column; */
  border: 2px red solid;
  height: 50vh;
`

// const Selection = styled.button`
//   background-color: #C1A6A3; //#8B475F;
//   color: #8B475F;
//   margin: 2.5rem;
//   padding: 1rem;
//   border: none;
// `