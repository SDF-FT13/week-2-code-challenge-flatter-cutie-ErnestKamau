// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const characterBar = document.getElementById("character-bar")


    function displayName(characters){
        const characterName = document.createElement("span")
        characterName.classList.add("character-bar")
        characterName.textContent = characters.name

        characterBar.appendChild(characterName)



        characterName.addEventListener("click", (events) => {
            const nameDisplay = document.getElementById("name")
            const image = document.getElementById("image")

            nameDisplay.textContent = characters.name
            image.src = characters.image
            image.alt = characters.name
        })

    }



    function getCharachters(){
        fetch('http://localhost:3000/characters')
        .then( (response) => response.json())
        .then( data => data.forEach(character =>displayName(character)) )
    }
    getCharachters()
























})