const root = document.getElementById("root");

const tutorial = () => {
  const introductionSentences = [
    "What You Need For This Tutorial",
    "What This Tutorial Assumes You Have Already Learned",
    "What This Tutorial Will Teach You",
    "Opening An Example",
    "Basic Movement Controls Within SE",
  ];
  createSingleElement("The Basics of the Siege Editor", "H2");
  createSingleLink("Introduction");
  createElementsFromArray(introductionSentences, root, "P");
};

//helper functions to create elements from arrays
const createElementsFromArray = (arr, appendFrom, elementType) => {
  arr.forEach((text, index) => {
    let name = index;
    name = document.createElement(elementType);
    appendFrom.appendChild(name);
    name.innerText = text;
    if (elementType === "A" || "a") {
      name.href = "#";
    }
  });
};

const createSingleLink = (text, appendFrom = root, reference = "#") => {
  const link = document.createElement("A");
  appendFrom.appendChild(link);
  link.href = reference;
  link.innerText = text;
};

const createSingleElement = (text, elementType, appendFrom = root) => {
  const name = document.createElement(elementType);
  appendFrom.appendChild(name);
  name.innerText = text;
};
tutorial();
