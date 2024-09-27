
import { createSlice } from "@reduxjs/toolkit";


const slice= createSlice({

    name: 'Slice',
    initialState :{
        name : null
    },
    reducers:{
        setNames:(state, action)=>{
            state.name = action.payload
        }
    }
})

export const {setNames }= slice.actions;

export default slice.reducer;