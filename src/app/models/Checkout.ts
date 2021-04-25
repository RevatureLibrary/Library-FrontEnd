import { Book } from "./Book";

export interface Checkout{
    id:number;
    checkoutDate:Date;
    returnDueDate:Date;
    book:string;
    fee:string;
    checkoutStatus:string;
    username?:string;

    // constructor(){}
}