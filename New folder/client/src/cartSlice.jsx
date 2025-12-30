import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({

      name:"mycart",
      initialState:{
        cart:[]
      },
      reducers:{
         addToCart:(state, actions)=>{
            console.log(actions.payload);
            state.cart.push(actions.payload);
         },

         qntyInc:(state, actions)=>{
            
            for (var i=0; i<state.cart.length; i++){
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
            }
         },
          qntyDec:(state, actions)=>{
            
            for (var i=0; i<state.cart.length; i++){
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty--;
                }
            }
         },

         proRemove:(state, actions)=>{
            state.cart= state.cart.filter(key=> key.id!=actions.payload.id);
         }
      }
})

export const {addToCart, qntyInc, qntyDec, proRemove}  = cartSlice.actions;
export default cartSlice.reducer;