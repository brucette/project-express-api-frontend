import React from 'react';
import styled from 'styled-components/macro';
import video from '../assets/video.mp4';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Video autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
        <source src={video} type="video/mp4" />
      </Video>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.section`
  height: 30vh;
  width: 100vw;
  margin-bottom: 2rem;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`