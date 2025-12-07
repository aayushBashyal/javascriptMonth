// Dice Class
class Dice {
    constructor(sides = 6) {
        this.sides = sides;
        this.rolled = false;
    }

    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
    
    getImage(rollValue){
        return `images/dice${rollValue}.png`;
    }

}


// Player Class 
class Player{

    constructor(imageSelector){
        this.imageElement = document.querySelector(imageSelector);
        this.dice = new Dice(6);
        this.score = 6 ;
    }

    playTurn(){
        this.score = this.dice.roll();
        this.imageElement.setAttribute("src", this.dice.getImage(this.score));
    }

    reset(){
        this.score = 6;
        this.imageElement.setAttribute("src", "images/dice6.png");
    }
}

// variables 
const result = document.querySelector("footer");


// Scalable player array 
const players = [
    new Player(".img1"),
    new Player(".img2")
]

function determineWinner(){
    players.forEach(player => { player.playTurn();  });

    const [p1, p2] = players;

    if (p1.score > p2.score) {
        result.innerHTML = "🚩 Player 1 Wins!";
    } else if (p2.score > p1.score) {
        result.innerHTML = "Player 2 Wins! 🚩";
    } else {
        result.innerHTML = "Draw!";
    }
}

function resetGame(){
    players.forEach(player => { player.reset(); });
    result.innerHTML = "Khel Shuru Kiya Jaye!";
}

// Add onclick events
document.querySelector("h1").onclick = determineWinner;
document.querySelector(".reset").onclick = resetGame;

// run 
determineWinner();