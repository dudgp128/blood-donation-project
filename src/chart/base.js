import Papa from "papaparse";

const fetchData = async (filename) => {
  let csvData = [];
  try {
    const response = await fetch(process.env.PUBLIC_URL + "/data/" + filename);

    const csvText = await response.text();

    Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        csvData = result.data;
      },
    });
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
  }

  return csvData;
};

export default fetchData;
