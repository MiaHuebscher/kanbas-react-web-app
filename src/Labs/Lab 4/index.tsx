import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div id="wd-lab4" className="container">
            <h2>Lab 4</h2>
            <ClickEvent /><br />
            <PassingDataOnEvent /><br />
            <PassingFunctions theFunction={sayHello} /><br />
            <EventObject /><br />
            <Counter /><br />
            <BooleanStateVariables /><br />
            <StringStateVariables /><br />
            <DateStateVariable /><br />
            <ObjectStateVariable /><br />
            <ArrayStateVariable /><br />
            <ParentStateComponent /><br />
            <ReduxExamples /><br />
        </div>
    );
}
