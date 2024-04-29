import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userIdActionProps, userIdStateProps, userIdType } from "./types";

export const idSlice = createSlice({
    name: "userId",

    initialState: {
        id: "",
        fileUrl: "",
    } as userIdType,

    reducers: {
        setId: (
            state: userIdActionProps,
            action: PayloadAction<userIdActionProps>
        ): void => {
            const { id } = action.payload;
            state.id = id;
        },
        setFileUrl: (
            state: userIdActionProps,
            action: PayloadAction<userIdActionProps>
        ): void => {
            const { fileUrl } = action.payload;
            state.fileUrl = fileUrl;
        },
    },
});

export const { setId, setFileUrl } = idSlice.actions;

export default idSlice.reducer;
