import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataAsia from "./mapSouthKorea";
import { Region_Data, MapKorea } from "../../model/chart";
import { useState, useEffect } from "react";
import fetchData from "../base";
import styled from "styled-components";

const ChartContainer = styled.div`
  display: flex;
  position: relative;
`;


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const cityCode: MapKorea = {
    'kr-4194': '합계',
    'kr-so': '서울',
    'kr-kg': '경기',
    'kr-gb': '충북',
    'kr-gn': '대전·세종·충남',
    'kr-cb': '전북',
    'kr-kn': '경남',
    'kr-2685': '광주·전남',
    'kr-pu': '부산',
    'kr-2688': '대구·경북',
    'kr-ul': '울산',
    'kr-in': '인천',
    'kr-kw': '강원',
    'kr-cj': '제주',
  }

  const findKeyByValue = (valueSet: any) => {
    return valueSet.map((value: any) => {
      const foundKey = Object.keys(cityCode).find(key => cityCode[key] === value);
      return foundKey || ''; // Return an empty string if not found (you may handle this case differently)
    });
  }

  const extractData = (key:string): [string, number][] => {
    const { region } = dataSet.data;
    const column = dataSet.data[key]

    const code_region = findKeyByValue(region);

    if (!column) {
      throw new Error(`Invalid key: ${key}`);
    }
    
    if (code_region.length !== column.length) {
      throw new Error('Arrays must have the same length');
    }

    return code_region.map((value: any, index: number) => [value, column[index]]);
  }

  const series: SeriesOptionsType[] = [
    {
      type: 'map', // 필수값?
      mapData: mapDataAsia,
      dataLabels: {
        enabled: true,
        formatter: function () {
          return cityCode[(this.point as any)['hc-key']]
        }
      }
    }
  ]

  const percentOptions: Highcharts.Options = {
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
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    series: [Object.assign({}, series[0], { data: extractData('percent') })],
    tooltip: {
      formatter: function (this: Highcharts.TooltipFormatterContextObject) {
        return `<p style="font-size:10px">${cityCode[(this.point as any)['hc-key']]}</p>
        <br/>
        <span style="color:${this.point.color}">\u25CF</span> 헌혈률 : ${this.point.value} %`
      }
    }
  };

  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  });

  const countOptions: Highcharts.Options = {
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
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    series: [Object.assign({}, series[0], { data: extractData('count') })],
    tooltip: {
      formatter: function (this: Highcharts.TooltipFormatterContextObject) {
        return `<p style="font-size:10px">${cityCode[(this.point as any)['hc-key']]}</p>
        <br/>
        <span style="color:${this.point.color}">\u25CF</span> 헌혈실적 : ${this.point.value} `
      }
    }
  };

  return (
    <ChartContainer>
        <HighchartsReact
          options={percentOptions}
          constructorType={"mapChart"}
          highcharts={Highcharts}
        />
        <HighchartsReact
          options={countOptions}
          constructorType={"mapChart"}
          highcharts={Highcharts}
        />
    </ChartContainer>
  );

}
export default MyMapComponent;
