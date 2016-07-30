import React, {Component} from 'react';
import SingleDropdown from './examples/single-dropdown';
import SingleAsyncDropdown from './examples/single-async-dropdown';
import SingleSearchDropdown from './examples/single-search-dropdown';
import SingleApplyDropdown from './examples/single-apply-dropdown';
import '../resources/css/styles.css';
import '../resources/css/buttons.css';
import '../../src/rdropdown.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="header">
                    <h1>RDropdown</h1>
                    <p>A Github-flavoured dropdown menu for ReactJs.</p>
                </header>
                <nav className="navigation">
                    <div className="container">
                    <a className="link" href="https://github.com/jamhall/rdropdown">Code</a>
                    <a className="link" href="https://github.com/jamhall/rdropdown">Documentation</a>
                    <span className="button">
                        <a className="github-button" href="https://github.com/jamhall/rdropdown" data-icon="octicon-star" data-style="mega" data-count-href="/jamhall/rdropdown/stargazers" data-count-api="/repos/jamhall/rdropdown#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star jamhall/rdropdown on GitHub">Star</a>
                        </span>
                    </div>
                </nav>
                <div className="content">
                    <div className="container">
                        <div className="example">
                            <h2>Countries</h2>
                            <div className="info">
                                This is the simplest example using all of the default options. <a href="https://github.com/jamhall/rdropdown/blob/master/demo/src/examples/single-dropdown.js">Source</a>
                            </div>
                            <SingleDropdown />
                        </div>
                        <div className="example">
                            <h2>Countries (async)</h2>
                            <div className="info">
                                You can load options asynchronously by passing a promise instead of an array of options. <a href="https://github.com/jamhall/rdropdown/blob/master/demo/src/examples/single-async-dropdown.js">Source</a>
                            </div>
                            <SingleAsyncDropdown />
                        </div>
                        <div className="example">
                            <h2>Countries (search)</h2>
                            <p>You can also filter options by setting a couple of options</p>
                            <SingleSearchDropdown />
                            <div className="info">
                                <a href="https://github.com/jamhall/rdropdown/blob/master/demo/src/examples/single-search-dropdown.js">Source</a>
                            </div>
                        </div>
                        <div className="example">
                            <h2>Countries (apply selected options)</h2>
                            <SingleApplyDropdown />
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <p>Copyright © <a href="https://github.com/jamhall">Jamie Hall</a></p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
