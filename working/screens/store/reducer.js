

const initialState = {
    cartItem  : []
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADDTOCART':

            const { data } = action.payload;

            
            return {
                cartItem : [
                    ...state.cartItem,
                    data
                   ]
            }
            default:
                return state;
    }
}