function displayCharactersImage(characters) {
  let html = ``

  for (let i = 0; i < characters.length; i++) {
    let character = characters[i]
    let index = character.split("/")[5]
    html += `
    <div class="cast">
      <img src="https://rickandmortyapi.com/api/character/avatar/${index}.jpeg" alt="">
    </div>
    `
  }


  return html
}

export default displayCharactersImage