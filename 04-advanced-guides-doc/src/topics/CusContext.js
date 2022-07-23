import React from 'react'
import DynamicContext from "./components/DynamicContext";
import SampleContext from "./components/SampleContext";

const ThemeContext = React.createContext('lignt');

class CusContext extends React.Component {
    render() {
        return (
             <ThemeContext.Provider value="dark">
                <SampleContext />
                <DynamicContext />
            </ThemeContext.Provider>
        );
    }
}

export default CusContext;