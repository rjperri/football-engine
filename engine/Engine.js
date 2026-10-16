import Events from "./Events.js";
import Matchups from "./Matchups.js";

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

  roll(percent) {
    return Math.random() * 100 < percent;
  },

  chooseOutcome(outcomes) {
    const roll = Math.random() * 100;

    let total = 0;

    for (const outcome of outcomes) {
      total += outcome.weight;

      if (roll < total) {
        return outcome;
      }
    }

    return outcomes[outcomes.length - 1];
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
    const events = [];
    this.resolveExchange(events);
    this.resolveBlocking(events, defense);
    this.resolveSecondLevel(events, defense);

    return events;
  },

  runCounter(defense) {
    const events = [
      Events.successfulHandoff
    ];

    const outcomes = Matchups["inside-zone"][defense.id];
    const outcome = this.chooseOutcome(outcomes);
    events.push(...outcome.events);
    return events;
  },

  runSlant(defense) {
    const events = [
      Events.successfulSnap
    ];
    const outcomes = Matchups["slant"][defense.id];
    const outcome = this.chooseOutcome(outcomes);
    return outcome.events;
  },

  resolveExchange(events) {
    events.push(Events.successfulHandoff);
  },

  resolveBlocking(events, defense) {
    const outcome = this.chooseOutcome(
      Matchups["inside-zone"][defense.id].blocking
    );

    events.push(...outcome.events);
  },

  resolveSecondLevel(events, defense) {

    if (events.includes(Events.runningLaneOpens)) {
        events.push(Events.linebackerWrongGap);
    }
    else {
        events.push(Events.safetyTackle);
    }
}
};

export default Engine;