import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDark: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state,action) => {
    state.isDark = action.payload  
    },
    
  },
})


export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer