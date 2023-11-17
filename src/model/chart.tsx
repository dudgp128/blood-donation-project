export interface Data {
    blood_supply: { year: number[], values: number[] },
    donation_people: { year: number[], people: number[], time: number[] },
}

export type Result = {
    value: number,
    color: string
}[]


export type Tooltip = {
    year: number,
    circle_color: string,
    column: string,
    value: string | object
}

export type Titles = {
    titleContent: string;
    titleExplain: string;
}

export interface MapKorea {
    합계: string;
    서울: string;
    경기: string;
    충북: string;
    대전·세종·충남: string;
    전북: string;
    경남: string;
    광주·전남: string;
    부산: string;
    대구·경북: string;
    울산: string;
    인천: string;
    강원: string;
    제주: string;

    [key: string]: string; // Index signature
}


export interface Region_Data {
    data: { year: number[], region: string[], count: number[], percent: number[] };
}