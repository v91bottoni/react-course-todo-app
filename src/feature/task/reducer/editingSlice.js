import { createSlice } from "@reduxjs/toolkit";

// Slice per lo stato di editing
const editingSlice = createSlice({
    name: "editing",
    initialState: { isEditing: false, editId: null },
    reducers: {
        setEditing(state, action) {
            state.isEditing = action.payload;
        },
        setEditId(state, action) {
            state.editId = action.payload;
        },
    },
});

export const selectEditing = (state) => state.editing
export const { setEditing, setEditId } = editingSlice.actions;

export const editingReducer = editingSlice.reducer;
