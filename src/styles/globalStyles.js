import styled from 'styled-components/macro';

const sizes = {
  tablet: '668px',
  laptop: '1024px',
  desktop: '2560px'
};

export const Devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`
};

export const InnerWrapper = styled.section`
  margin: 2rem auto;
  width: 90%;
  background-color: #9EB6AA;
  color: #444;
  display: flex;
  flex-direction: column;

  @media ${Devices.tablet} {
    width: 70%;
  }

  @media ${Devices.laptop} {
    width: 50%;
  }
`
