function add_item(button) {
	var count = button.getAttribute("data-item-counter");
  var newItem = document.createElement("li");
  
  // pievieno tekstu
  var itemName = document.getElementById("item-name").value;
  
  // pievieno miskastes pogu
  var deleteButton = document.createElement("button");
  newItem.innerHTML = `<button onclick='deleteItem(this.parentElement);' class='btn btn-primary'><i class="bi bi-trash"></i></button>${itemName}`;
  
  newItem.id = `item${count}`;
  var list = document.getElementById("todo-list");
  list.append(newItem);
}

function deleteItem(item) {
	item.remove();
}
