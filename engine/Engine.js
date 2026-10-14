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
      debug: [
        `Offense: ${offense.name}`,
        `Defense: ${defense.name}`
      ]
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
    let gain = 0;

    for (const event of events) {
      switch (event.id) {
        case "successful-handoff":
          gain += 1;
          break;

        case "running-lane-opens":
          gain += 3;
          break;

        case "running-lane-closes":
          gain -= 1;
          break;

        case "pulling-guard-wins-block":
          gain += 2;
          break;

        case "receiver-separation":
          gain += 5;
          break;
      }
    }
    return gain;
  },

  runInsideZone(defense) {

    const events = [
      Events.successfulHandoff
    ];

    switch (defense.id) {

      case "run-blitz":
        events.push(Events.runningLaneCloses);
        break;

      case "cover-3":
        events.push(Events.runningLaneOpens);
        break;

      case "man-blitz":
        events.push(Events.runningLaneCloses);
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