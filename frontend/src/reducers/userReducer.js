const initialState = {
  login: true,
  id: 0,
  client: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
