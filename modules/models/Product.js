import { Validators } from "../assist.js";

export default class product
{
    constructor({id = 'id', name = 'name', price = '0'} = {}){
        this.id = id;
        this.name = name;
        try
        {
            Validators.checkMoney(Number(price));
            this.price = price;
        }
        catch(e)
        {
            console.log(`ERROR: ${e}`)
        }
        
    }

}