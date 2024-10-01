import { Validators } from "../assist.js";

export default class product
{
    constructor(name, price, id){
        this.id = id
        this.name = name;
        try
        {
            Validators.checkMoney(price);
            this.price = price;
        }
        catch(e)
        {
            console.log(`ERROR: ${e}`)
        }
        
    }

}