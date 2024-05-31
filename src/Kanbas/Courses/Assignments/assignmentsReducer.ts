import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: [...assignments, {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "100",
    onlineEntryOption: "File Upload", assignTo: "Everyone" }],
    newAssignment: {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "100",
    onlineEntryOption: "File Upload", assignTo: "Everyone" },
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                points: assignment.points,
                due: assignment.due,
                availableFrom: assignment.availableFrom,
            };
            state.assignments = [...state.assignments, newAssignment];
            state.newAssignment = {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "100",
            onlineEntryOption: "File Upload", assignTo: "Everyone" }
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignment._id ? assignment : a )
            state.newAssignment = {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "100",
            onlineEntryOption: "File Upload", assignTo: "Everyone" };
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignmentId ? {...a, editing: true } : a);
        },
        setAssignment: (state, { payload: assignment }) => {
            state.newAssignment = assignment;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;