let suggeriments = [];

const handleForm = (event) => {
  event.preventDefault();
  let suggerimentText = document.getElementById("addSuggeriment").value;

  addSuggeriment(suggerimentText);

  console.log(suggeriments);
  resetForm();
};

const resetForm = () => {
  document.getElementById("addSuggerimentForm").reset();
};

const addSuggeriment = (suggerimentText) => {
  const suggeriment = {
    id: new Date().getTime(),
    text: suggerimentText,
    done: false,
  };
  suggeriments.push(suggeriment);
  renderSuggeriments();
};

const renderSuggeriments = () => {
  let suggerimentsList = document.getElementById("suggerimentsList");
  suggerimentsList.innerHTML = "";

  suggeriments.forEach((suggeriment) => {
    let suggerimentElement = document.createElement("div");
    suggerimentElement.id = suggeriment.id;
    suggerimentElement.className = "suggeriment";
    suggerimentElement.innerHTML = "<span>" + suggeriment.text + "</span>";
    suggerimentElement.appendChild(createToggleDoneButton(suggeriment));
    suggerimentElement.appendChild(createDeleteButton(suggeriment));
    // Para que no tache el texto de los botones
    suggerimentElement.children[0].style.textDecoration = suggeriment.done
      ? "line-through"
      : "none";
    suggerimentsList.appendChild(suggerimentElement);
  });
};

const createDeleteButton = (suggeriment) => {
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Eliminar";
  deleteButton.addEventListener("click", () => {
    deleteSuggeriment(suggeriment.id);
  });

  return deleteButton;
};

const createToggleDoneButton = (suggeriment) => {
  let toggleDoneButton = document.createElement("button");
  toggleDoneButton.innerHTML = "Marcar Complet";
  toggleDoneButton.className = "toggleDoneBtn";
  toggleDoneButton.addEventListener("click", () => {
    toggleDone(suggeriment.id);
  });
  return toggleDoneButton;
};

const deleteSuggeriment = (suggerimentId) => {
  suggeriments = suggeriments.filter(
    (suggeriment) => suggeriment.id !== suggerimentId
  );
  console.log(suggeriments);
  renderSuggeriments();
};

const toggleDone = (suggerimentId) => {
  suggeriments = suggeriments.map((suggeriment) => {
    if (suggeriment.id === suggerimentId) {
      suggeriment.done = !suggeriment.done;
    }
    return suggeriment;
  });
  renderSuggeriments();
};
