const initState = {

    wines: [
      {id: '1', winename: 'Rose De Sphia', vintage: '2018', price: '32', region: 'contra costa county', location: 'Favalora Vineyards', varietal: 'Rose', category: 'white', alcohol: '15%', locationcolumn: 'B', locationrow: '2', notes: 'won awards from contra costa', pairingnotes: 'great with salmon' },
      {id: '1', winename: 'Rose De Sphia', vintage: '2018', price: '32', region: 'contra costa county', location: 'Favalora Vineyards', varietal: 'Rose', category: 'white', alcohol: '15%', locationcolumn: 'B', locationrow: '2', notes: 'won awards from contra costa', pairingnotes: 'great with salmon' },
      {id: '1', winename: 'Rose De Sphia', vintage: '2018', price: '32', region: 'contra costa county', location: 'Favalora Vineyards', varietal: 'Rose', category: 'white', alcohol: '15%', locationcolumn: 'B', locationrow: '2', notes: 'won awards from contra costa', pairingnotes: 'great with salmon' }

    ]
  }



const wineReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_WINE':
      console.log('created wine', action.wine);
      return state;
    case 'CREATE_WINE_ERROR':
      console.log('create wine error', action.error);
      return state;
    default:
      return state;

  }

}

export default wineReducer
