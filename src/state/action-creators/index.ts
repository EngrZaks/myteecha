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
