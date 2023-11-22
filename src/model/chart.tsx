export interface Data {
  blood_supply: { year: number[]; values: number[] };
  donation_people: { year: number[]; people: number[]; time: number[] };
}

export type Result = {
  value: number;
  color: string;
}[];

export type Tooltip = {
  year: number;
  circle_color: string;
  column: string;
  value: string | object;
};

export type Titles = {
  titleContent: string;
  titleExplain: string;
};

export interface MapKorea {
  "kr-so": string;
  "kr-kg": string;
  "kr-gb": string;
  "kr-gn": string;
  "kr-cb": string;
  "kr-kn": string;
  "kr-2685": string;
  "kr-pu": string;
  "kr-2688": string;
  "kr-ul": string;
  "kr-in": string;
  "kr-kw": string;
  "kr-cj": string;

  [key: string]: string; // Index signature
}

export interface Region_Data {
  data: {
    year: number[];
    region: string[];
    count: number[];
    percent: number[];
    [key: string]: number[] | string[];
  };
}
