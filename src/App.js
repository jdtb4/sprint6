import Escena from './components/escena/Escena';
import GlobalStyle from './components/styles/Styles';
import { useState } from 'react';
import Buttons from './components/buttons/Buttons';

const App = () => {
    const [dato, setDato] = useState(0);
    const onClickNext = () => {
        setDato(dato+1)
    }
    const onClickPrevious = () => {
        setDato(dato-1)
    }
    console.log(dato);
    return (
        <>
        <Buttons onClickPrevious={onClickPrevious} onClickNext={onClickNext} />
        <GlobalStyle />
        <Escena />
        </>
    );
}

export default App;