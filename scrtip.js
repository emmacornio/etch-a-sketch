const sizeSlider = document.getElementById("size-slider");
const color = document.getElementById("color-selector");
const sliderValue = document.getElementById("slider-value");
const sketch = document.getElementById("sketch-grid");
const setBtn = document.getElementById("set-btn");
const grid = document.getElementById("sketch-grid");
const clearBtn = document.getElementById("clear-btn");
const classicBtn = document.getElementById("classic-btn");
const rainbowBtn = document.getElementById("rainbow-btn");
const eraserBtn = document.getElementById("fancy-btn");

let gridElement = document.getElementsByClassName("grid-div");
const DEFAULTGRID = 15;
sizeSlider.value = DEFAULTGRID;
const sketchStyle = window.getComputedStyle(sketch);

window.addEventListener("load", () => {
	color.value = "#353535";
	sliderValue.textContent = DEFAULTGRID;
	createGrid(DEFAULTGRID);
	classicBtn.classList.add("selected");
	//classicBtn.classList.toggle("selected");
	rainbowBtn.classList.add("selected");
	rainbowBtn.classList.toggle("selected");
	eraserBtn.classList.add("selected");
	eraserBtn.classList.toggle("selected");
});
classicBtn.addEventListener("click", () => {
	if (classicBtn.classList.contains("selected")) return;
	else classicBtn.classList.toggle("selected");
	if (eraserBtn.classList.contains("selected")) {
		eraserBtn.classList.toggle("selected");
	}
	if (rainbowBtn.classList.contains("selected")) {
		rainbowBtn.classList.toggle("selected");
	}
});
rainbowBtn.addEventListener("click", () => {
	if (rainbowBtn.classList.contains("selected")) return;
	else rainbowBtn.classList.toggle("selected");
	if (classicBtn.classList.contains("selected")) {
		classicBtn.classList.toggle("selected");
	}
	if (eraserBtn.classList.contains("selected")) {
		eraserBtn.classList.toggle("selected");
	}
});

eraserBtn.addEventListener("click", () => {
	if (eraserBtn.classList.contains("selected")) return;
	else eraserBtn.classList.toggle("selected");
	if (classicBtn.classList.contains("selected")) {
		classicBtn.classList.toggle("selected");
	}
	if (rainbowBtn.classList.contains("selected")) {
		rainbowBtn.classList.toggle("selected");
	}
});

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
		gridDiv.addEventListener("mouseover", (e) => changeColor(e.target));
		grid.appendChild(gridDiv);
	}
	sketch.style.cssText = `grid-template-columns:repeat(${value}, 1fr);grid-template-rows:repeat(${value}, 1fr)`;
}
function changeColor(div) {
	if (classicBtn.classList.contains("selected")) {
		div.style.cssText = `background-color:${color.value}`;
	} else if (rainbowBtn.classList.contains("selected")) {
		let randomHue = Math.floor(Math.random() * 360);
		div.style.cssText = `background-color: hsl(${randomHue}, 93%, 82%);`;
	} else if (eraserBtn.classList.contains("selected")) {
		div.style.cssText = `background-color=#dfe7fd;`;
	}
}

function clear() {
	gridElement = document.querySelectorAll(".grid-div");

	Array.from(gridElement).forEach((element) => {
		grid.removeChild(element);
	});
}
