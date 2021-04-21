import { Book } from "./Book";

export class Checkout{
    id!:number;
    checkoutDate!:Date;
    returnDueDate!:Date;
    book!:Book;
    
}