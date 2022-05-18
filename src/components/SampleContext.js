import React from "react";

const ThemeContext = React.createContext('lignt');

class SampleContext extends React.Component {
  render() {
    return (
       <ThemeContext.Provider value="dark">
          <Toolbar />
       </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />
  }
}

function Button() {
  return (
    <button>hello</button>
  )
}

export default SampleContext;