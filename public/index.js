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

const onSubmit = () => {
  const values = form.getElementsByTagName("input");
  console.log(values[0]);
};
// document.getElementById("dataList").addEventListener("onsubmit", () => {
//   const values = form.getElementsByTagName("input");
//   console.log(values);
// });
