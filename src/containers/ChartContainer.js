import styled from "styled-components";
import Title from "../components/Title";
import Explain from "../components/Explain";
import Chart from "../chart/BLOOD_SUPPLIED_NUMBER_DONORS/Chart";
import { useState, useEffect } from "react";

const Content = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 15px #0000000d;
  border-radius: 9px;
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  & > div {
    position: relative;
    top: 60px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`;
const loadContent = (category) => {
  return import(`../chart/${category}/TitleContent`).then((module) => ({
    titleContent: module.titleContent,
    titleExplain: module.titleExplain,
  }));
};

const ChartContainer = ({ category }) => {
  const [titles, setTitles] = useState({ titleContent: "", titleExplain: "" });

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
        <Chart />
        <Explain />
      </div>
    </Content>
  );
};
export default ChartContainer;
