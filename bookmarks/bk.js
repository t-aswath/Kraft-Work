function createButton() {
  var nameInput = document.getElementById("name");
  var linkInput = document.getElementById("link");

  var name = nameInput.value;
  var link = linkInput.value;

  if (!name || !link) {
    alert("Please enter a name and link.");
    return;
  }

  var button = document.createElement("a");
  button.href = link;
  button.textContent = name;
  var input = document.getElementById("input");
  input.appendChild(button);
}
