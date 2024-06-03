import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/modulesReducer";
import assignmentsReducer from "./Courses/Assignments/assignmentsReducer";
import quizzesReducer from "./Courses/Quizzes/quizzesReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    quizzesReducer,
  },
});
export default store;

