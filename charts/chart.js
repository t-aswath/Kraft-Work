function createButton() {
  var nameInput = document.getElementById("name");
  var name = nameInput.files[0];
  console.log(name);
  if (!name) {
    alert("Please upload a file.");
    return;
  }
  var button = document.createElement("img");
  button.src = URL.createObjectURL(name);
  button.width = 600;
  var input = document.getElementById("input");
  input.appendChild(button);
}
