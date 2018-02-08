/**
 * Created by dengpengfei on 08/02/2018.
 */
import React, {Component} from 'react';

export default class Boy extends React.Component {
    constructor(props) {
        super(props);
    }

    forBoy = ()=>{
        this.props.appMethodHandler()
    }

    render() {
        return (
            <div>
                boy component!
                <button onClick={this.forBoy}>forBoy</button>
            </div>
        )
    }
}