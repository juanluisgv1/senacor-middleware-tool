import React, { Component } from 'react';
import styled from 'styled-components';

import Question from './components/Question';
import Result from './components/Result';
import logo from '../resources/logo.png';
import './App.css';
import '../resources/css/bootstrap.css';
import '../resources/css/bootstrap-extend.css';

class App extends Component {

    constructor(){
        super();

        this.state = {
            record: [],
            current: 0,
        }
    }

    renderQuestions() {
        return (
            <Question
                key={this.state.current+ '_question' + Math.random()}
                decision={decisionTree.decision[this.state.current]}
                onSelect={(next) => {
                    if(next == "end")
                        this.setState({
                            current: this.state.record.pop(),
                            record:  this.state.record});
                    else
                        this.setState({
                            record:[...this.state.record, this.state.current],
                            current: next});


                }}
            />
        )
    }

    renderResults() {
        return (
            <Result
                key={this.state.current + '_result' + Math.random()}
                record={this.state.record}
                title={decisionTree.title}
                solutions={decisionTree.solutions}
                solution={ this.state.current*(-1) }
            />
        )
    }


    render() {
        return (
            <div className="App">
                <Header>
                    <Logo src={logo}/>
                    <h3>Middleware decission tool</h3>
                </Header>
                { this.state.current > -1 ? this.renderQuestions() : this.renderResults() }
            </div>
        );
    }
}

const Header = styled.div`
    margin-top: 20px;
`;

const Logo = styled.img`
    max-width: 250px;
`;

const decisionTree = {
    title: 'Middleware - o - metter',
    solutions: [
        {id: 1, text: "Honestly, you don't need a middleware"},
        {id: 2, text: "nah, rather no"},
        {id: 3, text: 'not necessary but yes if MMA'},
        {id: 4, text: 'mmmh rather yes'},
        {id: 5, text: 'You definetly need one'},
    ],
    decision: [
        //#0
        {
            question: 'First question', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ? 1 : 3, // logic to next action
        },
        //#1
        {
            question: 'Second question', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'Option 1',
                    onSelect: () => 2//next action
                },
                {
                    value: 1,
                    text: 'Option 2',
                    onSelect: () => 2//next action
                },
                {
                    value: 2,
                    text: 'Option 3',
                    onSelect: () => 3//next action
                },
            ]
        },
        //#2
        {
            question: 'Third question', //question
            type: 'numeric', //type
            weight: 0,
            onSelect: (value) => value == 0 ? 2 : 3, // logic to next action
        },
        //#3
        {
            question: 'Fourth question', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ? -1 : 4, // logic to next action
        },
        //#4
        {
            question: 'Fifth question', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ? -2 : 3, // logic to next action
        },
    ]
}


export default App;
