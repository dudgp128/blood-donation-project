import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Cover from "./containers/Cover";
import ChartContainer from "./containers/ChartContainer";
import { List } from "react-virtualized";
import { useCallback } from "react";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  gap: 100px;
`;

const App: React.FC = () => {
  const categorys = ["BLOOD_SUPPLIED_NUMBER_DONORS", "REGION_BLOOD"];

  const rowRenderer = useCallback(
    ({ index, key, style }: { index: number; key: string; style: object }) => {
      return (
        <ChartContainer key={key} style={style} category={categorys[index]} />
      );
    },
    []
  );

  return (
    <div className="App">
      <Header />
      <Contents>
        <Cover />
        <List
          autoHeight
          height={3000}
          width={1500}
          rowCount={categorys.length}
          rowHeight={1500}
          rowRenderer={rowRenderer}
          list={categorys}
        />
      </Contents>
    </div>
  );
};

export default App;
