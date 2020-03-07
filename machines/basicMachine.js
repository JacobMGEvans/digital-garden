import { Machine } from 'xstate'

const paymentMachine = Machine({
    id: 'payment',
    initial: 'method',
    states: {
      method: {
        initial: 'cash',
        states: {
          cash: { on: { SWITCH_CHECK: 'check' } },
          check: { on: { SWITCH_CASH: 'cash' } },
          hist: { type: 'history' }
        },
        on: { NEXT: 'review' }
      },
      review: {
        on: { PREVIOUS: 'method.hist' }
      }
    }
  });
  
  const checkState = paymentMachine.transition('method.cash', 'SWITCH_CHECK');
  
  // => State {
  //   value: { method: 'check' },
  //   history: State { ... }
  // }
  
  const reviewState = paymentMachine.transition(checkState, 'NEXT');
  
  // => State {
  //   value: 'review',
  //   history: State { ... }
  // }
  
  const previousState = paymentMachine.transition(reviewState, 'PREVIOUS').value;
  
  // => { method: 'check' }