class Die {
    constructor(value) {  
        // this.div = document.createElement('div');
        // this.div.innerText = randomVal();
        // this.div.className = 'die'
        // container.appendChild(this.div);

        // this.div.addEventListener('click',() => {
        //     console.log(this);
               
        // });
        this.div = document.createElement('div');
        container.appendChild(this.div);
        this.div.className = 'die'
        this.roll();
    }  
    roll() {
        //determines value of the dice
        //console.log('hello');
        this.div.innerText = randomVal();
    }
}

let generateBtn = document.getElementById('start-btn');
let someBtn = document.getElementById('sum-btn');
generateBtn.addEventListener('click', function() {
    new Die();
})
// someBtn.addEventListener('click', function() {

// })

function randomVal() {
    return Math.floor(Math.random()*6)+1;
}

function sumDice() {


}

