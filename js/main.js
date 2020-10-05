const root = document.getElementById("root");

const tutorial = () => {
  const introductionSentences = [
    "What You Need For This Tutorial",
    "What This Tutorial Assumes You Have Already Learned",
    "What This Tutorial Will Teach You",
    "Opening An Example",
    "Basic Movement Controls Within SE",
  ];
  const h2 = document.createElement("H2"),
    introductionLink = document.createElement("A");

  root.appendChild(h2);
  root.appendChild(introductionLink);

  h2.innerText = "The Basics of the Siege Editor";

  introductionLink.href = "#";
  introductionLink.innerText = "Introduction";

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
tutorial();
