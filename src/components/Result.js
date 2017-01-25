import React, { Component } from 'react';
import styled from 'styled-components';

class Result extends Component {

    render() {
        const idx = this.props.solutions.findIndex(x => x.id == this.props.solution);
        const solution = idx > -1 ? this.props.solutions[idx].text : "";
        return (
            <div>
                <Text medium>You have finished the {this.props.title}!</Text>
                <Text small>Your result is: </Text><Text medium solution={this.props.solution}>{solution}</Text>
                {this.props.record.map((x, i) =>
                    <Node key={'node_' + i + Math.random()}>#{i}: node {x + 1}</Node>
                )}
            </div>
        );
    }
}

const Text = styled.p`
    font-size: ${props => props.small ? '1em' : (props.medium ? '2em' : '3em')};
    color: ${props => {
                props.solution ? 
                    ( () => {
                       switch(props.solution){
                           case 5:  'green';     break;
                           case 4:  'lightgreen';break;
                           case 3:  '#303030';   break;
                           case 2:  'sandybrown';break;
                           default: 'indianred';
                       }}) : '#303030'
            }};
`;

const Node = styled.p`
    color: 'rgb(0,0,0)';
`;

export default Result;
