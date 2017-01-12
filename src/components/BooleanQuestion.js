import React, { Component } from 'react';
import styled from 'styled-components';

import '../../resources/css/bootstrap.css';
import '../../resources/css/bootstrap-extend.css';

class BooleanQuestion extends Component {

    render() {
        return (
            <div>
                <div className="btn btn-icon btn-primary btn-lg margin-right-5"
                     onClick={() => this.props.onSelect(true)}>Yes</div>
                <div className="btn btn-icon btn-danger btn-lg margin-left-5"
                     onClick={() => this.props.onSelect(false)}>No</div>
            </div>
        );
    }
}

const Text = styled.p`
    font-size: 2em;
`;

export default BooleanQuestion;
