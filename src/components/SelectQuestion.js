import React, { Component } from 'react';
import styled from 'styled-components';

import '../../public/resources/css/bootstrap.css';
import '../../public/resources/css/bootstrap-extend.css';

class SelectQuestion extends Component {

    render() {
        return (
            <div className="form-group">
                <select required="" className="form-control"
                        onChange={(e) => this.props.onSelect(e.target.value)}>
                    <option disabled="" hidden="" value=""> - Select an option -</option>
                    {this.props.options.map(x => (<option value={x.value}>{x.text}</option>))}
                </select>
            </div>
        );
    }
}

const Text = styled.p`
    font-size: 2em;
`;

export default SelectQuestion;
