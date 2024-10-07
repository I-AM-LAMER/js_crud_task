import { Validators } from "../assist.js";

export default class cafeteria
{
    constructor({id = 'id', name = 'name', opening_time = 'time', closing_time = 'time'} = {})
    {
        this.id = id
        this.name = name
        this.opening_time = opening_time;
        this.closing_time = closing_time;
        Object.defineProperty(this, 'catalog', {
            value: [],
            enumerable: false
          });
    }

    changeWorktime(opening_time, closing_time){
        this.opening_time = opening_time
        this.closing_time = closing_time
    }

    addToCatalog(product){
        catalog.push(product)
    }

    deleteFromCatalog(product){
        this.catalog = this.catalog.filter((arg) => arg.name !== product.name)
    }
}