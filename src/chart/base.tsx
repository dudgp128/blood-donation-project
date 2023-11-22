import Papa, { ParseResult } from "papaparse";

interface ColumnData {
    [key: string]: any[];
  }

const fetchData =async (filename:string, keys:string[]): Promise<ColumnData> => {
    let csvData:any[]=[];
    let processedData:ColumnData={};

    try {
        const response = await fetch(process.env.PUBLIC_URL + "/data/" + filename);

        const csvText=await response.text();

        Papa.parse(csvText, {
            header: true,
            dynamicTyping: true,
            complete: (result: ParseResult<any>) => {
              csvData = result.data;
              processedData = extractColumnData (csvData, keys);
            },
          });
    } catch (error) {
        console.error("데이터 가져오기 오류:", error);
    }
    return processedData;
}



const extractColumnData =(csv : any[], keys:string[])=>{
    const csvArray = csv.map((row)=>Array.from(Object.values(row)));

    const groupedArray=csvArray[0].map((_, index)=>{
        return csvArray.map((subArray)=>subArray[index]);
    })

    const columnData: ColumnData = {};

    keys.forEach((key, index) => {
        columnData[key] = groupedArray[index];
    });

    return columnData;
}

export default fetchData;