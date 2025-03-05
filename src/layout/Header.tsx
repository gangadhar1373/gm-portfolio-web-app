import styled from 'styled-components';
import { NavLink } from 'react-router';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5px;
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;
const Nav = styled.nav`
  border: 1px solid black;
  border-radius: 25px;
  background: rgb(228, 238, 245);
  ul {
    padding: 0px 25px;
    display: flex;
    list-style: none;
    gap: 1rem;
  }
  li {
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      padding: 0.75rem;
      &:hover {
        background: rgb(246, 181, 199);
        border-radius: 25px;
      }
    }
    a.active {
      background: rgb(246, 181, 199);
      border-radius: 25px;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/skills'>Skills</NavLink>
          </li>
          <li>
            <NavLink to='/experience'>Experience</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};
