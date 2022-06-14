import styled from "styled-components";

export const StyledButtons = styled.button`
        width: 50%; 
        padding: 15px;
        font-size: 1.5rem;
        border-radius: 15px;
        border: 1px solid black;

        &&:hover {
            cursor: pointer;
            background-color: pink;
        }
`;

const Buttons = () => {
    return (
        <>
        <StyledButtons>Anterior</StyledButtons>
        <StyledButtons>Següent</StyledButtons>
        </>
    );
}

export default Buttons;