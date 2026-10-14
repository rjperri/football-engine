import Events from "./Events.js";

const Engine = {
  runPlay(offense, defense) {

    const events = this.generateEvents(offense, defense);

    const gain = this.calculateGain(events);

    return {
      offense,
      defense,
      gain,
      events,
      debug: {
        offense: offense.name,
        defense: defense.name,
        eventCount: events.length
      }
    };
  },

  generateEvents(offense, defense) {

    if (offense.id === "inside-zone") {
      return this.runInsideZone(defense);
    }

    if (offense.id === "counter") {
      return this.runCounter(defense);
    }

    if (offense.id === "slant") {
      return this.runSlant(defense);
    }

    return [];
  },

  calculateGain(events) {
    return events.reduce(
      (gain, event) => gain + event.yardImpact,
      0
    );
  },

  runInsideZone(defense) {

    const events = [
      Events.successfulHandoff
    ];

    switch (defense.id) {

      case "cover-3":
        events.push(
          Events.runningLaneOpens,
          Events.linebackerWrongGap
        );
        break;

      case "run-blitz":
        events.push(
          Events.runningLaneCloses,
          Events.safetyTackle
        );
        break;

      case "man-blitz":
        events.push(
          Events.runningLaneCloses
        );
        break;
    }

    return events;
  },

  runCounter(defense) {
    return [
      Events.successfulHandoff,
      Events.pullingGuardWinsBlock
    ];
  },

  runSlant(defense) {
    return [
      Events.receiverSeparation
    ];
  }
};

export default Engine;