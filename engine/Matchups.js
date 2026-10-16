import Events from "./Events.js";

const Matchups = {

  "inside-zone": {

    "cover-3": {
      blocking: [
        {
          weight: 70,
          events: [
            Events.runningLaneOpens
          ]
        },
        {
          weight: 30,
          events: [
            Events.runningLaneCloses
          ]
        }
      ]
    },

    "run-blitz": [
      {
        weight: 65,
        events: [
          Events.runningLaneCloses,
          Events.safetyTackle
        ]
      },
      {
        weight: 35,
        events: [
          Events.runningLaneOpens,
          Events.linebackerWrongGap
        ]
      }
    ],

    "man-blitz": [
      {
        weight: 50,
        events: [
          Events.runningLaneCloses
        ]
      },
      {
        weight: 50,
        events: [
          Events.runningLaneOpens
        ]
      }
    ]
  },

  "counter": {
    "cover-3": [
      {
        weight: 60,
        events: [
          Events.pullingGuardWinsBlock,
          Events.runningLaneOpens
        ]
      },
      {
        weight: 40,
        events: [
          Events.runningLaneCloses,
          Events.safetyTackle
        ]
      }
    ],
    "run-blitz": [
      {
        weight: 70,
        events: [
          Events.pullingGuardWinsBlock,
          Events.runningLaneOpens,
          Events.linebackerWrongGap
        ]
      },
      {
        weight: 30,
        events: [
          Events.runningLaneCloses,
          Events.safetyTackle
        ]
      }
    ],
    "man-blitz": [
      {
        weight: 55,
        events: [
          Events.pullingGuardWinsBlock,
          Events.runningLaneOpens
        ]
      },
      {
        weight: 45,
        events: [
          Events.runningLaneCloses
        ]
      }
    ]
  },

  "slant": {
    "cover-3": [
      {
        weight: 65,
        events: [
          Events.receiverSeparation,
          Events.completedPass
        ]
      },
      {
        weight: 35,
        events: [
          Events.qbUnderPressure
        ]
      }
    ],
    "run-blitz": [
      {
        weight: 75,
        events: [
          Events.receiverSeparation,
          Events.completedPass
        ]
      },
      {
        weight: 25,
        events: [
          Events.qbUnderPressure
        ]
      }
    ],
    "man-blitz": [
      {
        weight: 55,
        events: [
          Events.receiverSeparation,
          Events.completedPass
        ]
      },
      {
        weight: 45,
        events: [
          Events.qbUnderPressure
        ]
      }
    ]
  }

};

export default Matchups;