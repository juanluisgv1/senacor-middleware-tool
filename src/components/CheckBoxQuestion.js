import React, { Component } from 'react';
import styled from 'styled-components';

import '../../public/resources/css/bootstrap.css';
import '../../public/resources/css/bootstrap-extend.css';

export default class SelectQuestion extends Component {

    constructor(props){
        super(props);

        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            options: props.options.map(x => { return {value: false} })
        }

        console.log(this.props)
    }

    onInputChange(event){
        const name =  event.target.name;
        let options = this.state.options;
        this.props.options.map((x,i) => x.value == name ? options[i].value = true : null);
        this.setState({options: options});

        this.props.onInputChanged(this.state.options);
    }

    render() {
        return (
            <div className="form-group">
                {this.props.options.map((x,i) => {
                    return (
                        <label className="form-control margin-right-20">
                            <input
                                name={x.value}
                                type="checkbox"
                                checked={this.state.options[i].value}
                                onChange={this.onInputChange} />
                            {' ' + x.text}
                        </label>
                    )
                })}
            </div>
        );
    }
}

const Text = styled.p`
    font-size: 2em;
`;

