function displayCharacters(wrapper, characters) {
  wrapper.innerHTML = ``
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i]
    wrapper.innerHTML += `
    <div class="character">
        <div class="cover">
          <img src="${character.image}" alt="">
        </div>
        <div class="detail">
          <h4>${character.name}</h4>
          <p>${character.status} - ${character.species}</p>
          <div class="location">
            <p class="label">Last known location</p>
            <p><a href="#">${character.location.name}</a></p>
          </div>
          <div class="origin">
            <p class="label">First seen in</p>
            <p><a href="#">${character.origin.name}</a></p>
          </div>
          <div class="eps">
            <p class="label">Episodes</p>
            <p>${character.episode.length}</p>
          </div>
        </div>
    </div>
    `
  }
}

export default displayCharacters