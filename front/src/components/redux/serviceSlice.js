import { createSlice } from "@reduxjs/toolkit";
import { services } from "./data";

const initialState = {
    services:services,
    filteredService:services,
    searchTerm:''
}


const serviceSlice = createSlice({
    name:'service', 
    initialState, 
    reducers:{
        searchedWord:(state,action)=>{
            state.searchTerm = action.payload

            state.filteredService = services.filter((item)=>{
                return state.searchTerm.toLowerCase()===""? item : item.Description.toLocaleLowerCase().includes(state.searchTerm)
            })
           
             

    }}
})

export const serviceReducer = serviceSlice.reducer
export const { searchedWord } = serviceSlice.actions