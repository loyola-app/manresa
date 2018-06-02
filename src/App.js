import React, { Component } from 'react';
import Header from './components/header';
import Welcome from './components/welcome';
import ReactGlobalStyle from 'react-global-style';
import Examination from './components/examination';

class App extends Component {
    render() {
        return (
            <div>
                <ReactGlobalStyle className={`sans-serif w-100`} />
                <Header />
                <Welcome />
                <Examination />
            </div>
        );
    }
}

export default App;
