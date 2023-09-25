import styled from "styled-components";

const Content = styled.div`
  margin: 0 auto;

  & > div.contentWrapper {
    background-image: url(${process.env.PUBLIC_URL}/img_src/page_shape.svg);
    background-repeat: no-repeat;
    padding-top: 70px;
    width: 543px;
    height: 520px;

    & > div {
      display: flex;
      flex-direction: column;

      & > div.title {
        position: relative;
        padding-bottom: 10px;
        border-bottom: 1px solid black;

        & > h2 {
          margin: 0;
        }
      }

      & > div.title_explain {
        position: relative;

        & > p {
          font-size: 14px;
        }
      }
      & > img.blood_month_mark {
        width: 379px;
        margin: 0 auto;
        margin-top: 77px;
      }

      & > span.copyright {
        margin-top: 52px;
      }
    }
  }
`;
const Cover = () => {
  return (
    <Content>
      <div className="contentWrapper">
        <div>
          <div className="title">
            <h2> 헌혈 보고서 </h2>
          </div>
          <div className="title_explain">
            <p>
              코로나로 인한 혈액 수급 상태는 얼마나 심각한가?
              <br />
              과거 헌혈 데이터로 우리에게 헌혈은 어떤 의미일지 짚어보자
            </p>
          </div>
          <img
            className="blood_month_mark"
            src="./img_src/blood_month_mark.svg"
            alt="월별 혈액 수급량 마크"
          />
          <span className="copyright">NJ INTERACTIVE PROJECT</span>
        </div>
      </div>
      <img src="./img_src/scroll_mark.png" alt="scroll" />
    </Content>
  );
};
export default Cover;
