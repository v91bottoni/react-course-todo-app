import { createSlice } from "@reduxjs/toolkit";

// Slice per lo stato dell'alert
const alertSlice = createSlice({
    name: "alert",
    initialState: { show: false, msg: "" },
    reducers: {

        showAlert(state, action) {
            state.show = true;
            state.msg = action.payload;
        },

        hideAlert(state) {
            state.show = false;
            state.msg = "";
        },

    },
});

export const selectAlert = (state) => state.alert;

export const { showAlert, hideAlert } = alertSlice.actions;

export const alertReducer = alertSlice.reducer;