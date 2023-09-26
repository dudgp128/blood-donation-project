import Papa from "papaparse";

const isRowCSV = (valueArray) => {
  return valueArray[0] === valueArray[1];
};

const rowCSV = (csv) => {
  let values = Object.values(csv[1]).filter(
    (value) => typeof value === "number"
  );
  return { values };
};

const columnCSV = (csv) => {
  const year = [];
  const people = [];
  const time = [];

  for (let i of csv) {
    let [year_data, people_data, time_data] = Array.from(Object.values(i));
    if (year_data && people_data && time_data) {
      year.push(year_data);
      people.push(people_data);
      time.push(time_data);
    }
  }

  return { year, people, time };
};

const fetchData = async (filename) => {
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
        data = isRowCSV(Object.values(csvData[0]))
          ? rowCSV(csvData)
          : columnCSV(csvData);
      },
    });
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
  }

  return data;
};

export default fetchData;
