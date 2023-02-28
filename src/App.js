import { Header } from 'components/Header';
import { Devices } from 'styles/globalStyles';
import React from 'react';
import { Start } from 'Start';
import styled from 'styled-components';

export const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Start />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  margin: 0 auto;
  width: 90%;
  border: 2px blue solid;

  @media ${Devices.tablet} {
    width: 70%;
  }

  @media ${Devices.laptop} {
    width: 50%;
  }

`