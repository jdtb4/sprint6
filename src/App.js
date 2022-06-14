import Escena, { StyledEscena } from './components/escena/Escena';
import GlobalStyle from './components/styles/styles';
//import { useState } from 'react';
import Buttons from './components/buttons/Buttons';

const App = () => {
    return ( 
        <>
        <Buttons />
        <GlobalStyle />
        <div>
            {Escena.map((Escena, index) => {
                return <StyledEscena key={index}>{Escena.text}</StyledEscena>}
            )}  
        </div>
        </>
    );
}

export default App;