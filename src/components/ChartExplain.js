import React from "react";
import styled from "styled-components";
import { ChartExplainContent } from "../chart/AMOUNT_BLOOD_SUPPLIED_NUMBER_DONORS/ChartExplainContent";
const ChartExplainWrapper = styled.div`
  white-space: pre;
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;
  border-width: 0px 0px 0px 5px;
  border-style: solid;
  border-color: #fa7391;
  padding-left: 18px;
  text-align: left;
  color: #4b4b4b;
  font-size: 14px;

  & > p {
    color: #bfbfbf;
  }
`;

const ChartExplain = () => {
  return (
    <ChartExplainWrapper>
      <p>Chart summary</p>
      {ChartExplainContent}
    </ChartExplainWrapper>
  );
};

export default ChartExplain;
