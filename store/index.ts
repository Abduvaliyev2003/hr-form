import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import answersSlice from "./answersSlice";
import idSlice from "./idSlice";

const store = configureStore({
    reducer: {
        answer: answersSlice,
        id: idSlice,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
