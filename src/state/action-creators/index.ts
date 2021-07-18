export const depositeMoney = (amount: Number) => {
  return (dispatch: any) => {
    dispatch({
      type: "deposite",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: Number) => {
  return (dispatch: any) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

export const displaySigUp = () => {
  return (dispatch: any) => {
    dispatch({
      type: "openSignUp",
    });
  };
};
export const closeSigUp = () => {
  return (dispatch: any) => {
    dispatch({
      type: "closeSignUp",
    });
  };
};

export const displaySignIn = () => {
  return (dispatch: any) => {
    dispatch({
      type: "openSignIn",
    });
  };
};
export const closeSignIn = () => {
  return (dispatch: any) => {
    dispatch({
      type: "closeSignIn",
    });
  };
};
