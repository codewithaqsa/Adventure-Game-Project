import inquirer from "inquirer";

class Player {
    name :string;
    fuel :number=100;
    constructor(name:string){
        this.name = name;
    };
    fuelDecreases() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease () {
        this.fuel = 100
    }

}
class Oponent {
    name :string;
    fuel :number=100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecreases() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
let player = await inquirer.prompt([
    {
        name : "name",
        type : "input",
        message : "Please Enter your Name: "
    }
])
let oponent = await inquirer.prompt([
    {
        name :"name",
        type :"input",
        message :"Please Enter your Name:",
        choices : ["Skeleton","Alien","Zombie"]
    }
])
let p1 = new Player(player.name)
let o1 = new Oponent(oponent.select)

do {
    if (oponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name :"opt",
                type :"list",
                message :"What will you like to do?",
                choices : ["Attack","Drink Portion","Runaway.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num =Math.floor(Math.random() * 2)
            if(num > 0) {
                p1.fuelDecreases()
                console.log(`${p1.name}  fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
            if (num <= 0) {
                o1.fuelDecreases()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease()
            console.log(`You Drink your Health Portion Your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Runaway") {
            console.log("You Loose, Better Luck Next Time.");
        }
         
    }
}
while (true)
    

