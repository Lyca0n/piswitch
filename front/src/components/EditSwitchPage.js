import React from 'react';
import { connect } from 'react-redux';
import SwitchForm from './SwitchForm';
import {startEditSwitch} from '../actions/switches';

class EditSwitchPage extends React.Component {
    onSubmit = (switchinfo) => {        
        this.props.startEditSwitch(this.props.switchinfo.pin,switchinfo);            
        this.props.history.push('/');
    };    

    componentWillMount(){
        if(this.props.switchinfo == undefined){
            this.props.history.push('/404');
        }
    }

    render() {        
        return (
            this.props.switchinfo != undefined ? 
                <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Switch on port #{this.props.switchinfo.pin}</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SwitchForm switch={this.props.switchinfo} onSubmit={this.onSubmit}/>
                </div>
            </div> :             
            <div>oops</div>            

        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        startEditSwitch: (id, switchinfo) => {
            dispatch(startEditSwitch(id,switchinfo));
        }
    }
};

const mapStateToProps = (state, props) => {
    return {
        switchinfo: state.switches.find((switchinfo) => switchinfo.pin === parseInt(props.match.params.id,10))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(EditSwitchPage);
