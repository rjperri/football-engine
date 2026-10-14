import Engine from "./engine/Engine.js";
import Plays from "./engine/Plays.js";
import Defenses from "./engine/Defenses.js";
import Commentary from "./commentary/Commentary.js";

const offenseSelect = document.getElementById("offense");
const defenseSelect = document.getElementById("defense");
const runButton = document.getElementById("run-play");

const gainElement = document.getElementById("gain");
const commentaryElement = document.getElementById("commentary");

function populateSelect(select, items) {
    Object.values(items).forEach(item => {
        const option = document.createElement("option");

        option.value = item.id;
        option.textContent = item.name;

        select.appendChild(option);
    });
}

populateSelect(offenseSelect, Plays);
populateSelect(defenseSelect, Defenses);

runButton.addEventListener("click", () => {

    const offense = Object.values(Plays)
        .find(play => play.id === offenseSelect.value);

    const defense = Object.values(Defenses)
        .find(call => call.id === defenseSelect.value);

    const result = Engine.runPlay(offense, defense);

    gainElement.textContent = `${result.gain} yards`;

    commentaryElement.textContent =
        Commentary.describe(result.events);
});