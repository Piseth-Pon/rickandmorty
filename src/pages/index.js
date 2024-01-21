import getAllCharacters from "../api/getAllCharacters.js"
import displayCharacters from "../components/displayCharacters.js"

let page = 1
window.addEventListener("DOMContentLoaded", async () => {
  let url = "https://rickandmortyapi.com/api/character"

  let characters = await getAllCharacters(url)
  let wrapper = document.querySelector(".characters-wrapper")
  displayCharacters(wrapper, characters)

  const title = document.querySelector(".section-title")
  title.textContent = `ALL CHARACTERS (${page}/42)`

  const btnGroup = document.querySelector(".btn-group")
  btnGroup.addEventListener("click", async (e) => {
    const btn = e.target

    // console.log(btn.id)
    if (btn.id == "nextBtn") {
      page = page + 1
      if (page > 42) {
        page = 42
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
    characters = await getAllCharacters(nextUrl)
    displayCharacters(wrapper, characters)

    title.textContent = `ALL CHARACTERS (${page}/42)`
  })




})