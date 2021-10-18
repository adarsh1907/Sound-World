//Detecting Button Click
var numOfAnimals=document.querySelectorAll(".animal").length;
for(var i=0;i<numOfAnimals;i++){
    document.querySelectorAll(".animal")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
//Detecting Key Press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "Cat":
        case "c":
                var cat=new Audio('sound/cat.wav');
                cat.play();
                break;
        case "Dog":
        case "d":
                var dog=new Audio('sound/dog.wav');
                dog.play();
                break;
        case "Elephant":
        case "e":
                var elephant=new Audio('sound/elephant.mp3');
                elephant.play();
                break;
        case "Frog":
        case "f":
                var frog=new Audio('sound/frog.mp3');
                frog.play();
                break;
        case "Goat":
        case "g":
                var goat=new Audio('sound/goat.mp3');
                goat.play();
                break;
        case "Horse":
        case "h":
                var horse=new Audio('sound/horse.wav');
                horse.play();
                break;
        case "Lion":
        case "l":
                var lion=new Audio('sound/lion.wav');
                lion.play();
                break;
        case "Parrot":
        case "p":
                var parrot=new Audio('sound/parrot.wav');
                parrot.play();
                break;
        default:
                console.log(buttonInnerrHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}