import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataAsia from "./mapSouthKorea";
import { Region_Data } from "../../model/chart";
import { useState } from "react";
import fetchData from "../base";


// Load Highcharts modules
require("highcharts/modules/map")(Highcharts);

// Render app with demo chart
const MyMapComponent:React.FC=()=> {

    const [dataSet, setDataSet] = useState<Region_Data>({
      data:{ year:[], region:[], count:[], percent:[]},
    });

    const fetchDataAndUpdate = async (filename: string, key: keyof Region_Data): Promise<void> => {
      try {
        let result: any = await fetchData(filename, Object.keys(dataSet[key]));
        setDataSet((prevData) => ({
          ...prevData,
          [key]: result,
        }));
        console.log(dataSet);
      } catch (error) {
        console.error(`데이터 가져오기 오류 (${key}):`, error);
      }
    };
  
    const fetchDataAsync = async ():Promise<void> => {
      await fetchDataAndUpdate("시·도별_인구대비_헌혈실적_20231116141055.csv", "data");
    };

    // var data = [
    //     ['kr-4194', 10], ['kr-kg', 11], ['kr-cb', 12], ['kr-kn', 13],
    //     ['kr-2685', 14], ['kr-pu', 15], ['kr-2688', 16], ['kr-sj', 17],
    //     ['kr-tj', 18], ['kr-ul', 19], ['kr-in', 20], ['kr-kw', 21],
    //     ['kr-gn', 22], ['kr-cj', 23], ['kr-gb', 24], ['kr-so', 25],
    //     ['kr-tg', 26], ['kr-kj', 27]
    // ];

    // const cityName:mapKorea={
    //     'kr-so':'서울',
    //     'kr-kg': '경기',
    //     'kr-gb' :'충북',
    //     'kr-gn' : '충남',
    //     'kr-cb' : '전북',
    //     'kr-kn' : '경남',
    //     'kr-2685':'전남',
    //     'kr-pu':'부산',
    //     'kr-tg':'대구',
    //     'kr-2688':'경북',
    //     'kr-sj':'세종',
    //     'kr-tj':'대전',
    //     'kr-ul':'울산',
    //     'kr-in':'인천',
    //     'kr-kw':'강원',
    //     'kr-cj':'제주',
    //     'kr-kj':'광주',
    //   }

      const series:SeriesOptionsType[]= [
        {
             type:'map', // 필수값?
             mapData: mapDataAsia,
             data: dataSet.data,
             dataLabels: {
               enabled: true,
               format:{this.point.name} // this.properties.hc-key로 수정
               }
           }
      ]
    
    const options:Highcharts.Options = {
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
