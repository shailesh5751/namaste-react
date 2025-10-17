import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = () => (<div className="head" tabIndex={5}>
    {JsxHeading2}
    Good night !!
</div>)

const JsxHeading2 =( <h2 className="head2" tabIndex={5}>
    Namaste React in JSX 🚀
</h2>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JsxHeading/>);
