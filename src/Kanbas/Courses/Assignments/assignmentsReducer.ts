import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: [...assignments, {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "100",
    assignmentGroup: "ASSIGNMENTS", displayGradeAs: "Percentage", submissionType: "Online",
    onlineEntryOption: "File Upload", assignTo: "Everyone", due: "", availableFrom: "", availableUntil: "" }],
    updatingAssignment: {},
    newAssignment: {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "100",
    assignmentGroup: "ASSIGNMENTS", displayGradeAs: "Percentage", submissionType: "Online",
    onlineEntryOption: "File Upload", assignTo: "Everyone", due: "", availableFrom: "", availableUntil: "" },
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const addedAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,
                assignmentGroup: assignment.assignmentGroup,
                displayGradeAs: assignment.displayGradeAs,
                submissionType: assignment.submissionType,
                onlineEntryOption: assignment.onlineEntryOption,
                assignTo: assignment.assignTo,
                due: assignment.due,
                availableFrom: assignment.availableFrom,
                availableUntil: assignment.availableUntil,
            };
            state.assignments = [...state.assignments, addedAssignment];
            state.newAssignment = {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "",
            assignmentGroup: "ASSIGNMENTS", displayGradeAs: "Percentage", submissionType: "Online",
            onlineEntryOption: "File Upload", assignTo: "Everyone", due: "", availableFrom: "", availableUntil: "" };
            state.updatingAssignment = {};
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            console.log(assignment);
            state.assignments = state.assignments.map((a) =>
                a._id === assignment._id ? assignment : a );
            state.newAssignment = {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "",
            assignmentGroup: "ASSIGNMENTS", displayGradeAs: "Percentage", submissionType: "Online",
            onlineEntryOption: "File Upload", assignTo: "Everyone", due: "", availableFrom: "", availableUntil: "" };
            state.updatingAssignment = {};
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignmentId ? {...a, editing: true } : a);
        },
        setAssignment: (state, { payload: assignment }) => {
            state.updatingAssignment = assignment;
            console.log(state.updatingAssignment);
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;