//for phone section scroll
function call() {
  let mp = document.querySelector(".mobile-products");
  mp.scrollLeft += 500;
  //   console.log(mp.lefts);
}

const scrollRight = document.getElementById("btn-right");
const scrollLeft = document.getElementById("btn-left");

scrollRight.addEventListener("click", () => {
  let mp = document.querySelector(".mobile-products");
  mp.scrollLeft += 500;
});

scrollLeft.addEventListener("click", () => {
  let mp = document.querySelector(".mobile-products");
  mp.scrollLeft -= 500;
});

//for laptop section scroll

const scrollRightLaptop = document.querySelector("#right-btn-laptop");
const scrollLeftLaptop = document.querySelector("#left-btn-laptop");

scrollRightLaptop.addEventListener("click", () => {
  let mp = document.querySelector(".laptop-products");
  mp.scrollLeft += 500;
});

scrollLeftLaptop.addEventListener("click", () => {
  let mp = document.querySelector(".laptop-products");
  mp.scrollLeft -= 500;
});

//for single bottom section scroll

const singlerightbtn = document.querySelector("#single-btn-right");
const singleleftbtn = document.querySelector("#single-btn-left");

singlerightbtn.addEventListener("click", () => {
  let mp = document.querySelector(".single-product-scroll");
  mp.scrollLeft += 500;
});

singleleftbtn.addEventListener("click", () => {
  let mp = document.querySelector(".single-product-scroll");
  mp.scrollLeft -= 500;
});
