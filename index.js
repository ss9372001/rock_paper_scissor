
//  Initializing player score and computer score
var humanScore=0;
var computerScore=0;

//  Adding click event for each selection by the player
document.querySelectorAll('.btn').forEach(item => {
    var k=item.id;
    item.addEventListener('click', function(item) {
        play(k);
    });

});

//  Defining function to play the game
function play(humanChoice) {
    var human_choice = humanChoice;
    var computer_choice = randomSelection();
    const intervals_heading = document.getElementById("intervals");

    console.log(human_choice);
    console.log(computer_choice);
    if(human_choice==computer_choice) {
        //  The choice is same. So, it's a tie!!
        intervals_heading.innerHTML="It is a Tie";
    } else {
        //  If the choice is not same, call other function to compare between player choice and computer choice!
        return compare(human_choice,computer_choice);
    }
}


//  Defining function to compare
function compare(human_choice,computer_choice) {
    var human_score = document.getElementById("human__scorecard");
    var computer_score = document.getElementById("computer__scorecard");
    const intervals_heading = document.getElementById("intervals");

    //  Comparing the choices
    if(human_choice==='rock') {
        if(computer_choice==='scissor') {
            humanScore++;
            intervals_heading.innerHTML = "You win!";
        } else if(computer_choice==='paper') {
            computerScore++;
            intervals_heading.innerHTML = "You lost!";
        }
    } else if(human_choice==='paper') {
        if(computer_choice==='scissor') {
            computerScore++;
            intervals_heading.innerHTML = "You lost!";
        } else if(computer_choice==='rock') {
            humanScore++;
            intervals_heading.innerHTML = "You win!";
        }
    } else if(human_choice==='scissor') {
        if(computer_choice==='rock') {
            humanScore++;
            intervals_heading.innerHTML = "You win!";
        } else if(computer_choice==='paper') {
            computerScore++;
            intervals_heading.innerHTML = "You lost!";
        }
    }

    //  Setting the new scores!
    human_score.innerHTML = humanScore;
    computer_score.innerHTML = computerScore;
    //  Calling function to get the winner
    getWinner(humanScore, computerScore);

}

//  Defining the function to pick the winner
function getWinner(humanScore, computerScore) {
    var end_head = document.getElementById("end_head");
    var disappear = document.getElementById("disappear");
    var main = document.getElementById("main_content");

    if((humanScore!=5)&&(computerScore==5)) {
        main.style.display="none";
        disappear.style.display="block";
        end_head.innerHTML="You Lost, Let's Try Again!";
        
    } else if((humanScore==5)&&(computerScore!=5)) {
        main.style.display="none";
        disappear.style.display="block";
        end_head.innerHTML="congratulations, You Won!!";
        
    }
}

//  Defining function to call the random selection of computer
function randomSelection() {
    var randomNum = Math.floor(Math.random()*3);
    switch(randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor"; 
    }
}

//  Initializing retry button
var retry = document.getElementById("retry");

retry.addEventListener('click', function() {

    window.location.reload(true);
})