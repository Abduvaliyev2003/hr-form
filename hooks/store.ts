import {
    TypedUseSelectorHook,
    useDispatch as reduxDispatch,
    useSelector as reduxSelector,
} from "react-redux";
import { RootState, AppDispatch } from "../store";

export const useDispatch = () => reduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = reduxSelector;
