import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Cover from "./containers/Cover";
import ChartContainer from "./containers/ChartContainer";


const Contents = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
`;

const App:React.FC=()=> {
  return (
    <div className="App">
      <Header />
      <Contents>
        <Cover />
        <ChartContainer category={'BLOOD_SUPPLIED_NUMBER_DONORS'}/>
        <ChartContainer category={'REGION_BLOOD'}/>
      </Contents>
    </div>
  );
}

export default App;
