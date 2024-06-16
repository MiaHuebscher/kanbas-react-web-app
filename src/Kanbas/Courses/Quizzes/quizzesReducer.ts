import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
    updatingQuiz: {},
    newQuiz: {_id: "new", title: "New Quiz", course: "", due: "", availableFrom: "", 
              availableUntil: "", questions: "", points: "", quizType: "graded quiz",
              assignmentGroup: "quizzes", instructions: "Don't Fail", shuffleAnswers: true, 
              timeLimit: true, minutes: "30", allowMultipleAttempts: false, assignTo: "Everyone"}
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: quiz }) => {
            const newQuiz: any = {
              _id: new Date().getTime().toString(),
              title: quiz.title,
              course: quiz.course,
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
            state.newQuiz = {_id: "new", title: "New Quiz", course: "", due: "", availableFrom: "", 
                availableUntil: "", questions: "", points: "", quizType: "graded quiz",
                assignmentGroup: "quizzes", instructions: "Don't Fail", shuffleAnswers: true, 
                timeLimit: true, minutes: "30", allowMultipleAttempts: false, assignTo: "Everyone"};
            state.updatingQuiz = {};
        },
        deleteQuiz: (state, { payload: quizzes }) => {
            state.quizzes = state.quizzes.filter((q: any) => q._id !== quizzes);
        },
        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quiz._id ? quiz : q) as any;
            state.newQuiz = {_id: "new", title: "New Quiz", course: "", due: "", availableFrom: "", 
                availableUntil: "", questions: "", points: "", quizType: "graded quiz",
                assignmentGroup: "quizzes", instructions: "Don't Fail", shuffleAnswers: true, 
                timeLimit: true, minutes: "30", allowMultipleAttempts: false, assignTo: "Everyone"};
            state.updatingQuiz = {};
        },
        editQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quizId ? { ...q, editing: true } : q) as any;
        },
        setQuiz: (state, { payload: quiz }) => {
            state.updatingQuiz = quiz;
        },
    },
});

export const {setQuizzes, addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;