import React, { Component } from 'react';
import styled from 'styled-components';

import '../../resources/css/bootstrap.css';
//import '../../resources/css/bootstrap-extend.css';

class BooleanQuestion extends Component {

    render() {
        return (
            <div>
                <Button primary onClick={() => this.props.onSelect(true)}>Yes</Button>
                <Button onClick={() => this.props.onSelect(false)}>No</Button>
            </div>
        );
    }
}

const Text = styled.p`
    font-size: 2em;
`;

const Button = styled.button`
    background: ${props => props.primary ? 'deepskyblue' : 'lightcoral'};
    color: rgb(255, 255, 255);

    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid ${props => props.primary ? 'deepskyblue' : 'lightcoral'};
    border-radius: 3px;
`;

export default BooleanQuestion;
