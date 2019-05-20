export const createWine = (wine) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({type: 'CREATE_WINE', wine: wine });
  }
};
