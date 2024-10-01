import { Validators } from "../assist.js";

export default class cafeteria
{
    constructor(id)
    {
        this.id = id
        this.catalog = [];
        this.worktime = {
            "start": "9:00",
            "end": "17:30"
        }
    }

    changeWorktime(worktime){
        //TODO: finish when enshure in type of response
    }

    addToCatalog(product){
        catalog.push(product)
    }

    deleteFromCatalog(product){
        this.catalog = this.catalog.filter((arg) => arg.name !== product.name)
    }
}