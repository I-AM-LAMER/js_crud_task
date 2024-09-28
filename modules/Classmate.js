export default class classmate 
{
    constructor(name) {
        this.name = name;
        this.money = 0;
        this.supplies = []
    }

    addMoney(money) {
        this.money += money;
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