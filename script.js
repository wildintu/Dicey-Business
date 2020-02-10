let generateBtn = document.getElementById('start-btn');
let someBtn = document.getElementById('sum-btn');
let counter = 0;

class Die {
    constructor() {
        this.div = document.createElement('div');
        this.value = document.createTextNode(counter);
        this.render();
        this.roll();
        this.addEventsYo();
    }

    addEventsYo(){
        this.div.addEventListener('click', () => this.div.style.backgroundColor = this.randomColor());
        this.div.addEventListener('dblclick', () => this.destroyDie());

    }

    roll() {
        //determines value of the dice
        let randomVal = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = randomVal;
    }

    render() {
        this.div.className = 'die'
        this.div.id = counter;
        container.appendChild(this.div);
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }


    destroyDie() {
        if (this.id % 2 === 0) {
            if (this.div.nextSibling) {
                this.div.nextSibling.remove();
            } else {
                alert('Square does not exist!');
            }
        } else {
            if (this.div.previousSibling) {
                this.div.previousSibling.remove();
            } else {
                alert('Square does not exist!');
            }
        }
    }
}

generateBtn.addEventListener('click', function () {
    new Die();
    counter++;
})

//sumBtn.addEventListener('click, function() {

//})


// function sumDice() {


// }



