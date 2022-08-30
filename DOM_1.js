// DOM Manipultations
// document.getElementById("demo").innerHTML = "Hello World";

const collection = document.getElementsByClassName("demo");
collection[0].innerHTML = "Hello world!";

const pTag = document.createElement("div");
const newOne = document.createElement("p");
pTag.textContent = "My first Div";
newOne.textContent = "My first Paragraph";

newOne.setAttribute("class", "paraT");
pTag.setAttribute("class", "para");
pTag.appendChild(newOne);
document.body.appendChild(pTag);

document.body.style.padding = "0";
document.body.style.margin = "0";
pTag.style.backgroundColor = "Whitesmoke";
pTag.style.padding = "1rem";

// Persistent Storages
const arr = [1, 2, 3];
const strArr = JSON.stringify(arr);

sessionStorage.setItem("arr", strArr);

sessionStorage.clear();

// sessionStorage.clear();
