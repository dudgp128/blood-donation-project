import styled from "styled-components";
import AMOUNT_BLOOD_SUPPLIED_NUMBER_DONORS from "../chart/AMOUNT_BLOOD_SUPPLIED_NUMBER_DONORS";

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

    & > div.title {
      & > h1 {
        color: black;
        font-size: 26px;
      }
    }

    & > div.title_explain {
      white-space: pre;
      line-height: 2;
    }

    & > div.chart_explain {
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
    }
  }
`;

const ChartContainer = () => {
  return (
    <Content>
      <div>
        <div className="title">
          <img src="./img_src/패스 79.png" alt="" />
          <h1> 급감하는 헌혈, 여전히 필요한 수혈 </h1>
        </div>
        <div className="title_explain">
          혈액은 대체할 수 있는 물질이 없기 때문에 헌혈에 의해서만 수급할
          수있다. <br />
          게다가 혈액을 사고 파는 매혈이 금지되어 있고 보관기간도 짧아 <br />
          헌혈자에게 의존할 수 밖에 없다. <br />
          <b>
            혈액이 필요한 환자를 살리는 꼭 필요한 헌혈, 얼마나 많이 참여할까?
          </b>
        </div>
        <AMOUNT_BLOOD_SUPPLIED_NUMBER_DONORS />
        <div className="chart_explain">
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
            헌혈자당 헌혈 횟수가 2회을 넘으면서 기존 헌혈자의 재방문 발길이
            높아져
            <br />
            가능했던 것으로 나타났다.
          </b>
        </div>
      </div>
    </Content>
  );
};
export default ChartContainer;
