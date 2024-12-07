import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const tvSlice= createSlice({
    name: 'tv',
    initialState,
    reducers: {
        loadTV:(state,actions)=>{
            state.info=actions.payload
        },

        removeTV:(state,actions)=>{
            state.info=null
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loadTV,removeTV } = tvSlice.actions
  
  export default tvSlice.reducer