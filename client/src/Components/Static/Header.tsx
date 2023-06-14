import styled from "styled-components";
import { AiOutlineBehance } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo />
          <NavsHolder>
            <Navs to="/">Auth</Navs>
            <Navs to="/todo">Todo</Navs>
          </NavsHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 100%;
`;

const Logo = styled(AiOutlineBehance)`
  font-size: 50px;
`;

const NavsHolder = styled.div`
  display: flex;
  text-transform: uppercase;
  margin: 0 20px;
`;

const Navs = styled(NavLink)`
  margin: 0 20px;
  padding: 5px 5px;
  border-radius: 3px;
  width: 80px;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  :hover {
    background-color: dodgerblue;
    cursor: pointer;
  }

  &.active {
    background-color: dodgerblue;
  }
`;
