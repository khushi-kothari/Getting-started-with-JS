function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;  //it's value is id- rock/paper/scissors
    
    botChoice = stringNum(picksNum()); //it shall be a random no linked to rps array 
    console.log('Computer Choice:', botChoice);
    
    results = declareResults(humanChoice, botChoice); //[0,1]
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsEndGame(yourChoice.id, botChoice, message);
}

//this is for choosing a random no. from 0/1/2 for botChoice
function picksNum() {
    return Math.floor(Math.random()*3);
}

//this is for linking arrays to those random nos
function stringNum(number) {
    return ['Rock', 'Paper', 'Scissors'][number];
}


function declareResults(yourChoice, computerChoice) {
    var rpsDatabase = {
   'Rock': {'Scissors' : 1, 'Paper' : 0, 'Rock' : 0.5},
   'Paper': {'Scissors' : 0, 'Paper' : 0.5, 'Rock' : 1},
   'Scissors': {'Scissors' : 0.5, 'Paper' : 1, 'Rock' : 0},
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage ([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': "You Lost!", 'color': 'red'};
    }
    else if (yourScore === 0.5) {
        return {'message': "You Tied..", 'color':'Yellow'};
    }
    else {
        return {'message':"You Won!", 'color': 'Green'};
    }
}

function rpsEndGame(humanImageChoice, botImageChoice, finalMessage) {
    var imageRps= {
    'Rock': document.getElementById('Rock').src,
    'Paper': document.getElementById('Paper').src,
    'Scissors': document.getElementById('Scissors').src
    }

    //removes all the images
    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissors').remove();

    //diplay yourimage, botimage and message
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageRps[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageRps[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-container-3').appendChild(humanDiv);
    document.getElementById('flex-box-container-3').appendChild(messageDiv);
    document.getElementById('flex-box-container-3').appendChild(botDiv);
}