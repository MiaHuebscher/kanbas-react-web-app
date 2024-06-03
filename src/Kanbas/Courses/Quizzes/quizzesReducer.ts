import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";

const initialState = {
    quizzes: quizzes
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        deleteQuiz: (state, { payload: quizzes }) => {
            state.quizzes = state.quizzes.filter((q: any) => q._id !== quizzes);
        },
    },
});

export const {deleteQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;