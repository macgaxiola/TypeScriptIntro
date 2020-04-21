/* Traditional Mode
export class Telephone{

    model:string;
    price:string;
    brand:string;

    constructor(model:string, price:string ,brand:string){
        this.model = model;
        this.brand =brand;
        this.price = price;
    }
    
}
*/
/*
    Class Expression
*/
export class Telephone{
    constructor(public model:string,public price:string , public brand:string){
    }
}