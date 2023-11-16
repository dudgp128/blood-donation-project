import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataAsia from "./mapSouthKorea";
import { mapKorea } from "../../model/chart";
// Load Highcharts modules
require("highcharts/modules/map")(Highcharts);

// Render app with demo chart
const MyMapComponent:React.FC=()=> {
    var data = [
        ['kr-4194', 10], ['kr-kg', 11], ['kr-cb', 12], ['kr-kn', 13],
        ['kr-2685', 14], ['kr-pu', 15], ['kr-2688', 16], ['kr-sj', 17],
        ['kr-tj', 18], ['kr-ul', 19], ['kr-in', 20], ['kr-kw', 21],
        ['kr-gn', 22], ['kr-cj', 23], ['kr-gb', 24], ['kr-so', 25],
        ['kr-tg', 26], ['kr-kj', 27]
    ];

    const cityName:mapKorea={
        'Seoul':'서울',
        'Gyeonggi': '경기',
        'Gangwon' : '강원',
        'North Chungcheong' :'충북',
        'South Chungcheong' : '충남',
        'North Jeolla' : '전북',
        'South Gyeongsang' : '경남',
        'South Jeolla':'전남',
        'Daegu':'대구',
        'North Gyeongsang':'경북',
        'Jeju':'제주',
        'Gwangju':'광주'
      }

      const series:SeriesOptionsType[]= [
        {
             type:'map', // 필수값?
             mapData: mapDataAsia,
             data: data,
             dataLabels: {
               enabled: true,
               formatter:function (){
                   return cityName[this.point.name]
               }
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
          options={mapOptions}
          constructorType={"mapChart"}
          highcharts={Highcharts}
        />
      </div>
    );
  
}
export default MyMapComponent;
