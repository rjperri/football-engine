import Engine from "./engine/Engine.js";
import Plays from "./engine/Plays.js";
import Defenses from "./engine/Defenses.js";

console.log("Football Engine Loaded");

const result = Engine.runPlay(
    Plays.insideZone,
    Defenses.cover3
);

console.log(result);