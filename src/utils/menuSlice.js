import { createSlice } from "@reduxjs/toolkit";
const menuSlice = createSlice({
    name: "menu",
    initialState:{
        isMenuOpen: true
    },
    reducers:{
        toogleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
})
export const{toogleMenu} = menuSlice.actions;
export default menuSlice.reducer;