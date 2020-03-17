import { Main } from "./components";
import { Header, Nav, Footer } from "./components";
import * as state from "./store";

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
}

// add menu toggle to bars icon in nav bar
// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });

// function addNavEventListener() {
//   document.querySelectorAll("nav > a").forEach(navLink =>
//     navLink.addEventListener("click", event => {
//       event.preventDefault();
//       let textOfLink = event.target.textContent;
//       let pieceOfState = state[textOfLink];
//       render(pieceOfState);
//     })
//   );
// }
//addNavEventListener();

// function addPicOnFormSubmit() {
//   document.querySelectorAll("form").addEventListener("submit", event => {
//     event.preventDefault();
//     let inputList = event.target.elements;
//     let picObj = {
//       url: inputList[0],
//       title: inputList[1]
//     };
//     state.Gallery.pictures.push(picObj);
//   });
// }

//addPicOnFormSubmit();
// array of pictures for gallery

// populating gallery with pictures
// const gallerySection = document.querySelector("#gallery");
// dogPictures.forEach(pic => {
//   let img = document.createElement("img");
//   img.src = pic.url;
//   img.alt = pic.title;
//   gallerySection.appendChild(img);
// });

// // handle form submission
// document.querySelector("form").addEventListener("submit", event => {
//   event.preventDefault();
//   Array.from(event.target.elements).forEach(el => {
//     console.log("Input Type: ", el.type);
//     console.log("Name: ", el.name);
//     console.log("Value: ", el.value);
//   });
// });

render(state.Home);
