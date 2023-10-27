import styled from "styled-components";
import Title from "../components/Title";
import Explain from "../components/Explain";
import Chart from "../chart/BLOOD_SUPPLIED_NUMBER_DONORS/Chart";

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

const ChartContainer = () => {
  return (
    <Content>
      <div>
        <Title />
        <Chart />
        <Explain />
      </div>
    </Content>
  );
};
export default ChartContainer;
