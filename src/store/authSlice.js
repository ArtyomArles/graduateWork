import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    setAuthInfo(state, action) {
      return (action.payload)
    }
  }
})

export const {setAuthInfo} = authSlice.actions
export default authSlice.reducer