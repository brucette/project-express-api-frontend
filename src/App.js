import { Header } from 'components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Start } from 'components/Start';
import { AllBooks } from 'components/AllBooks';
import { Search } from 'components/Search';
import { TopRated } from 'components/TopRated';
import styled from 'styled-components';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/all-books" element={<AllBooks />} />
          <Route path="/search" element={<Search />} />
          <Route path="/top" element={<TopRated />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

const Wrapper = styled.section`
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #9EB6AA;
  display: flex;
  min-height: 60vh;
`