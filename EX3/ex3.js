handleForm = (event) => {
  event.preventDefault();
  const input = document.getElementById("inputText").value;
  addParagraph(input);
};

const addParagraph = (data) => {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = data;
  document.body.appendChild(paragraph);
};
