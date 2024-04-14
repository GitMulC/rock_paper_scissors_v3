let start = document.getElementById('start');
let guess = document.getElementById('guess');
let restart = document.getElementById('restart');

let player = document.getElementById('player-score');
let comp = document.getElementById('computer-score');

let player_w = document.getElementById('player-win');
let player_l = document.getElementById('player-lose');

let comp_w = document.getElementById('comp-win');
let comp_l = document.getElementById('comp-lose');

let draw = document.getElementById('draw');

var tally_player = 0;
var tally_comp = 0;

start.addEventListener('click', function (){
    var val = document.getElementById('guess').value;
    val = parseInt(val);
    if (val>3 || val<1 || isNaN(val)){
        alert('Please select a valid number between 1 & 3')
    } else {
        game(val);
    }
});

restart.addEventListener('click', function (){
    tally_comp = 0;
    tally_player = 0;
    player.innerHTML = tally_player;
    comp.innerHTML = tally_comp;
    start.classList.remove('hide');
    restart.classList.add('hide');
    player_l.classList.add('hide');
    player_w.classList.add('hide');
    comp_l.classList.add('hide');
    comp_w.classList.add('hide');
    draw.classList.add('hide');
});

function game(num){
    var computer = Math.floor(Math.random() * 3) + 1;
    
    console.log(num);
    console.log(computer);
    if (num == computer){
        tally_comp ++;
        tally_player ++;
    } else if (num == 1 && computer == 2){
        tally_comp ++;
    } else if (num == 2 && computer == 3){
        tally_comp ++;
    } else if (num == 3 && computer == 1){
        tally_comp ++;
    } else if (computer == 1 && num == 2){
        tally_player ++;
    } else if (computer == 2 && num == 3){
        tally_player ++;
    } else if (computer == 3 && num == 1){
        tally_player ++;
    }

    player.innerHTML = tally_player;
    comp.innerHTML = tally_comp;

    if (tally_player == 3){
        player_w.classList.remove('hide');
        comp_l.classList.remove('hide');
        start.classList.add('hide');
        restart.classList.remove('hide');
    } else if (tally_comp == 3){
        comp_w.classList.remove('hide');
        player_l.classList.remove('hide');
        start.classList.add('hide');
        restart.classList.remove('hide');
    } else if (tally_comp == 3 && tally_player == 3){
        draw.classList.remove('hide');
        start.classList.add('hide');
        restart.classList.remove('hide');
    }

    
}
