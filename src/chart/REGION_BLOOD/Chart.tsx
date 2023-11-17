import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataAsia from "./mapSouthKorea";
import { Region_Data, MapKorea } from "../../model/chart";
import { useState, useEffect } from "react";
import fetchData from "../base";


// Load Highcharts modules
require("highcharts/modules/map")(Highcharts);

// Render app with demo chart
const MyMapComponent: React.FC = () => {

  const [dataSet, setDataSet] = useState<Region_Data>({
    data: { year: [], region: [], count: [], percent: [] },
  });

  const fetchDataAndUpdate = async (filename: string, key: keyof Region_Data): Promise<void> => {
    try {
      let result: any = await fetchData(filename, Object.keys(dataSet[key]));
      setDataSet((prevData) => ({
        ...prevData,
        [key]: result,
      }));
    } catch (error) {
      console.error(`데이터 가져오기 오류 (${key}):`, error);
    }
  };

  const fetchDataAsync = async (): Promise<void> => {
    await fetchDataAndUpdate("시·도별_인구대비_헌혈실적_20231116141055.csv", "data");
  };

  useEffect(() => {
    fetchDataAsync();
    finaldData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const citycode: MapKorea = {
    합계: 'kr-4194',
    서울: 'kr-so',
    경기: 'kr-kg',
    충북: 'kr-gb',
    대전·세종·충남: 'kr-gn',
    전북: 'kr-cb',
    경남: 'kr-kn',
    광주·전남: 'kr-2685',
    부산: 'kr-pu',
    대구·경북: 'kr-2688',
    울산: 'kr-ul',
    인천: 'kr-in',
    강원: 'kr-kw',
    제주: 'kr-cj',
  }

  const finaldData = (): [string, number][] => {
    const { region, percent } = dataSet.data;

    const code_region = region.map((e) => citycode[e]);

    if (code_region.length !== percent.length) {
      throw new Error('Arrays must have the same length');
    }

    return code_region.map((value, index) => [value, percent[index]]);
  }

  const series: SeriesOptionsType[] = [
    {
      type: 'map', // 필수값?
      mapData: mapDataAsia,
      data: finaldData(),
      dataLabels: {
        enabled: true,
        format: '{point.hc-key}' // this.properties.hc-key로 수정
      }
    }
  ]

  const options: Highcharts.Options = {
    title: {
      text: ""
    },
    credits: {
      href: "https://www.bloodinfo.net/main.do",
      text: " *데이터 출처: 대한적십자사 「혈액정보통계」 ",
      style: {
        color: "#707070",
      },
    },
    colorAxis: {
      min: 0,
      max: 9
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    series: series
  };

  return (
    <div>
      <HighchartsReact
        options={options}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </div>
  );

}
export default MyMapComponent;
