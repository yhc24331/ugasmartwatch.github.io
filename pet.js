document.addEventListener("DOMContentLoaded", function() {

var chick = document.getElementById("Chick");
var rat = document.getElementById("Rat");
var dog = document.getElementById("Dog");
var monkey = document.getElementById("Monkey");
var lion = document.getElementById("Lion");

    chick.addEventListener("click", function() {
      chick.classList.add("highlight");
      rat.classList.remove("highlight");
      dog.classList.remove("highlight");
      monkey.classList.remove("highlight");
      lion.classList.remove("highlight");
    });

    rat.addEventListener("click", function() {
      rat.classList.add("highlight");
      chick.classList.remove("highlight");
      dog.classList.remove("highlight");
      monkey.classList.remove("highlight");
      lion.classList.remove("highlight");
    });

    dog.addEventListener("click", function() {
      dog.classList.add("highlight");
      chick.classList.remove("highlight");
      rat.classList.remove("highlight");
      monkey.classList.remove("highlight");
      lion.classList.remove("highlight");
    });

    monkey.addEventListener("click", function() {
      monkey.classList.add("highlight");
      dog.classList.remove("highlight");
      chick.classList.remove("highlight");
      rat.classList.remove("highlight");
      lion.classList.remove("highlight");
    });

    lion.addEventListener("click", function () {
      lion.classList.add("highlight");
      dog.classList.remove("highlight");
      chick.classList.remove("highlight");
      rat.classList.remove("highlight");
      monkey.classList.remove("highlight");
    });

    const colorPalette = document.getElementById("colorPalette");
    const pixelCanvas = document.getElementById("pixel_canvas");
    const saveHeader = document.getElementById("saveHeader");
    const saveBtn = document.getElementById("getColorBtn");

    let isMouseDown = false; 
    let color = "#000000"; 

    function getGridColors() {
      const cells = pixelCanvas.getElementsByTagName("td");
      let colors = "";
      for (let i = 0; i < cells.length; i++) {
          colors += cells[i].style.backgroundColor + ", ";
      }
      colors = colors.slice(0, -1);
      return colors;
    }

    document.getElementById("getColorBtn").addEventListener("click", function() {
      const petImage = document.querySelector(".highlight.pet-image");
      console.log("selected pet:", petImage);
      const gridColors = getGridColors();
      console.log("grid colors:", gridColors);
    });

    const colorButtons = document.getElementsByClassName("colorBtn");
    for (let i = 0; i < colorButtons.length; i++) {
      colorButtons[i].addEventListener("click", function() {
        changeColor(colorButtons[i]);
      });
    } 

    function makeGrid() {
      const gridHeight = 64;
      const gridWidth = 64;
      const pixelCanvas = document.getElementById("pixel_canvas"); 
      pixelCanvas.innerText="";  

      for (let h=0; h<gridHeight; ++h) {
          const row = pixelCanvas.insertRow(-1); 
          for (let w=0; w<gridWidth; ++w) {
              const cell = row.insertCell(-1); 
              cell.className = "colorBtn";
              cell.addEventListener('mousedown', function() {
                  isMouseDown = true;
                  updateCellColor(cell);
              });
              cell.addEventListener('mousemove', function() {
                  if (isMouseDown) {
                      updateCellColor(cell);
                  }
              });
              cell.addEventListener('mouseup', function() {
                  isMouseDown = false;
              });
          }
      }
    }
      
    function updateCellColor(cell) {
        cell.style.backgroundColor = color;
    } 
    
    function changeColor(btn) {
        color = btn.style.backgroundColor;
    }

    document.getElementById("continueBtn").addEventListener("click", function() {
      const loader = document.querySelector('.loader');
      // Check if the pet image is highlighted
      if (chick.classList.contains("highlight")|| rat.classList.contains("highlight") || dog.classList.contains("highlight")
      || monkey.classList.contains("highlight") || lion.classList.contains("highlight")) {
        // Save the image
        console.log("Pet image saved!");
        // Set the loading screen
        document.getElementById("continueBtn").style.display = 'none';
        document.getElementById("Chick").style.display = 'none';
        document.getElementById("Rat").style.display = 'none';
        document.getElementById("Dog").style.display = 'none';
        document.getElementById("Monkey").style.display = 'none';
        document.getElementById("Lion").style.display = 'none';
        document.getElementById("main-header").style.display = 'none';
        document.getElementById("mainSubHeader").style.display = 'none';
        loader.style.display = 'block';
        document.getElementById("newHeader").style.display = 'block';
        colorPalette.style.display = "block";
        pixelCanvas.style.display = "block";
        saveBtn.style.display = "block";
        saveHeader.style.display = "block";

        

        // Get the selected pet
      const petImage = document.querySelector(".highlight.pet-image");
      console.log("selected pet:", petImage);
      makeGrid();

      } else {
        // Show an error message
          console.log("Please select a pet first!");
        } 
        console.log("Button clicked!");
      }); 

    });
