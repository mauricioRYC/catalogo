import { IsNumber, IsNumberString, IsString } from "class-validator";

export class Create {
    @IsString()
    curp: string;
    @IsNumber()
    documento:number
}

export class Params{
    @IsNumberString()
    id:number
}