import styled from "styled-components";

export const StyledButtons = styled.button`
        width: 50%; 
        padding: 15px;
        font-family: 'sans-serif';
        font-size: 1.5rem;
        border-radius: 100px;
        border: 2px solid black;
        background-color: white;

        &&:hover {
            cursor: pointer;
            background-color: rgba(0,0,0,0.05);
        }
`;
const Buttons = ({onClickNext, onClickPrevious}) => {
    return (
        <>
        <StyledButtons onClick={onClickPrevious}>Anterior</StyledButtons>
        <StyledButtons onClick={onClickNext}>Següent</StyledButtons>
        </>
    );
}
export default Buttons;