import React, { Component } from 'react';
import styled from 'styled-components';

import BooleanQuestion from './BooleanQuestion';
import NumericQuestion from './NumericQuestion';
import SelectQuestion from './SelectQuestion';

//import '../../resources/css/bootstrap.css';
//import '../../resources/css/bootstrap-extend.css';

class Question extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selection: undefined,
        };

        this.questionComponents = {
            boolean: () =>
                <BooleanQuestion onSelect={(value) => this.setState({selection: this.props.decision.onSelect(value)}) }/>,
            numeric: () =>
                <NumericQuestion onSelect={(value) => this.setState({selection: this.props.decision.onSelect(value)})}/>,
            select:  (options) =>
                <SelectQuestion
                    options={options}
                    onSelect={(value) => {
                        let idx = props.decision.options.findIndex((x) => x.value == value)
                        this.setState({selection: this.props.decision.options[idx].onSelect(value)})
                    }
                }/>,
        };
    }

    render() {
        return (
            <div>
                <div className="col-xs-12">
                    <Text>{this.props.decision.question}</Text>
                    <div className="col-xs-offset-3 col-xs-6">
                     { this.questionComponents[this.props.decision.type](this.props.decision.options)}
                    </div>
                </div>

                <div className="offset-xl-2 col-xl-8 col-xs-12">
                    <Button className="offset-xl-2 col-xl-4"
                         onClick={() => this.props.onSelect('end') }
                    >Previous</Button>
                    {
                        this.state.selection ?
                            <Button primary className="offset-xl-2 col-xl-4"
                                 onClick={() => this.state.selection ? this.props.onSelect(this.state.selection) : null }
                            >Next</Button>
                            : null
                    }
                </div>
            </div>
        );
    }
}

const Text = styled.p`
    font-size: 2em;
`;

const Button = styled.button`
    background: ${props => props.primary ? 'rgb(0, 150, 120)' : 'white'};
    color: ${props => props.primary ? 'white' : 'gray'};

    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid ${props => props.primary ? 'rgb(0, 150, 120)' : 'gray'};
    border-radius: 3px;
`;

export default Question;
