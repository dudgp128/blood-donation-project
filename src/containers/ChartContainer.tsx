import styled from "styled-components";
import Title from "../components/Title";
import Explain from "../components/Explain";

import { useState, useEffect } from "react";
import { Titles } from "../model/chart";
import Chart from "../components/Chart";

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
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  category,
}: ChartContainerProps) => {
  const [titles, setTitles] = useState<Titles>({
    titleContent: "",
    titleExplain: "",
  });

  useEffect(() => {
    loadContent(category).then((loadedTitles) => {
      setTitles(loadedTitles);
    });
  }, [category]);

  return (
    <Content>
      <div>
        <Title
          titleContent={titles.titleContent}
          titleExplain={titles.titleExplain}
        />
        <Chart category={category} />
        <Explain category={category} />
      </div>
    </Content>
  );
};
export default ChartContainer;
