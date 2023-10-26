import styled from "styled-components";

const TitleWrapper = styled.div`
  & > div.title {
    & > h1 {
      color: black;
      font-size: 26px;
    }

    & > div.title_explain {
      white-space: pre;
      line-height: 2;
    }
  }
`;

const Title = () => {
  return (
    <TitleWrapper>
      <div className="title">
        <img src="./img_src/패스 79.png" alt="" />
        <h1> 급감하는 헌혈, 여전히 필요한 수혈 </h1>
      </div>
      <div className="title_explain">
        혈액은 대체할 수 있는 물질이 없기 때문에 헌혈에 의해서만 수급할 수있다.{" "}
        <br />
        게다가 혈액을 사고 파는 매혈이 금지되어 있고 보관기간도 짧아 <br />
        헌혈자에게 의존할 수 밖에 없다. <br />
        <b>혈액이 필요한 환자를 살리는 꼭 필요한 헌혈, 얼마나 많이 참여할까?</b>
      </div>
    </TitleWrapper>
  );
};

export default Title;
