import { createSlice } from "@reduxjs/toolkit";

const portfoySlice = createSlice({
    name: "portfoy",
    initialState: {
        portfoy: [],
    },
    reducers: {
        setPortfoy: (state, action) => {
            state.portfoy = action.payload;
        },
        addPortfoy: (state, action) => {
            if (state.portfoy.find((item) => item.id === action.payload.id)) {
                return;
            }else{
                state.portfoy.push(action.payload);

            }
        },
        removePortfoy: (state, action) => {
            state.portfoy = state.portfoy.filter((item) => item.id !== action.payload);
        },
    }


})
export const { addPortfoy, removePortfoy ,setPortfoy} = portfoySlice.actions;
export default portfoySlice.reducer;