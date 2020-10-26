export const initialState = {
    basket: [{
        id: "12345",
        title: "Headset",
        price: 123,
        rating: 4,
        image: "https://m.media-amazon.com/images/I/8115eX+WTcL._AC_AA360_.jpg"
    }],
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            break;
        default:
            return state;
    }
}

export default reducer;