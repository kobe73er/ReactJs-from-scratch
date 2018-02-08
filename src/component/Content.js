/**
 * Created by dengpengfei on 08/02/2018.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }


    callAppMethod = () => {
        this.props.appSayHello()
    }

    contentLaugh = () => {
        alert("content component laugh!")
    }

    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <h4>{this.props.name}</h4>
                <button onClick={this.callAppMethod}>call app component say hello method</button>
            </div>
        )
    }
}
Content.propTypes = {
    name: PropTypes.string,
};

Content.defaultProps = {
    name: "andrew",
};