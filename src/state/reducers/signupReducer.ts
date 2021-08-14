export const toggleSignUp = (state = false, action: any) => {
  switch (action.type) {
    case "openSignUp":
      return !state;
    case "closeSignUp":
      return !state;
    default:
      return state;
  }
};

export const toggleSignIn = (state: Boolean = false, action: any) => {
  switch (action.type) {
    case "openSignIn":
      return true;
    case "closeSignIn":
      return false;
    default:
      return state;
  }
};

// export const userReducer = (state = {}, action:any) => {
//   switch (action.type) {
//     case "setUser":
//       return { ...state, action.payload};
//     default:
//       break;
//   }
// };
