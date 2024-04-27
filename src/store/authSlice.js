import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    setAuthInfo(state, action) {
      return (action.payload)
    },
    logout() {
      return null
    }
  }
})

export const {setAuthInfo, logout} = authSlice.actions
export default authSlice.reducer