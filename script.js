const character = document.getElementById("character");
const block = document.getElementById("block");

// function for making the character jump 
const jump = () => {
    if(character.classList!="animate")
        character.classList.add("animate");
    setTimeout(() => {
        character.classList.remove("animate");
    }, 500);

}

var checkGameOver = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).
        getPropertyValue("top"));
    
     var blockLeft = parseInt(window.getComputedStyle(block).
         getPropertyValue("left"));
    
    if (blockLeft < 20 && blockLeft > 0 && (characterTop >= 130)) alert("Boom You lost");
    
}, 10);


document.addEventListener("click", () => jump());
document.addEventListener("keydown",()=>jump());


