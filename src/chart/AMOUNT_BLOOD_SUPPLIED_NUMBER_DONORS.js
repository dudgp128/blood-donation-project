import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import fetchData from "./base";
import { useEffect, useState } from "react";
import { Fragment } from "react";

const AMOUNT_BLOOD_SUPPLIED_NUMBER_DONORS = () => {
  const [data, setData] = useState({
    blood_supply: [],
    donation_people: [],
  });

  const fetchDataAndUpdate = async (filename, key) => {
    try {
      const result = await fetchData(filename);
      setData((prevData) => ({ ...prevData, [key]: result }));
    } catch (error) {
      console.error(`데이터 가져오기 오류 (${key}):`, error);
    }
  };

  const fetchDataAsync = async () => {
    await fetchDataAndUpdate(
      "헌혈실적_대비_수혈용_혈액공급실적_추이_20230925213209.csv",
      "blood_supply"
    );
    await fetchDataAndUpdate("헌혈자_수_20230925212741.csv", "donation_people");
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  });
  const options = {
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
      categories: data.donation_people.year,
    },
    plotOptions: {
      series: {
        lineWidth: 5,
      },
    },
    yAxis: [
      {
        labels: {
          formatter: function () {
            return this.value / 1000000 + "M";
          },
        },
        title: {
          text: "공급혈액량(유닛)",
        },
      },
      {
        labels: {
          formatter: function () {
            return this.value / 1000 + "K";
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
    series: [
      {
        name: "총 헌혈자수(명)",
        yAxis: 1,
        marker: {
          enabled: false,
        },
        zoneAxis: "x",
        color: "#54ADA3",
        data: data.donation_people.people,
      },
      {
        name: "공급 혈액량(유닛)",
        yAxis: 0,
        color: "#FF9DA7",
        marker: {
          enabled: false,
        },
        data: data.blood_supply.values,
      },
    ],
  };

  return (
    <Fragment>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Fragment>
  );
};

export default AMOUNT_BLOOD_SUPPLIED_NUMBER_DONORS;
