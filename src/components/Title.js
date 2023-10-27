import styled from "styled-components";
import {
  titleContent,
  titleExplain,
} from "../chart/BLOOD_SUPPLIED_NUMBER_DONORS/TitleContent";

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
        <h1> {titleContent} </h1>
      </div>
      <div className="title_explain">{titleExplain}</div>
    </TitleWrapper>
  );
};

export default Title;
