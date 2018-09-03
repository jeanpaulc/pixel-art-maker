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
    let indicator = document.createElement('div')
    indicator.setAttribute('id', `indicator`)

    let indText = document.createElement('h1')
    indText.setAttribute('id', `indText`)
    indText.innerText = "COLOR PICKED"

    let indSwatch = document.createElement('div')
    indSwatch.setAttribute('id', 'indSwatch')
    indSwatch.setAttribute('class', 'white')

    body.appendChild(indicator)
    indicator.appendChild(indText)
    indicator.appendChild(indSwatch)
  }
  let color;
  function colorPicked(event) {
    console.log("EVENT.TARGET= ", event.target);
    //color from the div's paintswatch class-list
    color = event.target.classList[1]
    // console.log("Color Picked: ",color);
    // This prevents pixels from having their color class removed
    color = color || "white"
    indicator()
  }
  // EVENT LISTENER: COLOR PICKER
  let colorPallet = document.getElementById('pallet')
  colorPallet.addEventListener('click', colorPicked)
  // After a color has been selected from the color pallet, this function updates the color indicator swatch background
  function indicator() {
    let indicatorChange = document.querySelector('#indSwatch')
    if (indicatorChange.classList.contains('white') ) {
      indicatorChange.classList.replace(`white`, `${color}`)
    }
    if (indicatorChange.classList[0] !== color) {
      indicatorChange.classList.replace(indicatorChange.classList[0], `${color}`)
    }
    // console.log("Indicator Color: ",indicatorChange);
  }
  // After a color has been selected from the color pallet, this function takes the updated color variable and sets a selected pixel's background to that color
  function paintPixel(event) {
    // console.log("Event.target: ", event.target);
    let pxSelect = event.target
    // This acts as a guard to prevent pixels from having their color class removed
    if (color === undefined) { return }
    // If the current pixel is white (blank) change it to the picked color
    if (pxSelect.classList.contains('white')) {
      pxSelect.classList.replace('white', `${color}`)
      console.log(`pixel color is: ${color}`)
    }
    // If the current pixel color != picked color, change to picked color
    else if (pxSelect.classList[1]) {
      pxSelect.classList.replace(pxSelect.classList[1], `${color}`)
    }
    // TODO If the current pixel is colored, if clicked again change it to white (blank)
  }
  // EVENT LISTENER: Paint Pixel
  let grid = document.querySelector('table')
  grid.addEventListener('click', paintPixel)
})
