export const createWine = (wine) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...wine,
      authorFirstName: 'Victoria',
      authorLastName: 'Martinez',
      authorID: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_WINE', wine: wine });
    }).catch(() => {
      dispatch({ type: 'CREATE_WINE_ERROR' });
    })

  }
};
