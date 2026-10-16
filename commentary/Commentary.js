const descriptions = {
    "successful-handoff": "The quarterback hands the ball off cleanly.",
    "running-lane-opens": "A running lane opens up.",
    "running-lane-closes": "The defense closes the running lane quickly.",
    "pulling-guard-wins-block": "The pulling guard wins his block.",
    "linebacker-wrong-gap": "The linebacker fills the wrong gap.",
    "qb-under-pressure": "The quarterback is immediately under pressure.",
    "receiver-separation": "The receiver creates separation.",
    "broken-tackle": "The runner breaks a tackle.",
    "safety-tackle": "The safety brings the runner down.",
    "touchdown": "Touchdown!",
    "successful-snap": "The center snaps the ball.",
};

const Commentary = {
    describe(events) {
        return events
            .map(event => descriptions[event.id] ?? event.name)
            .join(" ");
    }
};

export default Commentary;