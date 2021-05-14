gamePattern = []
userPattern = []
buttonColors = ["red", "blue", "green", "yellow"]

flag = 0;

function pressedAnimation(pressedColor) {
    q = "#" + pressedColor;
    $(q).addClass('pressed')
    setTimeout(function () {
        $(q).removeClass('pressed')
    }, 100)
}

function nextSequence() {
    //    if(flag==0)
    let randomNum = Math.floor(Math.random() * 4)
    let randomColor = buttonColors[randomNum]
    gamePattern.push(randomColor) // add color to game pattern
    q = "#" + randomColor;
    $('#level-title').text("Level " + gamePattern.length);

    pressedAnimation(randomColor) //make button press animation


    let soundPath = 'sounds/' + randomColor + '.mp3'
    let audio = new Audio(soundPath)
    audio.play()

    //    console.log(gamePattern)

}

function wrongPress() {
    $('body').addClass("game-over")
    setInterval(() => {
        $('body').removeClass("game-over")
    }, 100)
    $('#level-title').text("GAME-OVER Press any key to restart");
    gamePattern = []
    userPattern = []
    let soundPath = 'sounds/wrong.mp3'
    let audio = new Audio(soundPath)
    audio.play()
    gameStart = false
}
gameStart = false
$(document).keypress(function () {
    if (gameStart == false) {
        nextSequence()
        gameStart = true
    }
})

for (i = 0; i < 4; i++) {
    $("." + buttonColors[i]).click(function () {

        pressedColor = this.id;
        let ind = userPattern.length

        if (gamePattern[ind] != pressedColor) {
            wrongPress()
            return;

        } else {
            pressedAnimation(pressedColor)
            let soundPath = 'sounds/' + pressedColor + '.mp3'
            let audio = new Audio(soundPath)
            audio.play()
        }
        userPattern.push(pressedColor)
        //        console.log(userPattern)
        if (gamePattern.length == userPattern.length) {
            userPattern = []
            setTimeout(nextSequence, 1000)
        }
    })
}
