import React, { Component } from 'react';
import styled from 'styled-components';

import '../../resources/css/bootstrap.css';
import '../../resources/css/bootstrap-extend.css';

class SelectQuestion extends Component {

    render() {
        return (
            <div className="form-group">
                <select required="" className="form-control"
                        onChange={(e) => this.props.onSelect(e.target.value)}>
                    <option disabled="" hidden="" value=""> - Auswählen -</option>
                    <option value="0">Option 1</option>
                    <option value="1">Option 2</option>
                    <option value="2">Option 3</option>
                </select>
            </div>
        );
    }
}

const Text = styled.p`
    font-size: 2em;
`;

export default SelectQuestion;
