import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Cover from "./containers/Cover";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Contents>
        <Cover />
      </Contents>
    </div>
  );
}

export default App;
