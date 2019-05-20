export const createWine = (wine) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    dispatch({type: 'CREATE_WINE', wine: wine });
  }
};
