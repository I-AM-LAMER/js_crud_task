import { Validators } from "../assist.js";

export default class classmate 
{
    constructor({id = 'id', name = 'name', money = '0'} = {}) {
        Validators.checkMoney(Number(money))
        this.id = id;
        this.name = name;
        this.money = money;
        Object.defineProperty(this, 'supplies', {
            value: [],
            enumerable: false
          });
    }

    addMoney(money) {
        Validators.checkMoney(money)
        this.money = (Number(this.money) + Number(money)).toString();
        console.log(`${this.name} received ${money}$. Balance: ${this.money}$`);
    }

    buyFood(food){
        if (this.money > price){
            this.money -= price;
            this.supplies.push(food)
            console.log(`${this.name} bought ${food.name} for ${food.price}$. Balance: ${this.money}$`)
        }else{
            console.log(`${this.name} doensn't have enough money to buy ${food.name} for ${food.price}$. Balance: ${this.money}$`)
        }
    }
}