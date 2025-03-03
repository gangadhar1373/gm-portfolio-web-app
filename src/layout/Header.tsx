import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;
const Nav = styled.nav`
  border: 1px solid black;
  border-radius: 25px;

  ul {
    padding: 0px 25px;
    display: flex;
    list-style: none;
    gap: 1rem;
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    padding: 0.75rem;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Skills</a>
          </li>
          <li>
            <a href='#'>Experience</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};
