import BSND_Chart from "../chart/BLOOD_SUPPLIED_NUMBER_DONORS/BSND_Chart";
import RB_Chart from "../chart/REGION_BLOOD/RB_Chart";

type ChartCategory = "BLOOD_SUPPLIED_NUMBER_DONORS" | "REGION_BLOOD";

interface ChartProps {
  category: string; // 여기서 string으로 유지
}

const Chart: React.FC<ChartProps> = ({ category }) => {
  // category의 값이 유효한지 검증
  const isValidCategory = (value: any): value is ChartCategory =>
    value === "BLOOD_SUPPLIED_NUMBER_DONORS" || value === "REGION_BLOOD";

  if (!isValidCategory(category)) {
    throw new Error(`Invalid category: ${category}`);
  }

  const list: Record<ChartCategory, React.ComponentType> = {
    BLOOD_SUPPLIED_NUMBER_DONORS: BSND_Chart,
    REGION_BLOOD: RB_Chart,
  };

  const Component = list[category as ChartCategory]; // category를 ChartCategory로 타입 단언

  return <>{Component && <Component />}</>;
};

export default Chart;
