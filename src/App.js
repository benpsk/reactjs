import React from "react";
import DynamicContext from "./components/DynamicContext";
import SampleContext from "./components/SampleContext";
import "./index.css";

const ThemeContext = React.createContext('lignt');

class App extends React.Component {
  render() {
    return (
       <ThemeContext.Provider value="dark">
          <SampleContext />
          <DynamicContext />
       </ThemeContext.Provider>
    );
  }
}

export default App;