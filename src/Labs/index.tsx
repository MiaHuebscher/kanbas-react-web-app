import store from "./store";
import { Provider } from "react-redux";
import Lab1 from "./Lab1";
import { Route, Routes, Navigate} from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab 4";
import Lab5 from "./Lab 5";
import Exam from "./Exam";

export default function Labs() {
    return (
        <Provider store={store}>
            <div id="wd-labs">
                <h1 className="ms-3">Mia Huebscher, Section 1</h1>
                <h1 className="ms-3">Labs</h1>
                <TOC />
                <br />
                <Routes>
                    <Route path="/" element={<Navigate to="Lab1" />} />
                    <Route path="Lab1" element={<Lab1 />} />
                    <Route path="Lab2" element={<Lab2 />} />
                    <Route path="Lab3/*" element={<Lab3 />} />
                    <Route path="Lab4" element={<Lab4 />} />
                    <Route path="Lab5" element={<Lab5 />} />
                    <Route path="Exam" element={<Exam />} />
                </Routes>
            </div>
        </Provider>
    );
}