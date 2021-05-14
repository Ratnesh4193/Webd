function handleClick() {
    alert("clicked");
}


let arr = document.querySelectorAll("button.drum")
//arr[0].classList.add("w")
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
        var path = 'sounds/' + this.innerHTML + '.mp3'
        var audio = new Audio(path);
        audio.play();
        flash(arr[i].innerHTML);
    })

}
document.addEventListener("keypress", function (event) {
    var path = 'sounds/' + event.key + '.mp3'
    var audio = new Audio(path);
    audio.play();
    flash(event.key);
})

function flash(btn) {
    let cla='.'+btn
    console.log(cla)
    document.querySelector(cla).classList.add("pressed") 
     setTimeout(function(){
         document.querySelector(cla).classList.remove("pressed") 
     },100);
//    document.querySelector(btn).style.width=170px

}
