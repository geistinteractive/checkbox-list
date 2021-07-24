import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const form = document.getElementById("form");
const data = [
  { label: "One", id: 1 },
  { label: "Two", id: 2 },
  { label: "Three", id: 3 },
  { label: "Four", id: 4 },
];
const value = 1;

data.forEach((item) => {
  const template = `<div
            class="
              sample
              h-16
              flex
              item-center
              bg-blue-300
              text-white
              font-semibold
            "
          >
          <div class="flex items-center space-x-2 p-2">
          <input type="checkbox" data--itemId="${item.id}" />
            <div class="mx-">${item.label}</div>
            <div>
          </div>`;
  const el = document.createElement("div");
  el.innerHTML = template;
  const d = el.firstChild;
  document.querySelector("#canvas").appendChild(d);
});

/*
data.forEach((i) => {
  const cb = document.createElement("input");
  const d = document.createElement("div");
  d.className = "p-2";
  cb.type = "checkbox";
  cb.name = i.label;
  cb.id = i.id;

  var labelForBox = document.createElement("label");
  labelForBox.style = "padding-left:10px";
  labelForBox.htmlFor = i.id;
  labelForBox.appendChild(document.createTextNode(i.label));

  d.appendChild(cb);
  d.appendChild(labelForBox);
  form.appendChild(d);
});
*/

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  const values = [...document.querySelectorAll('input[type="checkbox"]')].map(
    (input) => ({
      value: input.checked,
      id: input.getAttribute("data--itemId"),
    })
  );
  console.log(values);
});
// document.getElementById("dataList").addEventListener("onsubmit", () => {
//   const values = form.getElementsByTagName("input");
//   console.log(values);
// });
