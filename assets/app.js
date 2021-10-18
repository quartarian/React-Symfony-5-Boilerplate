/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
                <h1>Starting Here</h1>
                <pre>assets/app.ls</pre>
            </div>
        );
    }
}

console.log( document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
