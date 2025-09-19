const searchBtn = document.getElementById("search-btn"); // search button
const inputField = document.querySelector("textarea"); // search field input
const nameScreen = document.getElementById("name-screen"); //name-screen
const imageScreen = document.getElementById("main-screen"); // image screen
const aboutScreen = document.getElementById("about-screen"); // about-text screen
const typeScreen = document.getElementById("type-screen"); // type screen
const idScreen = document.getElementById("id-screen"); // id-screen

function generateImage(prompt){
  fetch("/generate-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    })
  .then(data=>data.json())
  .then(url=>{
    let pokemonURL = url.backgroundRemoved

    updateImage(pokemonURL)
    updateLoadingScreen("Video Loading!")
    generateVideo(prompt, pokemonURL)

  })
}

function generateVideo(prompt, imageURL){
fetch("/generate-video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({  prompt, imageURL })
    })
  .then(data=>data.json())
  .then(url=>{
    updateVideo(url.url)
    stopAudio()
    updateLoadingScreen("Video Done")
    updateLoader("Done")
  })
}











searchBtn.onclick = ()=>{
    if (inputField.value!=="") {
    const userInput = inputField.value
    clearScreens()
    generateImage(userInput)
    }
}

const updateImage = (url)=>{imageScreen.style.backgroundImage=`url(${url})`}
const updateVideo = (url)=>{
  imageScreen.innerHTML=`<video autoplay width="100%" height="100%" id="myVideo">
  <source src="${url}" type="video/mp4">
</video>`
}
const updateLoadingScreen = text => aboutScreen.innerHTML = text
const updateLoader = text => nameScreen.innerHTML = text

const clearScreens = ()=>{
    idScreen.innerHTML = ""
    typeScreen.innerHTML = ""
    inputField.value = ""
    imageScreen.innerHTML = ""
    updateLoader("Loading!")
    updateLoadingScreen("Image Loading!")
    updateImage("https://shawncharles.com/images/pokemon.gif")
}

function stopAudio(){
  setTimeout(()=>{
  const element = document.querySelector("video")
  element.onended = ()=>{
    element.loop=true
    element.muted=true
    element.play()
  }
},7000)
}