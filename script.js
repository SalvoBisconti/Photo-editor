import { qS, cE, bodyEl } from "./utils.js";

const input = qS("input");
const divImg = qS(".imgDiv");
const imgEl = cE("img");
const grayscaleEl = qS(".greyscale");
const sepiaEl = qS(".sepia");
const contrastEl = qS(".contrast");
const saturateEl = qS(".saturate");
const btnEl = qS(".reset-btn");
let imagesArray = [];

imgEl.className = "image";

input.addEventListener("change", () => {
  const file = input.files;
  imagesArray.push(file[0]);
  imgEl.src = ` ${URL.createObjectURL(imagesArray[0])}  `;
  imagesArray.splice(0, 1);
  divImg.appendChild(imgEl);
  document.body.appendChild(divImg);
  console.log(imgEl);
});

grayscaleEl.addEventListener("input", (e) => {
  imgEl.style.filter = `grayscale(${e.target.value / 100})`;
  console.log(grayscaleEl.value / 100);
});

sepiaEl.addEventListener("input", (e) => {
  imgEl.style.filter = `sepia(${e.target.value / 100})`;
  console.log(sepiaEl.value / 100);
});

contrastEl.addEventListener("input", (e) => {
  imgEl.style.filter = `contrast(${e.target.value / 80})`;
  console.log(contrastEl.value / 20);
});

saturateEl.addEventListener("input", (e) => {
  imgEl.style.filter = `saturate(${e.target.value / 80})`;
  console.log(saturateEl.value / 20);
});

btnEl.addEventListener("click", () => {
  imgEl.style.filter = `grayscale(0)`;
  grayscaleEl.value = 0;
  imgEl.style.filter = `sepia(0)`;
  sepiaEl.value = 0;
  imgEl.style.filter = `contrast(1)`;
  contrastEl.value = 50;
  imgEl.style.filter = `saturate(1)`;
  saturateEl.value = 50;
});
