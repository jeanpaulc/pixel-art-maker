document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('title').innerText = 'Pixel Art Maker'

  let body = document.querySelector('body')

  buildTableGrid(20, 20)
  function buildTableGrid(width, height) {
    let table = document.createElement('table')
    body.appendChild(table)
    // create table rows based on height parameter
    for (let i = 0; i < height; i++) {
      let tr = document.createElement('tr')
      tr.setAttribute('class', "row")
      table.appendChild(tr)
      // create table cells based on width parameter
      for (let j = 0; j < width; j++) {
        let td = document.createElement('td')
        //grid "pixels" will default to a white background
        td.setAttribute('class', "pixel white")
        tr.appendChild(td)
      }
    }
  }

  let primaryColors = ["white", "black", "red", "yellow", "blue", "green"]

  buildColorPallet(primaryColors)
  function buildColorPallet(colors) {
    //create a div that will hold all the pallet's
    let pallet = document.createElement('div')
    pallet.setAttribute('id', "pallet")
    body.appendChild(pallet)

    //distribute paint swatch colors to pallet based on input array
    for (let i = 0; i < colors.length; i++) {
      let paint = document.createElement('div')
      paint.setAttribute('class', `paint ${colors[i]}`)
      pallet.appendChild(paint)
    }
    // create text and a div to show which color has been picked
    let indicator = document.createElement('div')
    indicator.setAttribute('id', `indicator`)

    let indText = document.createElement('h1')
    indText.setAttribute('id', `indText`)
    indText.innerText = "Color"

    let indSwatch = document.createElement('div')
    indSwatch.setAttribute('id', `indSwatch`)

    body.appendChild(indicator)
    indicator.appendChild(indText)
    indicator.appendChild(indSwatch)
  }

  let color;
  function colorPicked(event) {
    console.log("EVENT.TARGET= ", event.target);
    // console.log("THIS= ", this);

    //color from the div's paintswatch class-list
    color = event.target.classList[1]
    console.log("Color Picked: ",color);

    if (color === undefined){
      color = "white"
      return
    }
    return
  }

  let colorPallet = document.getElementById('pallet')
  colorPallet.addEventListener('click', colorPicked) //<-- Color Picker

  function paintPixel(event) {
    console.log("Event.target: ", event.target);
    // console.log("This: ", this);
    pxSelect = event.target

    if (color === undefined){
      return
    }
    // if (pxSelect.classList.contains(color)) {
    //   pxSelect.classList.replace(`${color}`, `${color}`)
    //   console.log(`pixel color is: ${color}`)
    // }
    // If the current pixel is white (blank) change it to the picked color
    if (pxSelect.classList.contains('white')) {
      pxSelect.classList.replace('white', `${color}`)
      console.log(`pixel color is: ${color}`)
    }
    // If the current pixel is colored, if clicked again change it to white (blank)
    else {
      pxSelect.classList.replace(`${color}`, `white`)
      console.log(`pixel color is: white`)
    }
  }

  let grid = document.querySelector('table')
  grid.addEventListener('click', paintPixel)

})
