import AddingAndRemovingToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";

export default function WorkingWithArrays() {
    return (
    <div id="wd-working-with-arrays">
        <h2>Working with Arrays</h2>
        <SimpleArrays />
        <ArrayIndexAndLength /><br />
        <AddingAndRemovingToFromArrays />
        <ForLoops /><br />
        <MapFunction />
        <FindFunction /><br />
        <FindIndex />
    </div>
    );
}