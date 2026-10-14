const Events = {
    successfulHandoff: {
        id: "successful-handoff",
        name: "Successful Handoff",
        yardImpact: 1
    },

    runningLaneOpens: {
        id: "running-lane-opens",
        name: "Running Lane Opens",
        yardImpact: 3
    },

    runningLaneCloses: {
        id: "running-lane-closes",
        name: "Running Lane Closes",
        yardImpact: -1
    },

    pullingGuardWinsBlock: {
        id: "pulling-guard-wins-block",
        name: "Pulling Guard Wins Block",
        yardImpact: 2
    },

    linebackerWrongGap: {
        id: "linebacker-wrong-gap",
        name: "Linebacker Wrong Gap",
        yardImpact: 2
    },

    qbUnderPressure: {
        id: "qb-under-pressure",
        name: "QB Under Pressure",
        yardImpact: -3
    },

    receiverSeparation: {
        id: "receiver-separation",
        name: "Receiver Separation",
        yardImpact: 5
    },

    brokenTackle: {
        id: "broken-tackle",
        name: "Broken Tackle",
        yardImpact: 4
    },

    safetyTackle: {
        id: "safety-tackle",
        name: "Safety Tackle",
        yardImpact: -2
    },

    touchdown: {
        id: "touchdown",
        name: "Touchdown",
        yardImpact: 50
    }
};

export default Events;