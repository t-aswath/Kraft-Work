const handleAppend = (value) => {
  let display = document.getElementById("display");
  if (value === "=") {
    try {
      display.innerText = eval(display.innerText);
    } catch (err) {
      display.innerText = "Syntaxerror";
    }
  } else if (value === "AC") {
    display.innerText = "";
  } else if (value === "DEL") {
    display.innerText = display.innerText.slice(
      0,
      display.innerText.length - 1
    );
  } else if (value === "π") {
    display.innerText += "3.14";
  } else {
    display.innerText += value;
  }
};
