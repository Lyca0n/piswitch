import React from 'react';
import { connect } from 'react-redux';
import pinsAvail from '../selectors/pins-available';
//import moment from 'moment';

class SwitchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: props.switch ? props.switch.pin : '',
            label: props.switch ? props.switch.label : '',                      
            focused: false,
            error: ''
        };
    }

    onLabelChange = (e) => {
        const label = e.target.value;
        this.setState(() => ({ label }));
    };

    onPinChange = (e) => {
        const pin = e.target.value;
        this.setState(() => ({ pin }));
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused }))
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.pin || !this.state.label) {
            this.setState(() => ({ error: 'Provide a label and pin' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                pin: this.state.pin,
                label: this.state.label
            });            
        }
    };
    render() {

        if (this.state.hasError) {            
            return <h1>Something went wrong.</h1>;
        } else {
            return (
                <form className="form" onSubmit={this.onSubmit}>
                    <div >{this.state.error && <p className="form__error">{this.state.error}</p>}</div>
                    <input
                        className="text-input"
                        type="text"
                        placeholder="label"
                        autoFocus
                        value={this.state.label}
                        onChange={this.onLabelChange}
                    />
                    <select
                        className="text-input"
                        value={this.state.pin}
                        onChange={this.onPinChange}
                        type="number"
                        placeholder="Amount"
                    >
                    <option key={0} value={''}>Pin Port</option>
                    { this.props.pins.map((pin)=>(
                        <option key={pin.number} value={pin.number}>{pin.number}</option>
                    ))}
                    </select>

                    <div>
                    <button className="button">Save</button>
                    </div>
                </form>

            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        pins: pinsAvail(state.pins,state.switches)
    };
};

//"connect()"" returns a function to recieve the component name
export default connect(mapStateToProps)(SwitchForm);
