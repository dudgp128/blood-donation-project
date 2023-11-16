import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataAsia from "./mapSouthKorea";

// Load Highcharts modules
require("highcharts/modules/map")(Highcharts);

// Render app with demo chart
const MyMapComponent=()=> {
    var data = [
        ['kr-4194', 10], ['kr-kg', 11], ['kr-cb', 12], ['kr-kn', 13],
        ['kr-2685', 14], ['kr-pu', 15], ['kr-2688', 16], ['kr-sj', 17],
        ['kr-tj', 18], ['kr-ul', 19], ['kr-in', 20], ['kr-kw', 21],
        ['kr-gn', 22], ['kr-cj', 23], ['kr-gb', 24], ['kr-so', 25],
        ['kr-tg', 26], ['kr-kj', 27]
    ];
    
    const mapKorean={
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
    
    const mapOptions = {
      title: {
        text: ""
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
    
      series: [
        {
          mapData: mapDataAsia,
          name: "Asia",
          data: data,
          dataLabels: {
            enabled: true,
            formatter:function (){
                return mapKorean[this.point.name]
            }
        }
    }
      ]
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
