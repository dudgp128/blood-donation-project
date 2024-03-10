import "../QuestionStyle.scss";
import { useContextState } from "../contexts/Context";

const Answer = () => {
  const { topic } = useContextState();

  function isNumbersEqual(q: string, a: string): boolean {
    // 정규식을 사용하여 문자열에서 숫자 부분을 추출
    const extractNumber = (str: string) => parseInt(str.match(/\d+/)?.[0]!, 10);

    // 파라미터에서 숫자 추출
    const qNumber = extractNumber(q);
    const aNumber = extractNumber(a);

    // 두 숫자를 비교하여 결과 반환
    return qNumber === aNumber;
  }

  const isVisible = (id: string) =>
    isNumbersEqual(topic, id) ? { display: "inline-block" } : {};

  return (
    <div className={"Answer_content"}>
      <div className={"A0"} style={isVisible("A0")}>
        <ul>
          <li className={"Answer"}>NO</li>
          <li>
            우리 몸에 있는 혈액은 대략 남자 체중의 8%, 여자 체중의 7%를
            차지합니다. <br />
            60kg인 남자는 약 4,800mL, 50kg인 여자는 약 3,500mL 정도입니다.
            <br />
            이 중 15%는 비상 대비 여유분이므로, <br />
            320mL 또는 400mL 정도의 헌혈은 일상생활이나 건강에 영향을 주지
            않는다고 합니다!
          </li>
        </ul>
      </div>
      <div className={"A12"} style={isVisible("A12")}>
        <ul>
          <li className={"Answer"}>NO</li>
          <li>
            <strong>헌혈증은 본인부담금을 공제해주는 증서입니다.</strong>
            <br />
            수혈에 드는 비용 중, 사전 검사 비용을 제외한 혈액 팩에만 제공됩니다.
            <br />
            혈액 팩 금액의 80%는 국민건강보험공단이 부담하며 헌혈증으로 20%
            본인부담금을 면제받을 수 있습니다.
          </li>
        </ul>
      </div>
      <div className={"A1"} style={isVisible("A1")}>
        <ul>
          <li className={"Answer"}>NO</li>
          <li>
            헌혈 기구(바늘, 혈액백)등은 무균처리, 일회용으로
            <br />
            에이즈에 감염될 위험은 전혀 없습니다.
          </li>
        </ul>
      </div>

      <div className={"A3"} style={isVisible("A3")}>
        <p>답변</p>
        <pre>
          <b>지정헌혈이란?</b> 헌혈 후 채혈된 혈액이 지정된 수혈자에게 수혈하는
          헌혈을 말합니다.
          <br /> 지정 헌혈자는 수혈자 등록번호를 간호사에게 보여주고, 혈연
          여부를 확인 후 채혈이 진행됩니다.
        </pre>
      </div>
      <div className={"A4"} style={isVisible("A4")}>
        <p>답변</p>
        <pre>
          크게 수혈용과 의약품제조용 혈액공급으로 나뉘며, 아래와 같은 절차로
          공급됩니다.
        </pre>
        <pre style={{ marginBottom: "0px" }}>수혈용 혈액공급</pre>
        <img
          src={
            "https://www.bloodinfo.net/upload/bloodinfo/knrcbs/editor/20231123/IMG_162000.png"
          }
          alt={"img"}
        />
        <br />
        <pre style={{ marginBottom: "0px" }}>의약품제조용 혈액공급</pre>
        <img
          src={
            "https://www.bloodinfo.net/upload/bloodinfo/knrcbs/editor/20231123/IMG_162003.png"
          }
          alt={"img"}
        />
        <pre className={"source_info"}> 출처 - 대한적십자사 혈액관리본부 </pre>
      </div>
      <div className={"A5"} style={isVisible("A5")}>
        <ul>
          <li className={"Answer"}>NO</li>
          <li>
            <strong>
              혈장은 24시간 내, 적혈구도 수주 내에 헌혈 전 상태로 회복됩니다.
            </strong>
            <br />
            헌혈로 인해 빈혈이 초래되고, 건강에 지장을 주는 것은 아니나
            <br />
            헌혈 당일에는 충분한 수분 섭취 및 휴식을 취해야 합니다.
          </li>
        </ul>
      </div>
      <div className={"A6"} style={isVisible("A6")}>
        <ul>
          <li className={"Answer"}>NO</li>
          <li>
            전혈의 경우 2개월
            <br />
            혈장, 혈소판의 경우 2주 간격으로 헌혈이 가능합니다.
          </li>
        </ul>
      </div>
      <div className={"A7"} style={isVisible("A7")}>
        <ul>
          <li className={"Answer"}>YES</li>
          <li>
            ‘변종 크로이츠펠트-야콥병’ 의 예방을 위해 광우병이 발생한 국가에서
            <br />
            일정기간 체류한 대상자는 헌혈에 참여할 수 없습니다.
          </li>
        </ul>
        <img
          src={"https://i.ibb.co/W6D5pH0/2021-12-09-115258.jpg"}
          alt={"img"}
        />
        <pre className={"source_info"}>출처 - 대한적십자사 혈액관리본부</pre>
      </div>
      <div className={"A8"} style={isVisible("A8")}>
        <ul>
          <li className={"Answer"}>NO</li>
          <li>
            파주는 말리리아 위험 지역으로 헌혈이 제한되어있습니다.
            <span>
              (말라리아 위험 지역 : 3년 평균 인구 10만명 당 10명이상 말라리아
              발생한 지역)
            </span>
            <br />이 지역에 거주나 복무 시에 2년간, 여행 시는 1년간 전혈헌혈 및
            혈소판성분헌혈을 할 수 없으며
            <b>혈장성분헌혈만</b> 가능합니다.
            <br />
            하지만 헌혈 수급이 어려울 땐 위험지역을 한시적으로 해제하여 헌혈이
            가능하기도 합니다.
            <br />
          </li>
        </ul>
        <img
          src={"https://i.ibb.co/gVx4CN2/2021-12-09-122340.jpg"}
          alt={"img"}
        />
        <pre className={"source_info"}>출처 - 대한적십자사 혈액관리본부</pre>
      </div>
      <div className={"A9"} style={isVisible("A9")}>
        <p>답변</p>
        <ul>
          <li>
            <pre>
              1. 간염(B형, C형) <br />
              2. 에이즈 (우리나라의 경우 수혈로 감염될 확률 백만분의 1이하){" "}
              <br />
              3. 말라리아 <br />
              4. 매독 <br />
              5. CMV(거대세포바이러스) <br />
              6. HTLV(사람 T-세포 백혈병 바이러스) <br />
              핵산증폭검사 도입 이후(2005~) 수혈전파 감염사례는 없으나,
              <br />
              면역이상반응 중 하나인 발열성 비용혈 수혈반응이 주요 국가보다 많은
              편입니다. <br />
              영국 103건, 일본 335건, 한국 2,101건(’19년 말 기준, 수혈 중 0.05%)
            </pre>
          </li>
        </ul>
      </div>
      <div className={"A10"} style={isVisible("A10")}>
        <ul>
          <li className={"Answer"}>NO</li>
          <li>
            <strong>헌혈증을 사고 팔 시 위법행위로 처벌 대상이 됩니다.</strong>
            <br />
            혈액관리법 <br />
            "누구든지 금전, 재산상의 이익 기타 대가적 급부로 제공, 약속하여서는
            아니 된다"
            <br />
            <span style={{ fontSize: "11px" }}>
              (제3조 , 혈액 매매행위 등의 금지)
            </span>
          </li>
        </ul>
      </div>
      <div className={"A11"} style={isVisible("A11")}>
        <ul>
          <li
            className={"Answer"}
            style={{ display: "block", textAlign: "center" }}
          >
            NO
          </li>
          <li style={{ textAlign: "center" }}>
            헌혈 후 검사에 아래와 같은 항목이 포함됩니다
            <br />
            1. ALT(알라닌분해 효소) <br />
            2. 총단백 <br />
            3. B,C형 간염검사 <br />
            4. 인체T림프영양성 바이러스 검사 <br />
            5. 매독 <br />
            6. 말라이라 검사 <br />
            7. 비예기항체 검사 <br />
            8. ABO혈액형 검사 <br />
            검사 결과를
            <strong>
              우편물, 대한적십자사 혈액관리본부 웹사이트, '레드커낵트' 어플
            </strong>
            에서 확인 할 수 있습니다. 자세한 사항은
            <a href="https://www.bloodinfo.net/bldtest_type.do">
              대한적십자사 홈페이지
            </a>
            를 참고하세요.
          </li>
        </ul>
      </div>
      <div className={"A13"} style={isVisible("A13")}>
        <ul>
          <li className={"Answer"}>YES</li>
          <li>
            대한적십자사 혈액관리본부 <strong>웹사이트, '레드커낵트'</strong>
            에서 <br />
            검사 결과와 혈액 전달 과정을 볼 수 있습니다.
          </li>
        </ul>
      </div>
      <div className={"A14"} style={isVisible("A14")}>
        <ul>
          <li className={"Answer"}>NO</li>
          <li>
            헌혈하면 헌혈량만큼 체외로 피가 빠져나가 체중이 일시적으로 줄어들 수
            있지만,
            <br />
            빠르게 회복하여
            <strong>다이어트에 효과가 있다고 보기 어렵습니다.</strong>
          </li>
        </ul>
      </div>
      <div className={"A15"} style={isVisible("A15")}>
        <ul>
          <li className={"Answer"}>YES</li>
          <li>
            헌혈이 가능한 혈압 수치는 수축기 기준 90~179mmHg입니다.
            <br />
            그 이유는 헌혈자에 따라 차이가 있지만, 헌혈 시 혈압이 10~20mmHg 정도
            낮아집니다.
            <br />
            대부분의 사람들은 헌혈 후 휴식을 하는 동안 회복이 되지만, <br />
            <strong>
              저혈압, 고혈압의 경우 회복이 늦어 후유증 발생 가능성이 높아 헌혈자
              보호를 위해 헌혈을 보류합니다
            </strong>
          </li>
        </ul>
      </div>
      <div className={"A16"} style={isVisible("A16")}>
        <ul>
          <li className={"Answer"}>NO</li>
          <li>
            우리나라에서는 대한적십자가 운영하는 <strong>'헌혈의 집'</strong>과
            더불어 <br />
            대한산업보건현회 한마음혈액원에서 운영하는
            <strong>'헌혈카페'</strong>에서도 헌혈이 가능합니다.
          </li>
        </ul>
      </div>
      <div className={"A17"} style={isVisible("A17")}>
        <ul>
          <li className={"Answer"}>NO</li>
          <li>
            헌혈 전 혈색소를 사전검사에서 충분한 여유 혈액양을 판단하여 헌혈을
            진행하기 때문에
            <br />
            <strong>빈혈을 야기하지 않습니다.</strong>
          </li>
        </ul>
      </div>
      <div className={"A18"} style={isVisible("A18")}>
        <ul>
          <li className={"Answer"}>YES</li>
          <li>
            개의 경우 수혈용 피는 대부분 공혈견이 공급합니다.
            <br />
            하지만 공혈견은 나이가 들어 은퇴할 때까지 주기적으로 피를 뽑히며
            살아갑니다.
            <br />
            '한국헌혈견협회'가 반려견 헌혈에 뜻이 있는 보호자와
            협력동물병원사이의 헌혈과 수혈을 돕고 있습니다.
            <br />
            헌혈견은 무료 건강검진과 반려견 제품을 제공받으며, 헌혈견의 상징인
            노란 스카프를 받습니다.
            <br />
          </li>
        </ul>
        <iframe
          width={"560"}
          height={"315"}
          src={"https://www.youtube.com/embed/xMdUYJ-vGGU"}
          title={"YouTube video player"}
          allow={
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          }
        ></iframe>
      </div>
      <div className={"A19"} style={isVisible("A19")}>
        <p>답변</p>
        <pre>
          <strong>
            현재 사람에게 피를 수혈해줄 동물로 주목받는 건 돼지밖에 없다고
            합니다.
          </strong>
          돼지의 혈액형 중 하나인 AO형체계는 인간의 ABO형과 비슷하다고 합니다.
          <br />
          O형 혈액 다른 혈액형을 가진 사람에게 수혈이 가능하기때문에 <br />
          O형 돼지에 대한 수혈연구가 진행중입니다.
        </pre>
      </div>
    </div>
  );
};
export default Answer;
