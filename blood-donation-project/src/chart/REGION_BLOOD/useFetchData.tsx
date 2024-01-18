import { useState, useEffect } from "react";
import { Region_Data } from "../../model/chart";
import fetchData from "../base";

export const useDataFetching = () => {
  const [dataSet, setDataSet] = useState<Region_Data>({
    data: { year: [], region: [], count: [], percent: [] },
  });

  const fetchDataAndUpdate = async (
    filename: string,
    key: keyof Region_Data
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
    await fetchDataAndUpdate(
      "시·도별_인구대비_헌혈실적_20231116141055.csv",
      "data"
    );
  };

  useEffect(() => {
    fetchDataAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { dataSet };
};
