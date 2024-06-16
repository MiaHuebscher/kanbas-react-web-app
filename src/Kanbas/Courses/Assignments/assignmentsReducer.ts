import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
    updatingAssignment: {},
    newAssignment: {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "100",
    assignmentGroup: "ASSIGNMENTS", displayGradeAs: "Percentage", submissionType: "Online",
    onlineEntryOption: "File Upload", assignTo: "Everyone", due: "", availableFrom: "", availableUntil: "" },
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
          },
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
            state.assignments = [...state.assignments, addedAssignment] as any;
            state.newAssignment = {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "",
            assignmentGroup: "ASSIGNMENTS", displayGradeAs: "Percentage", submissionType: "Online",
            onlineEntryOption: "File Upload", assignTo: "Everyone", due: "", availableFrom: "", availableUntil: "" };
            state.updatingAssignment = {};
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a ) as any;
            state.newAssignment = {_id: "new", title: "New Assignment", course: "", description: "New Description", points: "",
            assignmentGroup: "ASSIGNMENTS", displayGradeAs: "Percentage", submissionType: "Online",
            onlineEntryOption: "File Upload", assignTo: "Everyone", due: "", availableFrom: "", availableUntil: "" };
            state.updatingAssignment = {};
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? {...a, editing: true } : a) as any;
        },
        setAssignment: (state, { payload: assignment }) => {
            state.updatingAssignment = assignment;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignment, setAssignments } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;