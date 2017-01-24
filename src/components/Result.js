import React, { Component } from 'react';
import styled from 'styled-components';

class Result extends Component {

    render() {
        const idx = this.props.solutions.findIndex(x => x.id == this.props.solution);
        const solution = idx > -1 ? this.props.solutions[idx].text : "";
        return (
            <div>
                <Text>You have finished the {this.props.title}!</Text>
                <Text small>Your result is: {solution}</Text>
                {this.props.record.map((x, i) =>
                    <Node key={'node_' + i + Math.random()}>#{i}: node {x + 1}</Node>
                )}
            </div>
        );
    }
}

const Text = styled.p`
    font-size: ${props => props.small ? '1em' : '2em'};
`;

const Node = styled.p`
    color: 'rgb(0,0,0)';
`;

export default Result;
