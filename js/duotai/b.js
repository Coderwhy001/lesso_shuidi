var makeSound = function(animal){
    animal.say(); //面向对象的优化
}
var Duck = function() {};
Duck.prototype.say = function(){
        console.log('嘎嘎嘎');
}
var chicken = function() {};
Chicken.prototype.say = function(){
    console.log('咯咯咯');
}
makeSound(new chicken());
