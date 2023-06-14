import React from "react";
import styled from "styled-components";

interface iBtn {
  clr?: string;
  title?: string;
  c?: string;
  b?: string;
  bg?: string;
  br?: string;
}

const Button: React.FC<iBtn> = ({ clr, title, bg, b, c, br }) => {
  return (
    <div>
      <Container clr={`${clr}`} bg={`${bg}`} b={`${b}`} c={`${c}`} br={`${br}`}>
        <Main>{title}</Main>
      </Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{
  clr: string;
  bg: string;
  b: string;
  c: string;
  br: string;
}>`
  margin: 0 10px;
  width: 200px;
  height: 50px;
  color: ${({ clr }) => clr};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  border-radius: 7px;
  transition: all 350ms;
  cursor: pointer;
  background-color: ${({ bg }) => bg};

  :hover {
    color: ${({ c }) => c};
    background-color: ${({ b }) => b};
    border: ${({ br }) => br};
  }
`;

const Main = styled.div``;
