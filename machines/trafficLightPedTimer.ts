import { createMachine } from "xstate";

const typingStates = {
  initial: `idle`,
  states: {
    typing: {
      on: {
        TYPING_TIMER: `typing`,
      },
    },
    stopped: {
      on: {
        TYPING_TIMER: `stop`,
      },
    },
    stop: {},
  },
};

const lightMachine = createMachine({
  id: `light`,
  initial: `green`,
  states: {
    green: {
      on: {
        TIMER: `yellow`,
      },
    },
    yellow: {
      on: {
        TIMER: `red`,
      },
    },
    red: {
      on: {
        TIMER: `green`,
      },
      ...pedestrianStates,
    },
  },
});

const currentState = `yellow`;

const nextState = lightMachine.transition(currentState, `TIMER`).value;
console.log(nextState);
// => {
//   red: 'walk'
// }

lightMachine.transition(`red.walk`, `PED_TIMER`).value;
// => {
//   red: 'wait'
// }
