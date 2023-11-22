import styled from "styled-components";
import Title from "../components/Title";
import Explain from "../components/Explain";
import Chart from "../chart/BLOOD_SUPPLIED_NUMBER_DONORS/Chart";
import MyMapComponent from "../chart/REGION_BLOOD/Chart";
import { useState, useEffect } from "react";
import { Titles } from "../model/chart";

const Content = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 15px #0000000d;
  border-radius: 9px;
  width: 900px;
  margin-left: auto;
  margin-right: auto;

  & > div {
    position: relative;
    padding: 60px 0px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`;

const loadContent = (category: string): Promise<Titles> => {
  return import(`../chart/${category}/TitleContent`).then((module) => ({
    titleContent: module.titleContent,
    titleExplain: module.titleExplain,
  }));
};

const loadChart = (category: string): Promise<React.FC<{}>> => {
  return import(`../chart/${category}/Chart`).then((module) => module.default);
};

interface ChartContainerProps {
  category: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  category,
}: ChartContainerProps) => {
  const [titles, setTitles] = useState<Titles>({
    titleContent: "",
    titleExplain: "",
  });
  const [Chart, setChart] = useState<React.FC<{}> | null>(() => null);

  useEffect(() => {
    loadContent(category).then((loadedTitles) => {
      setTitles(loadedTitles);
    });
    loadChart(category).then((Chart) => {
      setChart(() => Chart);
    });
  }, [category]);

  return (
    <Content>
      <div>
        <Title
          titleContent={titles.titleContent}
          titleExplain={titles.titleExplain}
        />
        {category === "BLOOD_SUPPLIED_NUMBER_DONORS" ? (
          Chart && <Chart />
        ) : (
          <MyMapComponent />
        )}
        <Explain />
      </div>
    </Content>
  );
};
export default ChartContainer;
