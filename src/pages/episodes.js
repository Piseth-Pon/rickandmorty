import getAllEpisodes from "../api/getAllEpisodes.js"
import displayEpisodes from "../components/displayEpisodes.js"

let page = 1
window.addEventListener("DOMContentLoaded", async () => {
  let url = "https://rickandmortyapi.com/api/episode"

  let wrapper = document.querySelector(".episodes-wrapper")
  let episodes = await getAllEpisodes(url)
  displayEpisodes(wrapper, episodes)

  const title = document.querySelector(".section-title")
  title.textContent = `ALL EPISODES (${page}/3)`

  const btnGroup = document.querySelector(".btn-group")
  btnGroup.addEventListener("click", async (e) => {
    const btn = e.target

    if (btn.id == "nextBtn") {
      page = page + 1
      if (page > 3) {
        page = 3
        btn.disabled = true
      }
    }

    if (btn.id == "prevBtn") {
      page = page - 1
      if (page < 1) {
        page = 1
        btn.disabled = true
      }
    }


    let nextUrl = url + `?page=${page}`
    episodes = await getAllEpisodes(nextUrl)
    if (!episodes) {
      wrapper.innerHTML = `<h4>Some error occurred</h4>`
    } else {

      displayEpisodes(wrapper, episodes)
    }


    title.textContent = `ALL EPISODES (${page}/51)`


  })






})