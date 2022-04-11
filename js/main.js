//The user will enter a piece of art in Animal Crossing: New Horizons. Get a name, photo, and details and place them in the DOM


document.querySelector('button').addEventListener('click', getArt)

function getArt() {
  let userInput = document.querySelector('input').value.split(' ').join('_')


  fetch(`https://acnhapi.com/v1/art`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    if (Object.keys(data).indexOf(userInput) == -1 ) {
      alert("Wrong Input")
      return
    }
    document.querySelector('h2').innerText = data[userInput]['file-name']
    document.querySelector('img').src = data[userInput].image_uri
    document.querySelector('#hasFake').innerText = data[userInput].hasFake
    document.querySelector('#buyPrice').innerText = data[userInput]['buy-price']
    document.querySelector('#sellPrice').innerText = data[userInput]['sell-price']
    document.querySelector('#description').innerText = data[userInput]['museum-desc']


})
}