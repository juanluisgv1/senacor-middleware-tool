import React, { Component } from 'react';
import styled from 'styled-components';

import Question from './components/Question';
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

    render() {
        return (
            <div className="App">
                <Header>
                    <Logo src={logo}/>
                    <h3>Middleware decission tool</h3>
                </Header>
                <Question
                    key={this.state.current}
                    decision={decisionTree[this.state.current]}
                    onSelect={(next) => { this.setState({record:[...this.state.record, next], current: next})} }
                />
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

const decisionTree = [
    //#0
    {
        question: 'First question I must ask', //question
        type: 'boolean', //type
        weight: 0,
        onSelect: (value) => value ? 1 : 3, // logic to next action
    },
    //#1
    {
        question: 'Second question I must ask', //question
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
        question: 'Third question I must ask', //question
        type: 'numeric', //type
        weight: 0,
        onSelect: (value) => value == 0 ? 2 : 3, // logic to next action
    },
    //#3
    {
        question: 'Fourth question I must ask', //question
        type: 'boolean', //type
        weight: 0,
        onSelect: (value) => value == 10 ? -1 : 4, // logic to next action
    },
    //#4
    {
        question: 'Fifth question I must ask', //question
        type: 'boolean', //type
        weight: 0,
        onSelect: (value) => value == 10 ? -1 : 3, // logic to next action
    },
]

export default App;
