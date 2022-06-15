import GlobalStyle from "./components/styles/Styles";
import { useState } from "react";
import Welcome from "./components/welcome/Welcome";

const App = () => {
  const [joined, setJoined] = useState(false);

  return (
    <>
      <Welcome joined={joined} setJoined={setJoined} />
      <GlobalStyle />
    </>
  );
};
export default App;
