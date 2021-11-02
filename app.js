"use strict";

const addButton = document.querySelector(".add-btn");
const input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
	constructor(itemName) {
		// create the item div
		this.createDiv(itemName);
	}

	createDiv(itemName) {
		const input = document.createElement("input");
		input.value = itemName;
		input.disabled = true;
		input.classList.add("item-input");
		input.type = "text";

		const itemWrapper = document.createElement("div");
		itemWrapper.classList.add("item-wrapper");

		const editButton = document.createElement("button");
		editButton.innerText = "EDIT";
		editButton.classList.add("edit-btn");

		const removeButton = document.createElement("button");
		removeButton.innerText = "REMOVE";
		removeButton.classList.add("remove-btn");

		container.appendChild(itemWrapper);
		itemWrapper.appendChild(input);
		itemWrapper.appendChild(editButton);
		itemWrapper.appendChild(removeButton);

		editButton.addEventListener("click", () => this.edit(input));

		removeButton.addEventListener("click", () => this.remove(itemWrapper));
	}

	edit(input) {
		input.disabled = !input.disabled;
	}

	remove(item) {
		container.removeChild(item);
	}
}

const check = function () {
	if (input.value !== "") {
		new item(input.value);
		input.value = "";
	}
};

addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
	if (e.which === 13) {
		check();
	}
});
