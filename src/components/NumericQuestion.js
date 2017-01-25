import React, { Component } from 'react';
import styled from 'styled-components';

import '../../public/resources/css/bootstrap.css';
import '../../public/resources/css/bootstrap-extend.css';

class NumericQuestion extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="form-group">
                <input className="form-control" type="number"
                       onChange={(e) => this.props.onSelect(e.target.value)}
                />
            </div>
        );
    }
}

const Text = styled.p`
    font-size: 2em;
`;

export default NumericQuestion;
