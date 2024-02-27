import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
    name: "tasks",
    initialState:  [],
    reducers: {
        setTasks(state, action) {
            return action.payload;
        }, 
        addTask(state, action) {
            state.push(action.payload);
        },
        removeTask(state, action) {
            return state.filter((task) => task.id !== action.payload);
        },
        toggleDone(state, action) {
            return state.map((task) =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        },
        editTask(state, action) {
            const { id, name } = action.payload;
            const task = state.find((task) => task.id === id);
            if (task) {
                task.name = name;
            }
        }
      
    },
});

export const selectTasks = (state) => state.tasks;

export const { setTasks, addTask, removeTask, toggleDone, editTask } = taskListSlice.actions;

export const tasksReducer = taskListSlice.reducer;
