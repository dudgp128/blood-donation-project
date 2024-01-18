import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Cover from "./containers/Cover";
import ChartContainer from "./containers/ChartContainer";
import { useCallback } from "react";
import Question from "./containers/Question";
import Answer from "./containers/Answer";
import { ContextProvider } from "./contexts/Context";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  gap: 100px;

  & > div {
    margin: 0 auto;
  }
`;

const App: React.FC = () => {
  const categorys = ["BLOOD_SUPPLIED_NUMBER_DONORS", "REGION_BLOOD"];

  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Contents>
          <Cover />
          {categorys.map((category, idx) => {
            return <ChartContainer key={idx} category={category} />;
          })}
          <Question />
          <Answer />
        </Contents>
      </div>
    </ContextProvider>
  );
};

export default App;
