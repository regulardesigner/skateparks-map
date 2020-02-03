// == Initial State
const initialState = {
  message: 'Hello from the store',
  coords: {
    lat: 0,
    long: 0,
  }
};

// == Types
const PUSH_USER_COORDS = 'PUSH_USER_COORDS';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PUSH_USER_COORDS:
      return {
        ...state,
        coords: {
          lat: action.lat,
          long: action.long,
        },
      };

    default:
      return state;
  }
};

// == Action Creators
// export const doSomething = message => ({
//   type: DO_SOMETHING,
//   message,
// });


// == Selectors


// == Export
export default reducer;
