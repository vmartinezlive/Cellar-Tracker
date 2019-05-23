export const createWine = (wine) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid
    firestore.collection('wines').add({
      ...wine,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorID: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_WINE', wine: wine });
    }).catch((error) => {
      dispatch({ type: 'CREATE_WINE_ERROR', error });
    })
  }
};
  export const deleteWine = (wine) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      //make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid
  firestore.collection("wines").doc(wine).delete().then(() => {
    dispatch({type: 'DELETE_WINE', wine: wine });
  }).catch((error) => {
    dispatch({ type: 'CREATE_WINE_ERROR', error });
    })
  }
};
