import BSND_Chart from "../chart/BLOOD_SUPPLIED_NUMBER_DONORS/BSND_Chart";
import RB_Chart from "../chart/REGION_BLOOD/RB_Chart";

const Chart = ({ category }) => {
  const list = {
    BLOOD_SUPPLIED_NUMBER_DONORS: BSND_Chart,
    REGION_BLOOD: RB_Chart,
  };

  const Component = list[category];

  return (
    <>
      <Component />
    </>
  );
};

export default Chart;
