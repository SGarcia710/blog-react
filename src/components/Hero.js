import React from 'react';
import styled from 'styled-components';
import COLORS from '../commons/constants/colors';
import SIZES from '../commons/constants/sizes';

import Avatar from '../assets/images/avatar.jpg';

const Container = styled.section`
  background-color: ${COLORS.lightBackground};
`;

const SubContainer = styled.div`
  width: ${SIZES.containerWidth}px;
`;
const Hello = styled.p`
  font-size: 2.75rem;
  letter-spacing: -0.1rem;
  font-family: 'DM Mono';
  margin-bottom: 32px;
  font-weight: 700;
`;
const InfoContainer = styled.p`
  width: 504px;
`;
const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
`;

const GithubButton = styled.div`
  p {
    font-size: 1.2rem;
    padding: 0.75rem 1rem;
    font-weight: 500;
    line-height: 1.3;
  }
  border: 3px solid ${COLORS.borderColor};
  box-shadow: 5px 5px ${COLORS.borderColor};

  width: fit-content;

  cursor: pointer;

  &:hover {
    border-color: ${COLORS.linkColor};
    box-shadow: 5px 5px ${COLORS.linkColorDarker};
  }
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
  border-radius: ${350 / 2}px;
  object-fit: cover;
  border: 3px solid ${COLORS.borderColor};
`;

const Hero = () => {
  return (
    <Container className="flex py-12 px-0 justify-center">
      <SubContainer className="flex justify-between">
        <InfoContainer>
          <Hello className="mb-8 text-white">Im Jupiter.</Hello>
          <Description className="mb-8">
            I'm a software engineer and writer. This website is my digital
            garden — a compendium of the things I've learned and created over
            the years.
          </Description>

          <GithubButton>
            <p className="text-white">Follow me on Github</p>
          </GithubButton>
        </InfoContainer>
        <Image src={Avatar} />
      </SubContainer>
    </Container>
  );
};

export default Hero;
