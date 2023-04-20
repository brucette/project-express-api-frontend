import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import video from '../assets/video.mp4';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <NavDiv>
        <Selection type="button" onClick={() => navigate('all-books')}>Browse all books</Selection>
        <Selection type="button" onClick={() => navigate('top')}>Top rated books</Selection>
        <Selection type="button" onClick={() => navigate('search')}>Search by id or author</Selection>
      </NavDiv>
      <Video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </Video>
    </HeaderWrapper>
  )
}

const NavDiv = styled.section`
  background-color: #C1A6A3;
  padding: 0.5rem;
`

const HeaderWrapper = styled.section`
  //height: 40vh;
  width: 100vw;
  //margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`

const Video = styled.video`
  width: 100%;
  height: 40vh;
  object-fit: cover;
`

const Selection = styled.button`
  background-color: #C1A6A3; 
  color: #555;
  margin: 0 0.5rem;
  padding: 0.7rem;
  border: none;
  font-size: 1.5rem;

  &:hover {
    color: #8B475F;
    transition: 0.5s background-color ease-in-out;
    cursor: pointer;
  }
`