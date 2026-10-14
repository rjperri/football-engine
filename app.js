import Engine from "./engine/Engine.js";
import Plays from "./engine/Plays.js";
import Defenses from "./engine/Defenses.js";

console.log("Football Engine Loaded");

console.log(Engine.runPlay(
    Plays.insideZone,
    Defenses.cover3
));

console.log(Engine.runPlay(
    Plays.insideZone,
    Defenses.runBlitz
));

console.log(Engine.runPlay(
    Plays.insideZone,
    Defenses.manBlitz
));