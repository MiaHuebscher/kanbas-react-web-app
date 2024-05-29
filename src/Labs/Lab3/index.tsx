import Add from "./Add";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes/Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FunctionDestructing from "./FunctionDestructing";
import Highlight from "./Highlight";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import Spreading from "./Spreading";
import Styles from "./Styles";
import Square from "./Square";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import PathParameters from "./PathParameters";
import { useSelector } from "react-redux";

export default function Lab3() {
  console.log('Hello World!');
  const { todos } = useSelector((state: any) => state.todosReducer);
  return(
    <div id="wd-lab3" className="container">
      <h2>Lab 3</h2>
      <VariablesAndConstants/><br />
      <VariableTypes /><br />
      <BooleanVariables /><br />
      <IfElse /><br />
      <TernaryOperator /><br />
      <ConditionalOutputIfElse /><br />
      <ConditionalOutputInline /><br />
      <LegacyFunctions /><br />
      <ArrowFunctions /><br />
      <ImpliedReturn /><br />
      <TemplateLiterals />
      <WorkingWithArrays /><br />
      <FilterFunction /><br />
      <JsonStringify /><br />
      <House /><br />
      <TodoItem /><br />
      <TodoList /><br />
      <Spreading /><br />
      <Destructing /><br />
      <FunctionDestructing /><br />
      <DestructingImports /><br />
      <Classes /><br />
      <Styles /><br />
      <Add a={3} b={4} /><br />
      <h4>Sqaure of 4</h4>
      <Square>4</Square><br /><br />
      <h4>Highlighting</h4>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight><br /><br />
      <PathParameters /><br />
      <h3>Todos from Lab 4</h3>
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <br /><br />
    </div>
  );
}
