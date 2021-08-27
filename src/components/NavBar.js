import React from 'react';
import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../commons/constants/colors';
import SIZES from '../commons/constants/sizes';
import { ReactComponent as Jupiter } from '../assets/images/jupiter.svg';
import cx from 'classnames';

const Container = styled.div`
  background-color: ${COLORS.navbarColor};
  border-bottom: 2px solid ${COLORS.subtleBorder};
  height: 80px;
`;
const SubContainer = styled.div`
  width: ${SIZES.containerWidth}px;
`;
const Logo = styled(Jupiter)`
  width: 40px;
  height: 40px;
`;
const PageName = styled.p`
  font-family: 'DM Mono';
  font-size: 1.5rem;
  padding: 0.5rem 0;
  font-weight: 700;
`;

const Link = styled(_Link)`
  padding: 1rem 1.25rem;
  font-size: 1.2rem;
  background: ${COLORS.lightBackground};
  font-family: 'DM Mono';
  letter-spacing: -0.05rem;
  color: hsla(0, 0%, 100%, 0.8);
  margin-right: 0.75rem;
  transition: 0.2s;

  &::last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${COLORS.navbarColor};
    background-color: ${COLORS.yellowOrange};
  }
`;

const NavBar = () => {
  const rowVertical = cx('flex', 'items-center');

  return (
    <Container className="w-full fixed top-0 left-0 z-10 flex justify-center">
      <SubContainer className={`${rowVertical} justify-between`}>
        <_Link to="/" className={rowVertical}>
          <Logo className="mr-3" />
          <PageName className="text-white">Jupiter</PageName>
        </_Link>
        <ul className={rowVertical}>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/">Guias</Link>
          </li>
          <li>
            <Link to="/">Proyectos</Link>
          </li>
          <li>
            <Link to="/">Acerca de mí</Link>
          </li>
        </ul>
      </SubContainer>
    </Container>
  );
};

export default NavBar;
