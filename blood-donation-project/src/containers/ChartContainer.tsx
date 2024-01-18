import styled from "styled-components";
import Title from "../components/Title";
import Explain from "../components/Explain";
import { useState, useEffect } from "react";
import { Titles } from "../model/chart";

const Content = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px #0000000d;
  border-radius: 9px;
  width: 900px;


  & > div {
    position: relative;
    padding: 60px 0px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`;

const loadContent = async (category: string): Promise<Titles> => {
  const module = await import(`../chart/${category}/TitleContent`);
  return {
    titleContent: module.titleContent,
    titleExplain: module.titleExplain,
  };
};

const loadChart = async (category: string): Promise<React.FC<{}>> => {
  const module = await import(`../chart/${category}/Chart`);
  return module.default;
};

interface ChartContainerProps {
  category: string;
  style: object;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  category,
  style,
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
  }, [category, Chart]);

  return (
    <Content>
      <div>
        <Title
          titleContent={titles.titleContent}
          titleExplain={titles.titleExplain}
        />
        {Chart && <Chart />}
        <Explain />
      </div>
    </Content>
  );
};
export default ChartContainer;
