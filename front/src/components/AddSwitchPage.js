import React from 'react';
import { connect } from 'react-redux';
import SwitchForm from './SwitchForm';
import {startAddSwitch} from '../actions/switches';

class AddSwitchPage extends React.Component {
    onSubmit = (switchinfo) => {        
        this.props.startAddSwitch(switchinfo);            
        this.props.history.push('/');
    };       
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add a Switch</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SwitchForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        startAddSwitch: (switchinfo) => {
            dispatch(startAddSwitch(switchinfo));
        }
    }
};

export default connect(undefined,mapDispatchToProps)(AddSwitchPage);
