import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,actions) => {
            // Redux toolkit uses immer BTS {library}.
            state.items.push(actions.payload);
        },
        removeItems:(state,actions) => {
            state.items.pop();
        },
        clearItems:(state,actions) => {
            // state.items.length = 0; // [] 
            return {items: []} // this new object replaced inside the originalState : {items :[]}.
        }
    }
})

export const {addItems,removeItems,clearItems} = cartSlice.actions;

export default cartSlice.reducer;