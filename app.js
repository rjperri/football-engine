import Engine from "./engine/Engine.js";
import Plays from "./engine/Plays.js";
import Defenses from "./engine/Defenses.js";
import Commentary from "./commentary/Commentary.js";

console.log("Football Engine Loaded");

const result = Engine.runPlay(
    Plays.insideZone,
    Defenses.runBlitz
);

console.log("Play Result");
console.log(result);

console.table(result.events);

console.log("Debug");
console.table(result.debug);

const commentary = Commentary.describe(result.events);

console.log("Commentary:");
console.log(commentary);