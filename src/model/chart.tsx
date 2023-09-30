export interface Data {
    blood_supply: { year: number[], values: number[] },
    donation_people: { year: number[], people: number[], time: number[] },
}

export type Result={
    value:number,
    color:string
}[]


export type Tooltip={
    year:number,
    circle_color:string,
    column:string,
    value:string | object
}
