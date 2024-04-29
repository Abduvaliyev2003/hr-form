import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { answersStateProps, answersActionProps } from "./types";
import questions from "../components/Questions/questions.json";

export const answersSlice = createSlice({
    name: "answers",

    initialState: {
        answers: [],
    } as answersStateProps,

    reducers: {
        push: (
            state: answersStateProps,
            action: PayloadAction<answersActionProps>
        ): void => {
            const { name, value } = action.payload;

            const answers = state.answers.filter((data) => data.name === name);

            const last = questions.filter((data) => data.name === name);
            // console.log(last);
            // let countStr = value.length;

            // let newValue =
            //     last[0].type === "radio" ? value.slice(0, countStr - 1) : value;

            if (answers.length) {
                answers[0].value = value;
            } else {
                const answer = { name, value };
                state.answers.push(answer);
            }
        },
        pushCheckbox: (
            state: answersStateProps,
            action: PayloadAction<answersActionProps>
        ): void => {
            const { name, value, checked } = action.payload;

            const answers = state.answers.filter((data) => data.name === name);

            if (answers.length) {
                if (checked) {
                    answers[0].value += `, ${value}`;
                } else {
                    let lastValue = answers[0].value;
                    let newLang = lastValue.includes(value)
                        ? lastValue.replace(value, "")
                        : value;

                    answers[0].value = newLang;
                }
            } else {
                const answer = { name, value: value };
                state.answers.push(answer);
            }
        },
    },
});

export const { push, pushCheckbox } = answersSlice.actions;

export default answersSlice.reducer;
