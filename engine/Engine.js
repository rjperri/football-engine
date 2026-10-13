import Events from "./Events.js";

const Engine = {
    runPlay(offense, defense) {

        const events = this.generateEvents();

        const gain = this.calculateGain(events);

        return {
            offense,
            defense,
            gain,
            events,
            debug: [
                `Offense: ${offense.name}`,
                `Defense: ${defense.name}`
            ]
        };
    },

    generateEvents() {
        return [
            Events.successfulHandoff
        ];
    },

    calculateGain(events) {
        return 3;
    }
};

export default Engine;