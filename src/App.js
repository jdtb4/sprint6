import Escena from './components/escena/Escena';
import Buttons from './components/buttons/buttons';

const App = () => {
    return ( 
        <>
        <Buttons/>
        <ul>
            {
                Escena.map((Escena, index) => {
                    return <li key={index}>{Escena.text}</li>
                }
                )
            }
        </ul>
        </>

    );
}

export default App;