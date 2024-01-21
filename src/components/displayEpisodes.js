import displayCharactersImage from "./displayCharactersImage.js"

function displayEpisodes(wrapper, episodes) {
  wrapper.innerHTML = ``
  for (let i = 0; i < episodes.length; i++) {
    let episode = episodes[i]
    wrapper.innerHTML += `
    <div class="episode">
        <h2>${episode.name}</h2>
        <h5>${episode.air_date}</h5>
        <h3>${episode.episode}</h3>
        <h4>Characters casted in the episode</h4>
        <div class="casts-wrapper">
          ${displayCharactersImage(episode.characters)}
        </div>
    </div>
    `
  }
}

export default displayEpisodes