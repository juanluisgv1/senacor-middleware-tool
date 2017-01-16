import React, { Component } from 'react';
import styled from 'styled-components';

class Result extends Component {

    render() {
        return (
            <div>
                {this.props.record.map((x, i) => <p>#{i}: node {x + 1}</p>)}
            </div>
        );
    }
}

const Text = styled.p`
    font-size: 2em;
`;

export default Result;
