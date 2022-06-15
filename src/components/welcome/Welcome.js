import styled from "styled-components";
import Escena from "../escena/Escena";

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(
    circle,
    rgba(72, 69, 131, 1) 0%,
    rgba(129, 50, 175, 1) 38%
  );
`;
const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  font-family: "sans-serif";
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 100px;

  &:hover {
    color: white;
    cursor: pointer;
    background-color: rgba(62, 26, 231, 0.12);
    transition: all 0.3s;
    transform: translateY(5px);
  }
`;
const StyledText = styled.h1`
  font-family: "san-serif";
  color: white;

  &:hover {
    cursor: default;
    transform: translateY(-5px);
    transform: scale(1.2);
    transition: all 0.3s;
  }
`;
const Welcome = ({ joined, setJoined }) => {
  return (
    <>
      {joined === false ? (
        <StyledWelcome>
          <StyledText>¡Benvingut a l'historieta del nostre heroi!</StyledText>
          <p className="Description">
            A continuació veuràs una historieta amb frases i il·lustracions
            creada amb React i Styled-Components. Per iniciar, clica al botó de
            "Començar" i passaràs a una altra pantalla on podràs veure com
            clicant a cada botó canvia l'estat de cada línia de la historieta i
            la seva il·lustració.
          </p>
          <StyledButton onClick={() => setJoined(true)}>Començar</StyledButton>
        </StyledWelcome>
      ) : (
        <Escena />
      )}
    </>
  );
};

export default Welcome;
