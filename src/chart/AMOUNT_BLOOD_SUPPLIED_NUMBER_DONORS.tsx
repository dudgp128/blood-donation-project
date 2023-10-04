import Highcharts, { SeriesOptionsType } from "highcharts";
import React, {  useEffect } from "react";
import fetchData from "./base";
import { Data, Result, Tooltip } from "../model/chart";

let data: Data = {
  blood_supply: { year: [], values: [] },
  donation_people: { year: [], people: [], time: [] },
};

const AMOUNT_BLOOD_SUPPLIED_NUMBER_DONORS:React.FC = () => {

  const fetchDataAndUpdate = async (filename:string, key:keyof Data) : Promise<void>=>{
    try {
      let result :any = await fetchData(filename, Object.keys(data[key]));
      data[key] = result;
    } catch (error) {
      console.error(`데이터 가져오기 오류 (${key}):`, error);
    }
    renderChart();
  };

  const fetchDataAsync = async ():Promise<void> => {
    await fetchDataAndUpdate("혈액공급실적_20230927200132.csv", "blood_supply");
    await fetchDataAndUpdate("헌혈자_수_20230925212741.csv", "donation_people");
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  const setOpacity = (array:number[]) :number[] => { 
    // 최댓값과 최솟값 찾기
    const minValue:number = Math.floor(Math.min(...array)*10)/10; // 소숫점 첫째 자리 이후 버림
    const maxValue:number = Math.max(...array);

    // 정규화된 값을 계산
    return array.map((value:number) =>
      parseFloat(((value - minValue) / (maxValue - minValue)).toFixed(3)))
  };

  const setZone = () :Result=> { // ZONE 설정하기
    const opacitySet:number[] = setOpacity(data.donation_people.time);
    return opacitySet.map((e :number, i:number) => 
    ({
      value: i + 1,
      color: `rgba(86, 174, 164, ${e})`,
    }));
  };

 // tooltip html 포멧
  const setTooltip = ({ year, circle_color, column, value }:Tooltip) :string => {
    return `<p style="font-size:10px">${year}</p>
     <br/>
      <span style="color:${circle_color}">\u25CF</span> ${column} : <b>${value}</b>`;
  };

  const renderChart = () => {
    interface CustomPointOptionsObject extends Highcharts.PointOptionsObject {
      times: number;
    }
    
    const ydata: CustomPointOptionsObject[] = data.donation_people.people.map((e, i) => ({
      y: e,
      times: data.donation_people.time[i],
    }));

    Highcharts.setOptions({
      lang: {
        thousandsSep: ",",
      },
    });

    const series:SeriesOptionsType[]= [
      {
        type:'line',
        name: "총 헌혈자수(명)",
        yAxis: 1,
        color: "#54ADA3",
        marker: {
          enabled: false,
        },
        zoneAxis: "x",
        zones: setZone(),
        data: ydata,
      },
      {
        type:'line',
        name: "공급 혈액량(유닛)",
        yAxis: 0,
        color: "#FF9DA7",
        marker: {
          enabled: false,
        },
        data: data.blood_supply.values,
      },
    ]

    const options:Highcharts.Options = {
      exporting: {
        enabled: false,
      },
      credits: {
        href: "https://www.bloodinfo.net/main.do",
        text: " *데이터 출처: 대한적십자사 「혈액정보통계」 ",
        style: {
          color: "#707070",
        },
      },
      title: {
        text: "[ 공급 혈액량과 헌혈자수 추이 ]",
        align: "center",
        style: {
          fontSize: "13px",
        },
      },
      xAxis: {
        categories: Array.from(data.donation_people.year, number => String(number)),
      },
      plotOptions: {
        series: {
          lineWidth: 5,
        },
      },
      yAxis: [
        {
          labels: {
            formatter: function (){
              return this.value as number/ 1000000 + "M";
            },
          },
          title: {
            text: "공급혈액량(유닛)",
          },
        },
        {
          labels: {
            formatter: function () {
              return this.value as number / 1000 + "K";
            },
          },
          title: {
            text: "헌혈자 수(명)",
          },
          opposite: true,
        },
      ],
      legend: {
        y: -30,
        x: -80,
        layout: "vertical",
        align: "right",
        verticalAlign: "bottom",
        floating: true,
      },
      series:series,
      tooltip:{
        formatter: function (this: Highcharts.TooltipFormatterContextObject) {
          if(this.series.name==='공급 혈액량(유닛)'){
            return setTooltip({
              year: this.x as number,
              circle_color: this.point.color as string,
              column: this.series.name,
              value: Highcharts.numberFormat(this.point.y as number, 0),
            });
          }
          else{
            let time=(this.point.options as CustomPointOptionsObject).times;
            return setTooltip({
              year: this.x as number,
              circle_color: this.point.color as string,
              column: "인당 헌혈 횟수",
              value: `${time}회`
            }).concat(
              `<br/> ${this.series.name} : <b> ${Highcharts.numberFormat(
                this.point.y as number,
                0
              )}`
            )
          }
        }
      }
    };
    // 그래프 생성
    let chart_1=Highcharts.chart("chart-container", options);
  };

  return (
    <div>
      {/* 그래프를 렌더링할 컨테이너 */}
      <div id="chart-container"></div>
    </div>
  );
};

export default AMOUNT_BLOOD_SUPPLIED_NUMBER_DONORS;
