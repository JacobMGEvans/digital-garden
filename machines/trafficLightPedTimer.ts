import { createMachine } from "xstate";

const pedestrianStates = {
  states: {
    walk: {},
    wait: {},
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
//   red: 'stop'
// }

lightMachine.transition(`red.stop`, `PED_TIMER`).value;
// => {
//   red: 'walk'
// }
