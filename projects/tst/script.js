import champions from "./champion.js";
import championRoles from "./championroles.js";

const ids = Object.keys(champions.data);
const roles = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];

// Takes info from champion.js and championroles.js to group every champion by their respective roles
const groupByRole = () => {
  let data = {};
  for (let i = 0; i < roles.length; i += 1) {
    for (let j = 0; j < ids.length; j += 1) {
      const champ = champions.data[ids[j]];
      const champRoles = championRoles[champ.name];
      if (champRoles.includes(roles[i])) {
        if (typeof data[roles[i]] === "undefined") data[roles[i]] = [];
        data[roles[i]] = [...data[roles[i]], champ.id];
      }
    }
  }
  return data;
};
const champsByRole = groupByRole();

const randNum = n => Math.floor(Math.random() * n);

const randChamp = roles => {
  if (roles.length === 0) {
    // If param not specified do this:
    return champions.data[ids[randNum(ids.length)]];
  }
  let champs = []; // List of all champs that play in the roles specified by the parameter
  for (let i = 0; i < roles.length; i += 1) {
    champs = [...champs, ...champsByRole[roles[i]]];
  }
  return champions.data[champs[randNum(champs.length)]];
};

const createOptions = () => {
  const container = document.getElementById("checkbox-container");
  for (let i = 0; i < roles.length; i += 1) {
    const newLabel = document.createElement("label");
    const checkbox = document.createElement("input");
    const checkmark = document.createElement("span");
    checkbox.type = "checkbox";
    checkbox.name = "roles";
    checkbox.value = roles[i];
    newLabel.innerText = `${roles[i]} `;
    newLabel.className = "label group unselectable";
    checkmark.className = "checkmark";
    newLabel.appendChild(checkbox);
    newLabel.appendChild(checkmark);
    container.appendChild(newLabel);
  }
};

const displayResult = champ => {
  document.getElementById("output").innerText = champ.name;
  const imgContainer = document.getElementById("output_img");
  imgContainer.src = "./img/champion/" + champ.image.full;
};

const handleSubmit = e => {
  e.preventDefault();
  const inputs = e.path[0];
  let picked = [];
  for (let i = 0; i < inputs.length - 1; i += 1) {
    if (inputs[i].checked) {
      picked.push(inputs[i].value);
    }
  }
  displayResult(randChamp(picked));
};

window.onload = () => {
  document.getElementById("form").addEventListener("submit", handleSubmit);
  createOptions();
};
