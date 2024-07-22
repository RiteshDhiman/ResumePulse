import {createSlice} from '@reduxjs/toolkit'

const formSlice = createSlice({
    name : 'form',
    initialState : {
        personal : {},
        academics : {},
        projects : {},
        experience : {},
    },

    reducers : {
        setPersonal : (state, action) => {
            state.personal = action.payload
        }, 
        setEducation : (state, action) => {
            state.academics = action.payload
        }
    }
})

export const { setPersonal, setEducation } = formSlice.actions;
export default formSlice.reducer