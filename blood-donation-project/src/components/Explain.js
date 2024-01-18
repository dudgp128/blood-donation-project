import styled from "styled-components";
import { ExplainContent } from "../chart/BLOOD_SUPPLIED_NUMBER_DONORS/ExplainContent";
const ChartExplainWrapper = styled.div`
  width: 450px;
  line-height: 2;
  word-break: keep-all;
  margin-left: auto;
  margin-right: auto;
  border-width: 0px 0px 0px 5px;
  border-style: solid;
  border-color: #fa7391;
  padding-left: 18px;
  text-align: justify;
  color: #4b4b4b;
  font-size: 14px;

  & > p {
    color: #bfbfbf;
  }

  & > pre {
    margin: 0;
  }
`;

const Explain = () => {
  return (
    <ChartExplainWrapper>
      <p>Chart summary</p>
      {ExplainContent}
    </ChartExplainWrapper>
  );
};

export default Explain;
