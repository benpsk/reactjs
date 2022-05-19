import React from "react";
import "./index.css";
// import CusContext from "./topics/CusContext";
import ErrorBound from "./topics/ErrorBound";


class App extends React.Component {
  render() {
    return (
        // <CusContext />
        <ErrorBound />
    );
  }
}

export default App;