import React from "react";
import styled from "styled-components";
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
      채혈된 혈액은 검사 후 의료기관으로 공급되며 혈액의 단위는 유닛(unit,
      400cc)으로 1팩에 해당하는 양이다.
      <br />
      2005년~2008년 말라리아 성행으로 헌혈이 불가한 기간을 제외하고
      <br />
      <b>
        혈액 공급량은 일정 수준에서 증가하는 모습인 반면,
        <br />
        헌혈자수는 감소하는 추이다.
      </b>
      <br />
      특히 코로나가 시작된 2020년 이후 헌혈이 어려운 상황에서
      <br />
      어떻게 혈액 공급량을 유지할 수 있었을까?
      <br />
      <b>
        헌혈자당 헌혈 횟수가 2회을 넘으면서 기존 헌혈자의 재방문 발길이 높아져
        <br />
        가능했던 것으로 나타났다.
      </b>
    </ChartExplainWrapper>
  );
};

export default ChartExplain;
