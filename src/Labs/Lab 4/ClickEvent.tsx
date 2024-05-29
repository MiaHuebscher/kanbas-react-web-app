const hello = () => {
    alert("Hello World!");
};

const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};

export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h3>Click Event</h3>
            <button className="btn btn-dark"
              onClick={hello} id="wd-hello-world-click">
              Hello World!
            </button>&nbsp;
            <button className="btn btn-dark"
              onClick={() => lifeIs("Good!")}
              id="wd-life-is-good-click">
              Life is Good!
            </button>&nbsp;
            <button className="btn btn-dark"
              onClick={() => {
                hello();
                lifeIs("Great!");}} 
              id="wd-life-is-great-click">
              Life is Great!
            </button>
            <hr/>
        </div>

    );
}