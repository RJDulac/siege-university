const root = document.getElementById("root");

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

const createSingleElement = (
  text,
  elementType,
  appendFrom = root,
  styles = "none",
  setId = "none"
) => {
  const name = document.createElement(elementType);
  appendFrom.appendChild(name);
  name.innerText = text;

  if (styles !== "none") {
    assignStyles(name, styles);
  }
  if (setId !== "none") {
    name.id = setId;
  }
};

const assignStyles = (name, styles) => {
  for (styleType of styles) {
    switch (styleType) {
      case "italic":
        name.style.fontStyle = "italic";
        break;
      case "underline":
        name.style.textDecoration = "underline";
        break;
      default:
        console.log("something went wrong");
    }
  }
};

//tutorial page

const tutorial = () => {
  //create div container for lis - not working as intended, need multiple divs
  // const showcaseLiContainer = document.createElement("div");
  // root.append(showcaseLiContainer);
  // showcaseLiContainer.id = "#showcase__li-container";

  const introductionSentences = [
    "What You Need For This Tutorial",
    "What This Tutorial Assumes You Have Already Learned",
    "What This Tutorial Will Teach You",
    "Opening An Example",
    "Basic Movement Controls Within SE",
  ];
  const nodeWorkSetences = [
    "Create A Map",
    "Create A Region",
    "Add Floors And Walls",
  ];
  const objectsSentences = [
    "Add Details To House",
    "Add Details To Surrounding Farmland",
    "Add Starting Positions",
  ];

  createSingleElement("The Basics of the Siege Editor", "H2");
  createSingleLink("Introduction", root, "#introduction");
  createElementsFromArray(introductionSentences, root, "LI");
  createSingleLink("101: Nodework");
  createElementsFromArray(nodeWorkSetences, root, "LI");
  createSingleLink("102: Objects");
  createElementsFromArray(objectsSentences, root, "LI");
  createSingleLink("103: Lighting");
  createElementsFromArray(
    ["Ambient Light", "Directional Lights", "Point Light"],
    root,
    "LI"
  );
  createSingleLink("104: Fading");
  createElementsFromArray(
    ["Node Camera Flags", "Fading Nodes With Triggers"],
    root,
    "LI"
  );
  createElementsFromArray(
    [
      "105: Moods",
      "106: Monster Placement",
      "107: Opening Your Map in Dungeon Siege",
      "Conclusion",
      "Appendix A: Tips",
      "Appendix B: Siege Editor Preferences",
    ],
    root,
    "A"
  );

  createSingleElement(
    "Introduction",
    "h2",
    root,
    ["italic", "underline"],
    "introduction"
  );

  //introduction section
  const introductionParagraphs = [
    'Building a region for Dungeon Siege using the Siege Editor ("SE") is a straightforward task, even for a beginning mod maker. This Siege U tutorial has two purposes: familiarization with the Siege Editor and familiarization with Siege University. At the conclusion of this tutorial, you will be familar with basic SE functionality and will possess an understanding of how Siege U works.',
    "This tutorial will walk you through building a simple, small region. It will not delve into all the options of each section, nor will it offer much more than a cursory explanation of the motives of building a region. These topics are covered in further detail in the Siege Editor Manual (included during the installation of the Siege Editor) and further, more specific Siege U tutorials.",
  ];
  createElementsFromArray(introductionParagraphs, root, "P");
  createSingleElement("What You Need For This Tutorial", "P", root, [
    "underline",
  ]);
  const whatYouNeed = [
    "Dungeon Siege, updated to version 1.09B or later",
    "Siege Editor, with the Preferences configured to Appendix B",
    "Siege Editor Manual (included with the Siege Editor during installation)",
  ];
  createElementsFromArray(whatYouNeed, root, "LI");
};

tutorial();
