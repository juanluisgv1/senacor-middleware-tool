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
                    <h3>Middleware decision tool</h3>
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
    title: 'Middleware-Wizzard',
    solutions: [
        {id: 1, text: "Yes, an implementation of a middleware is needed at your company"},
        {id: 2, text: "nah, rather no"},
        {id: 3, text: 'not necessary but yes if MMA'},
        {id: 4, text: 'mmmh rather yes'},
        {id: 5, text: 'You definetly need one'},
    ],
    decision: [
        //#0
        {
            question: 'How many employees are working in your company?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'bellow 1000',
                    onSelect: () => 1//next action
                },
                {
                    value: 1,
                    text: 'between 1000 & 10000',
                    onSelect: () => 2//next action
                },
                {
                    value: 2,
                    text: 'more than 10000',
                    onSelect: () => 3//next action
                },
            ]
        },
        //#1
        {
            question: 'How high is your current balance sheet total?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'bellow 1illion €',
                    onSelect: () => 4//next action
                },
                {
                    value: 1,
                    text: 'More than 1 Billion €',
                    onSelect: () => 2//next action
                },
            ]
        },
        //#2
        {
            question: 'Is your company highly geographically dispersed?', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ? 6 : 5, // logic to next action
        },
        //#3
        {
            question: 'Who is your main software vendor?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'SAP',
                    onSelect: () => -5//next action
                },
                {
                    value: 1,
                    text: 'Oracle',
                    onSelect: () => -5//next action
                },
                {
                    value: 2,
                    text: 'Microsoft',
                    onSelect: () => -5//next action
                },
                {
                    value: 2,
                    text: 'AWS',
                    onSelect: () => -5//next action
                },
            ]
        },
        //#4
        {
            question: 'Are mergers and acquisitions planned for the future or are about to be carried out?', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ?  7 : -1, // logic to next action
        },
        //#5
        {
            question: 'Are mergers and acquisitions planned for the future or are about to be carried out?', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ? 6 : 10 , // logic to next action
        },
        //#6
        {
            question: 'How many different systems are implemented?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'Below 25',
                    onSelect: () => 13 //next action
                },
                {
                    value: 1,
                    text: 'More than 25',
                    onSelect: () =>  3//next action
                },
            ]
        },
        //#7
        {
            question: 'How many employees are working for the company ater ther merger?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'Below 1000',
                    onSelect: () =>  8//next action
                },
                {
                    value: 1,
                    text: 'Between 1000 & 10000',
                    onSelect: () => 9 //next action
                },
                {
                    value: 1,
                    text: 'More than 10000',
                    onSelect: () => 16 //next action
                },
            ]
        },
        //#8
        {
            question: 'How high is your current balance sheet total after the merger?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'Below 1 Billion €',
                    onSelect: () =>  -1//next action
                },
                {
                    value: 1,
                    text: 'More than 1 Billion €',
                    onSelect: () => 9 //next action
                },
            ]
        },
        //#9
        {
            question: 'Is your company highly geographicaly dispersed?', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ? 6 : 10, // logic to next action
        },
        //#10
        {
            question: 'What is the maximum ratio of concurrent clients working in your system?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'Bellow 50%',
                    onSelect: () =>  11//next action
                },
                {
                    value: 1,
                    text: 'More than 50%',
                    onSelect: () => 6 //next action
                },
            ]
        },
        //#11
        {
            question: 'How high is the ratio of your maintenance costs?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'Bellow 35%',
                    onSelect: () =>  6//next action
                },
                {
                    value: 1,
                    text: 'More than 35%',
                    onSelect: () => 12 //next action
                },
            ]
        },
        //#12
        {
            question: 'is the existing infrastucture sufficient enough for the implementation of a middleware?', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ? -2 : -1, // logic to next action
        },
        //#13
        {
            question: 'is there a high variation of communication types at the company? (e.g. FTP, Web Services, SOAP, Warehouse statistics, Email)', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ? -2 : -1, // logic to next action
        },
    ]
}


export default App;
