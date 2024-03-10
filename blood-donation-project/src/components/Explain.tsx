import styled from "styled-components";
import BSND_ExplainContent from "../chart/BLOOD_SUPPLIED_NUMBER_DONORS/BSND_ExplainContent";
import RB_ExplainContent from "../chart/REGION_BLOOD/RB_ExplainContent";

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

type ExplainCategory = "BLOOD_SUPPLIED_NUMBER_DONORS" | "REGION_BLOOD";

interface ExplainProps {
  category: string;
}

const Explain: React.FC<ExplainProps> = ({ category }) => {
  const isValidCategory = (value: any): value is ExplainCategory =>
    value === "BLOOD_SUPPLIED_NUMBER_DONORS" || value === "REGION_BLOOD";

  if (!isValidCategory(category)) {
    throw new Error(`Invalid category: ${category}`);
  }
  const list: Record<ExplainCategory, React.ComponentType> = {
    BLOOD_SUPPLIED_NUMBER_DONORS: BSND_ExplainContent,
    REGION_BLOOD: RB_ExplainContent,
  };

  const Component = list[category as ExplainCategory]; // category를 ExplainCategory로 타입 단언

  return (
    <ChartExplainWrapper>
      <p>Chart summary</p>
      {Component && <Component />};
    </ChartExplainWrapper>
  );
};

export default Explain;
