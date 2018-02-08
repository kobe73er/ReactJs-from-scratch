import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import logo from './logo.svg';
import './App.css';
import Content from './component/Content'
import Boy from './component/Boy'
import {BeatLoader} from 'react-spinners'



class Header extends React.Component {
    render() {
        return (
            <div><h2>i am header component!</h2></div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerText: "Header from state",
            content: "Content from state",
            loading: true
        }
    }

    onClickMethod = () => {
        alert("on click!")
        this.setState({content: "changed!"})
    }

    stopLoader = () => {
        this.setState({loading: !this.state.loading})
    }

    sayHello = () => {
        alert("App component say hello!")
    }

    forBoy = () => {
        this.refs.refContent.contentLaugh()
    }

    forceUpdateHandler = () => {
        this.forceUpdate();
    }

    findDomNodeHandler = () => {
        let myDiv = document.getElementById("myDiv")
        ReactDOM.findDOMNode(myDiv).style.color = "green"
    }


    render() {
        let i = 1;
        let myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        let arr = ["book1", "book2"]


        return (

            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 onClick={this.onClickMethod} className="App-title">{this.state.content}</h1>
                </header>
                <Content appSayHello={this.sayHello} ref="refContent"/>
                <Boy appMethodHandler={this.forBoy}/>


                <h1>{1 + 1}</h1>
                <h1 style={myStyle}>{i === 1 ? 'True' : 'False'}</h1>
                {/*multipy line comments right here*/}
                {arr}

                <Header/>
                <button onClick={this.stopLoader}>stop loader!</button>

                <BeatLoader
                    color={'#123abc'}
                    loading={this.state.loading}
                />

                <button onClick={this.forceUpdateHandler}>Force Update</button>
                <h4>Random number:{Math.random()}</h4>

                <button onClick={this.findDomNodeHandler}> Find Dom Node</button>
                <div id="myDiv">Dom Node</div>


            </div>
        );
    }
}

export default App;
