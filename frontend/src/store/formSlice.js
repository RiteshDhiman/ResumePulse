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
        },
        setProjects : (state, action) => {
            state.projects = action.payload
        },
        setExperience : (state, action) => {
            state.experience = action.payload
        }
    }
})

export const { setPersonal, setEducation, setProjects, setExperience} = formSlice.actions;
export default formSlice.reducer