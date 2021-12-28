const sizeSlider = document.getElementById("size-slider");
const color = document.getElementById("color-selector");
const sliderValue = document.getElementById("slider-value");
const sketch = document.getElementById("sketch-grid");
const setBtn = document.getElementById("set-btn");
const grid = document.getElementById("sketch-grid");
const clearBtn = document.getElementById("clear-btn");
let gridElement = document.getElementsByClassName("grid-div");
const DEFAULTGRID = 30;
sizeSlider.value = DEFAULTGRID;
const sketchStyle = window.getComputedStyle(sketch);

window.addEventListener("load", createGrid(DEFAULTGRID));

sizeSlider.addEventListener("input", () => {
	//console.log(sizeSlider.value);
	sliderValue.textContent = sizeSlider.value;
});
setBtn.addEventListener("click", () => {
	clear();
	createGrid(sizeSlider.value);
});

clearBtn.addEventListener("click", () => {
	clear();
	createGrid(sizeSlider.value);
});

function createGrid(value) {
	for (let i = 0; i < value ** 2; i++) {
		const gridDiv = document.createElement("div");
		gridDiv.className = "grid-div";
		gridDiv.classList.add("black");
		gridDiv.classList.toggle("black");

		// gridDiv.style.cssText = `height:${
		// 	parseFloat(sketchStyle.height) / value
		// }px ;width:${parseFloat(sketchStyle.width) / value}px`;
		gridDiv.addEventListener("mouseover", (e) => changeColor(e.target));
		grid.appendChild(gridDiv);
	}
	sketch.style.cssText = `grid-template-columns:repeat(${value}, 1fr);grid-template-rows:repeat(${value}, 1fr)`;
}
function changeColor(div) {
	//div.classList.toggle("black", true);
	div.style.cssText = `background-color:${color.value}`;
}

function clear() {
	gridElement = document.querySelectorAll(".grid-div");

	Array.from(gridElement).forEach((element) => {
		grid.removeChild(element);
	});
}
