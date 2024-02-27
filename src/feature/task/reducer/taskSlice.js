import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: { name: '' },
    reducers: {
        setTempTaskName: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const selectTempTask = (state) => state.task;

export const { setTempTaskName } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;