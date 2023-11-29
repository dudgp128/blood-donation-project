import { useState, useEffect } from "react";
import { Data } from "../../model/chart";
import fetchData from "../base";

export const useDataFetching = () => {
  const [dataSet, setDataSet] = useState<Data>({
    blood_supply: { year: [], values: [] },
    donation_people: { year: [], people: [], time: [] },
  });

  const fetchDataAndUpdate = async (
    filename: string,
    key: keyof Data
  ): Promise<void> => {
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
    await fetchDataAndUpdate("혈액공급실적_20230927200132.csv", "blood_supply");
    await fetchDataAndUpdate("헌혈자_수_20230925212741.csv", "donation_people");
  };

  useEffect(() => {
    fetchDataAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { dataSet };
};
