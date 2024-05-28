import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

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
        </div>
    );
}
