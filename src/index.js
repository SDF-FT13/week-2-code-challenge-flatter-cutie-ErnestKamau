// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const characterBar = document.getElementById("character-bar")


    function displayName(characters){
        const characterName = document.createElement("span")
        characterName.classList.add("character-bar")
        characterName.textContent = characters.name

        characterBar.appendChild(characterName)
        
    }



    function getCharachters(){
        fetch('http://localhost:3000/characters')
        .then( (response) => response.json())
        .then( data => data.forEach(character =>displayName(character)) )
    }
    getCharachters()
























})