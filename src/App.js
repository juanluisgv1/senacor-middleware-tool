import React, { Component } from 'react';
import styled from 'styled-components';

import Question from './components/Question';
import Result from './components/Result';
import logo from '../public/resources/logo.png';
import './App.css';
import '../public/resources/css/bootstrap.css';
import '../public/resources/css/bootstrap-extend.css';

class App extends Component {

    constructor(){
        super();

        this.state = {
            record: [],
            current: 0,
            started: false,
        }
    }

    renderQuestions() {
        return (
            <Question style={{backgroundColor: '#DDDDDD'}}
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

    renderIntro() {
        return (
            <Button
                onClick={() => this.setState({started: true})}> Start the wizzard </Button>
        )
    }


    render() {
        return (
            <div className="App">
                <Header>
                    <Logo src={logo}/>
                    <h3>Middleware decision tool</h3>
                </Header>
                {
                    this.state.started ?
                        (this.state.current > -1 ? this.renderQuestions() : this.renderResults())
                        : this.renderIntro()
                }
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

const Button = styled.button`
    background: ${props => props.primary ? 'rgb(0, 150, 120)' : 'white'};
    color: ${props => props.primary ? 'white' : 'gray'};
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid ${props => props.primary ? 'rgb(0, 150, 120)' : 'gray'};
    border-radius: 3px;
`;

const decisionTree = {
    title: 'Middleware-Wizzard',
    solutions: [
        {id: 1, text: "No middleware needed"},
        {id: 2, text: "Rather no middleware needed"},
        {id: 3, text: 'Ratther no middleware needed, but if M&A are plannend, rather yes'},
        {id: 4, text: 'Rather yes'},
        {id: 5, text: 'Strongly recommending a middleware'},
    ],
    decision: [
        //#0
        {
            start: true,
            question: 'How many employees are working in your company?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: -1,
                    text: 'Below 1,000',
                    onSelect: () => -1//next action
                },
                {
                    value: 1,
                    text: 'Between 1,000 & 10,000',
                    onSelect: () => -5//next action
                },
                {
                    value: 2,
                    text: 'More than 10,000',
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
                    text: 'Below 1 Billion €',
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
            question: 'How many employees are working for your company after ther merger?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'Below 1,000',
                    onSelect: () =>  8//next action
                },
                {
                    value: 1,
                    text: 'Between 1,000 & 10,000',
                    onSelect: () => 9 //next action
                },
                {
                    value: 1,
                    text: 'More than 10,000',
                    onSelect: () => 17 //next action
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
            question: 'Is your company highly geographically dispersed?', //question
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
                    text: 'Below 50%',
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
                    text: 'Below 35%',
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
            question: 'Is the existing infrastucture sufficient enough for the implementation of a middleware?', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ? -2 : -1, // logic to next action
        },
        //#13
        {
            question: 'Is there a high variation of communication types at the company? (e.g. FTP, Web Services, SOAP, Warehouse statistics, Email)', //question
            type: 'boolean', //type
            weight: 0,
            onSelect: (value) => value ? 15 : 14, // logic to next action
        },
        //#14
        {
            question: 'Which of these issues do apply to your company\'s current situation', //question
            type: 'checkbox', //type
            weight: 0,
            options:[
                {
                    value: 0,
                    text: 'Are there currently high expenses in the IT department?'
                },
                {
                    value: 1,
                    text: 'Is your time-to-market development too long?'
                },
                {
                    value: 2,
                    text: 'Do you want a better communication between your system and your customers?'
                },
                {
                    value: 3,
                    text: 'Do you have any security issues?'
                },
                {
                    value: 4,
                    text: 'Are you experiencing high data redundancies?'
                },
                {
                    value: 5,
                    text: 'Do you need to improve your resource planning?'
                },
            ],
            onSelect: (values) => values <= 4 ? -3 : -1, // value: checked options
        },
        //#15
        {
            question: 'Which of these questions would you answer with yes?', //question
            type: 'checkbox', //type
            weight: 0,
            options:[
                {
                    value: 0,
                    text: 'Is a communication established or planned, which could be simplified or improved by a middleware?'
                },
                {
                    value: 1,
                    text: 'Are you currently working on bigger software projects or are you planning some in the near future?'
                },
            ],
            onSelect: (values) => values == 0 ? 16 : 17, // value: checked options
        },
        //#16
        {
            question: 'Who is your main software vendor?', //question
            type: 'select', //type
            weight: 0,
            options: [
                {
                    value: 0,
                    text: 'SAP',
                    onSelect: () => -4//next action
                },
                {
                    value: 1,
                    text: 'Oracle',
                    onSelect: () => -4//next action
                },
                {
                    value: 2,
                    text: 'Microsoft',
                    onSelect: () => -4//next action
                },
                {
                    value: 2,
                    text: 'AWS',
                    onSelect: () => -4//next action
                },
            ]
        },
        //#17
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
    ]
}


export default App;
