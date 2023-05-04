//your JS code here. If required.
let blockIdInput = document.getElementById("block_id");
let colorIdInput = document.getElementById("color_id");
let changeButton = document.getElementById("change_button");
let resetButton = document.getElementById("reset_button");
let gridItems = document.querySelectorAll(".grid-item");

// Change color of block with given ID
function changeColor() {
	let blockId = blockIdInput.value;
	let colorId = colorIdInput.value;
	let block = document.getElementById(blockId);
	block.style.backgroundColor = colorId;
}

// Reset color of all blocks
function resetColors() {
	for (let i = 0; i < gridItems.length; i++) {
		gridItems[i].style.backgroundColor = "transparent";
	}
}

changeButton.addEventListener("click", changeColor);
resetButton.addEventListener("click", resetColors);
