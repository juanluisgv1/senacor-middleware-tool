import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

import BooleanQuestion from './BooleanQuestion';
import NumericQuestion from './NumericQuestion';
import SelectQuestion from './SelectQuestion';
import CheckBoxQuestion from './CheckBoxQuestion';

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
            checkbox:  (options) => {
                //this.setState({selection: true});
                let array = options.map(x => false);
                return (
                    <CheckBoxQuestion
                        options={options}
                        //onInputChanged={options => {array = options; console.log('current array', array)}}
                        onInputChanged={(options) => {
                            let counter = 0;
                            array = options;
                            for (var i = 0, j = array.length; i < j; i++)
                                if(array[i].value) counter++;

                            console.log('array: ', array);
                            console.log('counter: ', counter);
                            this.setState({selection: counter})//this.props.decision.onSelect(counter);
                        }}/>
                );
            }
        };
    }

    render() {
        console.log(this.props.decision)
        return (
            <div>
                <div className="col-xs-12">
                    <Text>{this.props.decision.question}</Text>
                    <div className="col-sm-offset-3 col-sm-6">
                     { this.questionComponents[this.props.decision.type](this.props.decision.options)}
                    </div>
                </div>

                <div className="offset-xl-2 col-xl-8 col-xs-12">
                    { !this.props.decision.start && <Button className="offset-xl-2 col-xl-4"
                         onClick={() => this.props.onSelect('end') }>Previous</Button> }
                    {
                        this.state.selection || this.props.decision.type == 'checkbox' ?
                            <Button blinker primary className="offset-xl-2 col-xl-4"
                                 onClick={() => this.state.selection ? this.props.onSelect(this.state.selection) : null }
                            >Next</Button>
                            : null
                    }
                </div>
            </div>
        );
    }
}

const blinker = keyframes`
    50% { opacity: 0; };
`;

const Text = styled.p`
    font-size: 2em;
`;

const Button = styled.button`
    background: ${props => props.primary ? 'rgb(0, 150, 120)' : 'white'};
    color: ${props => props.primary ? 'white' : 'gray'};
    
    animation: ${props => props.blinker ? blinker : null} 2.5s linear infinite;

    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid ${props => props.primary ? 'rgb(0, 150, 120)' : 'gray'};
    border-radius: 3px;
`;

export default Question;
