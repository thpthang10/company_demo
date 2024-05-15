const initialState = {
  counter: 0,
};

// Reducer xu ly logic va tra ra state moi
// Sau khi state moi duoc tao ra store se tu dong cap nhat
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { state, counter: state.counter + 1 };
    case "DECREMENT":
      return { state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;
