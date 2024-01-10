import "../QuestionStyle.scss";

const Question = () => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return (
    <div
      className={"Q_text_content"}
      style={{ marginTop: "100px" }}
      onClick={onClick}
    >
      <ul>
        <li className={"xl"} id={"Q0"}>
          헌혈을 하면 건강이 나빠진다?',
        </li>
      </ul>
      <ul>
        <li className={"m"} id={"Q19"}>
          동물 피를 사람에게 수혈할 수 있을까?',
        </li>
        <li className={"l"} id={"Q18"}>
          반려견도 헌혈이 가능할까?',
        </li>
      </ul>
      <ul>
        <li className={"xl"} id={"Q17"}>
          헌혈을 하면 빈혈에 걸린다?',
        </li>
        <li className={"s"} id={"Q16"}>
          헌혈은 대한적십자사가 운영하는 헌혈의 집에서만 가능하다?',
        </li>
      </ul>
      <ul>
        <li className={"s"} id={"Q15"}>
          저혈압은 헌혈을 못할까?',
        </li>

        <li className={"l"} id={"Q14"}>
          헌혈은 다이어트에 효과가 있다?',
        </li>
        <li className={"xs"} id={"Q13"}>
          헌혈한 나의 혈액 검사 데이터를 볼 수 있을까?',
        </li>
      </ul>
      <ul>
        <li className={"xl"} id={"Q12"} style={{ color: "#ed2652" }}>
          헌혈증은 우선순위권이다?',
        </li>
        <li className={"xs"} id={"Q11"}>
          헌혈 전 혈액 검사 결과는 알려주지 않는다?',
        </li>
      </ul>
      <ul>
        <li className={"s"} id={"Q10"}>
          헌혈증은 구입할 수 있다?',
        </li>
        <li className={"s"} id={"Q9"}>
          수혈 시 감염될 수 있는 질병은?',
        </li>
        <li className={"l"} id={"Q8"}>
          파주에 살면 헌혈할 수 없다?',
        </li>
      </ul>
      <ul>
        <li className={"s"} id={"Q7"}>
          영국에서 1개월 이상 체류하면 평생 헌혈 할 수 없다?',
        </li>
        <li className={"l"} id={"Q6"}>
          헌혈은 매일 할 수 있다?',
        </li>
      </ul>
      <ul>
        <li className={"m"} id={"Q5"}>
          헌혈 시 회복 기간은?',
        </li>
        <li className={"m"} id={"Q4"}>
          헌혈한 내 피는 어디로 갈까?',
        </li>
        <li className={"s"} id={"Q3"}>
          지정헌혈하는 방법은?',
        </li>
      </ul>
      <ul>
        <li className={"s"} id={"Q2"}>
          수혈을 받아야하는 질병은?',
        </li>
        <li className={"s"} id={"Q1"}>
          헌혈로 에이즈와 같은 질병에 감염될 수 있다?',
        </li>
      </ul>
    </div>
  );
};

export default Question;
