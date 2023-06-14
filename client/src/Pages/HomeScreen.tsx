import styled from "styled-components";
import { useEffect, useState } from "react";
import { getTodo } from "../Utils/Api";
import Button from "../Components/Static/Button";

const HomeScreen = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo().then((res: any) => {
      setTodo(res);
    });
  }, []);
console.log(todo)
  return (
    <div>
      <Container>
        <Main>
          <Text>Our Todo Entries</Text>
          <Card>
            <Date>
              <Datetime>Mon</Datetime>
              <Datetime>Tue</Datetime>
              <Datetime>Wed</Datetime>
              <Datetime>Thu</Datetime>
              <Datetime>Fri</Datetime>
              <Datetime>Sat</Datetime>
              <Datetime>Sun</Datetime>
            </Date>
            <Block>
              {todo?.map((el: any) => (
                <Box key={el.id} bg={el.complete ? "1" : ""} />
              ))}
            </Block>
          </Card>
          <InputField>
            <Input
              placeholder="Enter List Here..."
            //   value={todo}
            //   onChange={(e: any) => {
            //     setTodo(e.target.value);
            //   }}
            />
            <Button
              title="Submit"
              clr="white"
              bg="green"
              c="green"
              b="white"
              br="0.5px solid green"
            />
          </InputField>
          <TaskPart>
            <TaskArea>Title</TaskArea>

            <Div>
              <Button
                title="Delete"
                clr="white"
                bg="red"
                c="red"
                b="white"
                br="0.5px solid red"
              />
              <Button
                title="Update"
                clr="white"
                bg="dodgerblue"
                c="dodgerblue"
                b="white"
                br="0.5px solid dodgerblue"
              />
            </Div>
          </TaskPart>
        </Main>
      </Container>
    </div>
  );
};

export default HomeScreen;

const TaskPart = styled.div`
  margin-top: 30px;
  width: 800px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskArea = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
`;

const Div = styled.div`
  display: flex;
`;

const InputField = styled.div`
  margin-top: 50px;
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 288px;
  height: 87%;
  border: 2px solid grey;
  border-radius: 7px;
  padding-left: 5px;

  ::placeholder {
    color: grey;
    font-size: 15px;
  }

  :focus {
    outline: 3px solid green;
    border: transparent;
  }
`;

const Block = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Box = styled.div<{
  bg: string;
}>`
  font-weight: 700;
  font-size: 18px;
  width: 30px;
  height: 30px;
  margin: 5px;
  background-color: ${({ bg }) => (bg ? "lightgreen" : "lightgrey")};
  border: 1px solid silver;
`;

const Date = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Datetime = styled.div`
  font-weight: 700;
  font-size: 18px;
  width: 50px;
  height: 30px;
  margin: 5px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
`;

const Main = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.pre`
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const Card = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid silver;
  border-radius: 7px;
  padding: 5px;
  display: flex;
`;
 