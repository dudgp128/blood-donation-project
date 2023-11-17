import Papa from "papaparse";

const columnCSV = (csv, keys) => {
  const csv_Array = csv.map((row) => Array.from(Object.values(row)));

  // 같은 칼럼(index)의 요소들을 묶은 배열을 만듭니다.
  const groupedArray = csv_Array[0].map((_, index) => {
    return csv_Array.map((subArray) => subArray[index]);
  });

  const obj = {};

  keys.forEach((key, index) => {
    obj[key] = groupedArray[index];
  });
  return obj;
};

const fetchData = async (filename, keys) => {
  let csvData = [];
  let data = [];
  try {
    const response = await fetch(process.env.PUBLIC_URL + "/data/" + filename);

    const csvText = await response.text();

    Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        csvData = result.data;
        data = columnCSV(csvData, keys);
      },
    });
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
  }

  return data;
};

export default fetchData;
