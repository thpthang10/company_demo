const initialState = {
  multiplyCounter: 1,
};

// Reducer xu ly logic va tra ra state moi
// Sau khi state moi duoc tao ra store se tu dong cap nhat
const counterMultiplyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DOUBLE":
      return { state, multiplyCounter: state.multiplyCounter * 2 };
    case "HALF":
      return { state, multiplyCounter: state.multiplyCounter * 0.5 };
    default:
      return state;
  }
};

export default counterMultiplyReducer;
