
let form = {
  nombre: "",
  correo: ""
}

window.onload = function () {
  createHeaderElement();
  createInputs();
  createButton();
}

function createHeaderElement() {
  const heading = document.createElement("h1");
  const heading_text = document.createTextNode("Hola");
  heading.appendChild(heading_text);
  document.body.appendChild(heading);

}

function createButton() {
  const button = document.createElement("button")
  button.textContent = "Enviar"
  button.onclick = (e) => {
    window.alert("Hi");
  }
  button.classList.add("button")
  document.body.appendChild(button)
}

function createInputs() {
  [1, 2].forEach((i) => {
    const el = document.createElement("input")
    el.setAttribute("type", "text")
    el.setAttribute("name", i == 1 ? "name" : "email")
    el.onchange = handleInputChange
    el.onkeydown displayCurrentText
    document.body.appendChild(el)
  })
}

function handleInputChange(e) {
  console.log(e.target.value)
}

function displayCurrentText(e) {
  console.log(e.target.value)
}

