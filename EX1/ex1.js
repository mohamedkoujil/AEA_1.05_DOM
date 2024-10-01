const init = () => {
  canviarTitol();
  afegirElementLlista();
  document
    .querySelector("#canviText")
    .addEventListener("click", modificarParagraf);
};

const canviarTitol = () => {
  let titol = document.querySelector("h1");
  titol.innerHTML = "Editat amb JavaScript";
};

const afegirElementLlista = () => {
  let llista = document.querySelector("ul");
  let nouElement = document.createElement("li");
  nouElement.innerHTML = "Nou element";
  llista.appendChild(nouElement);
};

const modificarParagraf = () => {
  const paragraf = document.querySelector("p");
  paragraf.innerHTML = "Paràgraf modificat";
};
