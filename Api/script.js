let queryinput = document.getElementById("searchinput");
let query;
let result = document.getElementById("grid");
let btn = document.getElementById("btn");
console.log(query);
function getImage(query) {
  if (!query) {
    return;
  }
  result.innerHTML = "";
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: "",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      data.photos.forEach((element) => {
        let img = document.createElement("img");
        img.src = element.src.medium;
        img.width = "200";
        img.height = "200";
        result.style.display = "grid";
        result.style.gridTemplateColumns = "1fr 1fr 1fr";
        result.style.columnGap = "12px";
        result.style.rowGap = "12px";
        result.style.marginTop = "20px";
        result.appendChild(img);
      });
    });
}

// getImage("tree");

queryinput.addEventListener("change", () => {
  query = queryinput.value;
});

btn.addEventListener("click", () => {
  getImage(query);
});
