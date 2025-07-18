// Dynamic Table Rendering App logic
// This app dynamically renders a table based on user input and predefined data sets.
import { CCTV } from './data/CCTV.js';
import { REDLIGHT } from './data/REDLIGHT.js';
import { BOQ } from './data/BOQ.js';

let table = document.querySelector("table");
let btn = document.querySelector(".button");

//Toaster function to show error messages
//This function toggles the visibility of a toaster message
function toasterToggle() {
  let toaster = document.querySelector("#toast");
  toaster.classList.toggle("hidden");
}

// Event listener for the button click
// This listener captures the click event on the button and processes the input text
btn.addEventListener("click", function () {
  let text = document.querySelector(".textbox");
  let loader = document.querySelector(".progressBox");

  loader.style.display = "block";

  //Add validation on textarea input
  if (!text.value) {
    toasterToggle();
    loader.style.display = "none";
    return;
  }
  // Check if the input is valid and contains the required keywords 
  setTimeout(() => {
    loader.style.display = "none";
    if (text.value.includes("cctv")) {
      renderTable(CCTV);
    } else if (text.value.includes("redlight")) {
      renderTable(REDLIGHT);
    } else {
      tbody.innerHTML = "Out of the scoop";
      tbody.style.fontSize = "15px";
    }
    text.value = " ";
  }, 1000);
});

// Function to handle the creation and rendering of the table
function renderTable(data) {
  let thead = table.getElementsByTagName("thead")[0];
  let tbody = table.getElementsByTagName("tbody")[0];

  // Clear existing headers and rows
  thead.innerHTML = "";
  tbody.innerHTML = "";
  // Add headers dynamically based on the data keys
  Object.keys(data[0]).forEach((key) => {
    let th = document.createElement("th");
    th.innerHTML = key;
    thead.appendChild(th);
  });

  // Add rows dynamically based on the data values
  data.forEach((item) => {
    const newRow = tbody.insertRow();
    Object.values(item).forEach((value) => {
      let cell = newRow.insertCell();
      cell.innerHTML = value;
    });
  });
}