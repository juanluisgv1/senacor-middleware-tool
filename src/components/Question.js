import React, { Component } from 'react';
import styled from 'styled-components';

import BooleanQuestion from './BooleanQuestion';
import NumericQuestion from './NumericQuestion';
import SelectQuestion from './SelectQuestion';

import '../../resources/css/bootstrap.css';
import '../../resources/css/bootstrap-extend.css';

class Question extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selection: undefined,
        };

        this.questionComponents = {
            boolean: () => <BooleanQuestion onSelect={(value) => this.setState({selection: this.props.decision.onSelect(value)}) }/>,
            numeric: () => <NumericQuestion onSelect={(value) => null}/>,
            select:  () => <SelectQuestion onSelect={(value) => {
                let idx = props.decision.options.findIndex((x) => x.value == value)
                this.setState({selection: this.props.decision.options[idx].onSelect(value)})
            }
            }/>,
        };
    }

    render() {
        return (
            <div>
                <div className="col-sm-2"></div>
                <div className="col-sm-8 col-xs-12">
                    <Text>{this.props.decision.question}</Text>
                    { this.questionComponents[this.props.decision.type]()}
                </div>

                <div className="col-xs-2"></div>
                <div className="btn btn-icon btn-primary btn-lg col-xs-4">Previous</div>
                <div className="col-xs-2"></div>
                {
                    this.state.selection ?
                        <div className="btn btn-icon btn-primary btn-lg margin-right-5 col-xs-4"
                             onClick={() => this.state.selection ? this.props.onSelect(this.state.selection) : null }
                        >Next</div> : null
                }
            </div>
        );
    }
}

const Text = styled.p`
    font-size: 2em;
`;

export default Question;
