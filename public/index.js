// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
import "regenerator-runtime/runtime.js";
import { callFMScript, fetch } from "fm-webviewer-fetch";
import { parseResponse } from "../utils/utils";
const form = document.getElementById("form");

const getData = async () => {
  let req = { layouts: "Choices" };
  console.log(req);
  let result = await fetch("Get Data", req);
  // return;
  result = parseResponse(result);
  console.log(result);

  return result.data;
};

window.loadList = async (params) => {
  const data = await getData();
  console.log("DATA", data);

  data.forEach((item) => {
    const id = item.fieldData.PrimaryKey;
    const label = item.fieldData.Label;
    const template = `<div id=${"row_" + id}
            class="
            hover:bg-gray-100
              sample
              flex
              h-7
              text-sm
              item-center
              bg-blue-100
              text-gray
            "
          >
          <div class="flex items-center space-x-2 p-2">

          <input label = ${label} type="checkbox" class="checked:bg-blue-600"  addEventListener("click", ${(
      e
    ) => {
      e.stopPropagation();
    }}) id="${id}" />
            <div class="mx-">${label}</div>
            <div>
          </div>`;

    const el = document.createElement("div");
    el.innerHTML = template;

    const d = el.firstChild;
    d.addEventListener("click", (d) => {
      const t = d.target.getAttribute("id").split("_")[1];
      if (t) {
        const currValue = document.getElementById(t).checked;
        document.getElementById(t).checked = !currValue;
        // const row = document.getElementById("row_" + t);
        // row.classList.remove("bg-blue-100");
        // row.classList.add("bg-red-100");
      }
      d.stopPropagation();
    });
    document.querySelector("#canvas").appendChild(d);
  });

  document.getElementById("cancel").addEventListener("click", function () {
    const obj = { action: "close", data: "" };
    callFMScript("CheckList Actions", obj);
  });

  document.getElementById("confirm").addEventListener("click", (e) => {
    e.preventDefault();
    const values = [...document.querySelectorAll('input[type="checkbox"]')].map(
      (input) => ({
        value: input.checked,
        id: input.getAttribute("id"),
        label: input.getAttribute("label"),
      })
    );
    const obj = { action: "confirm", data: values };
    callFMScript("CheckList Actions", obj);
  });
};
