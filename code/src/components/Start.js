import React from 'react';
import styled from 'styled-components';

export const Start = () => {
  return (
    <ChoiceDiv>
      <Direction>
        Select one option in the navigation menu to view books in our collection.
      </Direction>
    </ChoiceDiv>
  )
}

const ChoiceDiv = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: #555;
  text-align: center;
`

const Direction = styled.h2`
  margin: 3rem;
`