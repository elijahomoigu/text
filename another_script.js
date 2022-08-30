const body = document.body;
const btn = document.querySelector(".btn");
const inputBar = document.querySelector("#inputBar");
const generateColor = () => {const randColor = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e",  "f",];
  let renew = "#";
  for (let i = 0; i < 6; i++) {
    renew += randColor[Math.floor(Math.random() * randColor.length)];
  }
  return renew;
};
btn.addEventListener("click", () => {
  const colorNew = (body.style.backgroundColor = generateColor());
  inputBar.value = colorNew;
  inputBar.style.border = `2px solid ${colorNew}`;
});


const checkDiv = document.querySelector('.checkDiv');
