export class Book {
    id!:number;
    title!:string;
    author!:string;
    isbn!:string;
    publisher!:string;
    condition!:string;
    bookStatus!:string;
    departments!:string[];

    constructor(obj?:any){
        obj && Object.assign(this, obj);
    }

    compare(book:Book):number{
        if(this.title < book.title){
            return -1;
        }
        return 1;
    }
}