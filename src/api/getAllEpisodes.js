async function getAllEpisodes(url) {

  try {
    let response = await fetch(url)
    let data = await response.json()

    return data.results
    
  } catch (error) {
    console.log("some error occurred")
  }

}

export default getAllEpisodes