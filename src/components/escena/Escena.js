import styled from "styled-components";
import Phrases from "../escena/Phrases";

const StyledEscena = styled.li` 
        text-align: center;
        padding: 15px;
        border: 2px solid black;
        border-radius: 100px;
        list-style: none;

        background-color: ${props => props.active ? "pink" : "white"};
    
`;
const StyledList = styled.ul`
        padding: 0px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    `;

const Escena = () => {
    return (
        <StyledList>
            {Phrases.map(phrase => (
                <StyledEscena key={phrase.id} active = {false}>
                    {phrase.text}
                </StyledEscena>
            ))}
        </StyledList>
    );
}

 
export default Escena;