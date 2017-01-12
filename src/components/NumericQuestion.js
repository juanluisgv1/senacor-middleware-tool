import React, { Component } from 'react';
import styled from 'styled-components';

import '../../resources/css/bootstrap.css';
import '../../resources/css/bootstrap-extend.css';

class NumericQuestion extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="form-group">
                <input className="form-control" type="number"/>
            </div>
        );
    }
}

const Text = styled.p`
    font-size: 2em;
`;

export default NumericQuestion;
