import { Machine } from "xstate";

const pedestrianStates = {
  initial: `walk`,
  states: {
    walk: {
      on: {
        PED_TIMER: `wait`,
      },
    },
    wait: {
      on: {
        PED_TIMER: `stop`,
      },
    },
    stop: {},
  },
};

const lightMachine = Machine({
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
