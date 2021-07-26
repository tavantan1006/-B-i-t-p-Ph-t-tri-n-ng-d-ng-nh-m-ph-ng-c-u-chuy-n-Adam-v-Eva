let myApple = function (weight) {
    this.weight = weight;

    this.getWeight = function () {
        return this.weight;
    }
    this.decrease = function () {
        this.weight = this.weight - 1;
    }
    this.isEmpty = function () {
        if (this.weight > 0) {
            return true;
        } else {
            return false;
        }
    }
}
let myHuman = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.isMale = function (){
        return gender;
    }
    this.setGender = function (gender){
        this.gender = gender;
    }
    this.getName = function (){
        return this.name;
    }
    this.setName = function (name){
        this.name = name;
    }
    this.getWeight = function (){
        return this.weight;
    }
    this.setWeight = function (weight){
        this.weight = weight;
    }
    this.checkApple = function (Apple){
        return Apple.isEmpty();
    }
    this.eat = function (Apple){
        if (apple.getWeight() > 0){
            Apple.decrease();
        }else {
            alert("hết táo !!");
        }

    }
    this.say = function (human,say){
        alert( human.getName() +" say : " + say);
    }
}
let apple = new myApple(10);
let adam = new myHuman("Adam",true,60);
let eva = new myHuman("Eva",false,60);
for (let i = 0; i <5; i++) {
    if (apple.getWeight() > 0){
        adam.eat(apple);
        alert(apple.getWeight());
        adam.say("Anh ăn 1 miếng !!");
        eva.eat(apple);
        eva.say("Em ăn 1 miếng !!");
        alert(apple.getWeight());
    }else {
        alert("Hết táo rồi !!");
    }

}
