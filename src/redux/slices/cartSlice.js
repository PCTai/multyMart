import { createSlice } from "@reduxjs/toolkit"



const initialState ={
    cartItem: [

    ],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem : (state, action) =>{
            const newItem= action.payload;
            const exitItem = state.cartItem.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!exitItem){
                state.cartItem.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    amount: 1,
                    image: newItem.image,
                    price: newItem.price,
                    totalPrice: newItem.price ,
                });

            }
            else{
                exitItem.amount++;
                exitItem.totalPrice +=exitItem.price;
            }
            
        },
        removeItem :(state, action) =>{
            state.cartItem.pop(action.payload);
        },
        setItem :(state, action) =>{
            const exitItem = state.cartItem.find(item => item.id === action.payload.id);
            if(action.payload.minus){
                
                exitItem.amount--;
                exitItem.totalPrice -= exitItem.price;
            }
            else{
                exitItem.amount++;
                exitItem.totalPrice +=exitItem.price;
            }
        }
    }
})

export const selectCartItem= state => state.cartItem;

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;