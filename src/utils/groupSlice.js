import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
    
    name: "group",
    
    initialState: {
        groups: [],
        members: [],
        expense: [],
    },

    reducers: {
        addGroup: (state, action) => {
            state.groups.push(action.payload);
        },

        clearGroup: (state, action) => {
            state.groups.length = 0;
        },

        addMembers: (state, action) => {
            state.members.push(action.payload);
        },

        addExpense: (state, action) => {
            state.expense.push(action.payload);
        },

        deleteExpense: (state, action) => {
            state.expense.splice(action.payload, 1);
        }
    }
})

export const { addGroup, clearGroup, addMembers, addExpense, deleteExpense } = groupSlice.actions;
export default groupSlice.reducer;