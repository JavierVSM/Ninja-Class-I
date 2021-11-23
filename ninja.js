function ninja(name, health) {
    this.name = name;
    this.health = health;
    this.speed=3;
    this.strength=3;
    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
    }
    this.showStats = function(){
        console.log("Name: "+ this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }
    this.drinkSake = function(){
      this.health = health+10;
    }
}


//TEST

var steve = new ninja("Steve", 27);
steve.sayName();
steve.showStats();
steve.drinkSake();
steve.showStats();

var anika = new ninja("Anika", 33);
anika.sayName();
anika.showStats();
anika.drinkSake();
anika.showStats();