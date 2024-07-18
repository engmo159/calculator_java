// myCities is an object from cityData.js file
const myH1 = document.querySelector('#header')
const myParagraph = document.querySelector('#paragraph')
const myImage = document.querySelector('#image')
const myDiv = document.querySelector('#cityDiv')

const changeDiv = city => {
  myDiv.classList.remove('hidden')
  const data = myCities[city]

  myH1.innerHTML = data.header
  myParagraph.innerHTML = data.paragraph
  myImage.attributes.src.nodeValue = data.src
}

const removeDiv = () => {
  myDiv.classList.add('hidden')
}
