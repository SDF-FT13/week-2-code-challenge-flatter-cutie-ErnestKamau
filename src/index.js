// Your code here
document.addEventListener("DOMContentLoaded", () => {
    //Render DOM elements
    function displayName(characters){
        const characterBar = document.getElementById("character-bar")
        //const characterName = document.createElement("span")
        characterBar.innerHTML = `
        <span> ${characters.name} </span>
        `
        //characterBar.appendChild(characterName)
    }



    //fetch Request
    function getCharachters(){
        fetch('http://localhost:3000/characters')
        .then( (response) => response.json())
        .then( data => data.forEach(character =>displayName(character)) )
    }
    getCharachters()
























})