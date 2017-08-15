import c from '../actions/constants';

export default function(state = [], action) {
  switch (action.type) {
    case c.FETCH_WEATHER:
      /*
        Use the spread operator and return a new array
        so that we NEVER MUTATE state.

        I put state after the action payload data so
        the concat adds the new city to the front of
        the array.
      */
      return [ action.payload.data, ...state ];
  }
  return state;
}
