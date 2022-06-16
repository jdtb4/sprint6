import { useEffect, useState } from "react";
import styled from "styled-components";
import Buttons from "../buttons/Buttons";
import Phrases from "../escena/Phrases";

const StyledEscena = styled.li`
  text-align: center;
  padding: 15px;
  border: 2px solid black;
  border-radius: 100px;
  list-style: none;
  transition: all 0.5s;
  background-color: ${(props) =>
    props.typo ? "rgba(238, 138, 185, 0.3)" : " "};
`;
const StyledList = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const StyledBackground = styled.div`
  height: 100vh;
  background-image: url(${(props) => (props.img ? props.img : " ")});
  background-size: cover;
  background-position: center;
`;
const Escena = () => {
  const [active, setActive] = useState(1);
  const [currentPhrase, setCurrentPhrase] = useState({});

  const onClickNext = () => {
    setActive(active + 1);
  };
  const onClickPrevious = () => {
    setActive(active - 1);
  };
  useEffect(() => {
    setCurrentPhrase(Phrases?.find((item) => item.id === active));
  }, [active]);

  useEffect(() => {
    if (active === 5) {
      setActive(1);
    }
    if (active === 0) {
      setActive(4);
    }
  }, [active]);

  return (
    <StyledBackground url={currentPhrase.img}>
      <>
        <Buttons onClickNext={onClickNext} onClickPrevious={onClickPrevious} />
        <StyledList>
          {Phrases.map((phrase) => (
            <StyledEscena
              typo={phrase.id === active ? true : false}
              key={phrase.id}
            >
              {phrase.text}
            </StyledEscena>
          ))}
        </StyledList>
      </>
    </StyledBackground>
  );
};
export default Escena;
