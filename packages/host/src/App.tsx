import React from "react";
import ReactDOM from "react-dom";
import addNumbers from '@antti/utils';

import "./index.scss";

const App = () => {
  const n = addNumbers(1, 2)

  return <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <div>Add numbers = {n} </div>
  </div>
};
ReactDOM.render(<App />, document.getElementById("app"));
