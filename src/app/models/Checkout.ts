import { BookInterface } from "./BookInterface";

export interface Checkout{
    id:number;
    checkoutDate:Date;
    returnDueDate:Date;
    book:BookInterface;
    fee:string;
    checkoutStatus:string;
    username?:string;

    // constructor(){}
}