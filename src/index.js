// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const characterBar = document.getElementById("character-bar")
    const myForm = document.getElementById("votes-form")
    const inputField = document.getElementById("votes")
    const voteDisplay = document.getElementById("vote-count")

    let characterSelected = null
    let votes = {}


    function displayName(characters){
        const characterName = document.createElement("span")
        characterName.classList.add("character-bar")
        characterName.textContent = characters.name

        characterBar.appendChild(characterName)


        if (votes[characters.name] === undefined){
            votes[characters.name] = 0
        }


        characterName.addEventListener("click", (events) => {
            characterSelected = characters
            const nameDisplay = document.getElementById("name")
            const image = document.getElementById("image")

            nameDisplay.textContent = characters.name
            image.src = characters.image
            image.alt = characters.name
            voteDisplay.textContent = votes[characters.name]
        })


        myForm.addEventListener("submit", (events) => {
            events.preventDefault()

            if (characterSelected === undefined){
                alert ("Select a character first!")
                return
            }

            const newVotes = parseInt(inputField.value, 10) || 0
            votes[characterSelected.name] += newVotes
            voteDisplay.textContent = votes[characterSelected.name]

            myForm.reset() 
        })
    }




    function getCharachters(){
        fetch('http://localhost:3000/characters')
        .then( (response) => response.json())
        .then( data => data.forEach(character =>displayName(character)) )
    }
    getCharachters()

})