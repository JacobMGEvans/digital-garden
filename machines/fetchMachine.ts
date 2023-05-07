import { createMachine, assign } from 'xstate'

export const fetchMachine = createMachine({
    id: 'fetch',
    initial: 'idle',
    context: {
      retries: 0
    },
    states: {
      idle: {
        on: {
          FETCH: 'loading'
        }
      },
      loading: {
        on: {
          RESOLVE: 'success',
          REJECT: 'failure'
        }
      },
      success: {
        type: 'final'
      },
      failure: {
        on: {
          RETRY: {
            target: 'loading',
            actions: assign({
              retries: (context:{retries: number}, event) => context.retries + 1
            })
          }
        }
      }
    }
  });