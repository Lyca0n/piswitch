import React from 'react';
import { connect } from 'react-redux';
import SwitchListItem from './SwitchListItem';
import { startAddSwitches, startToggleSwitch } from '../actions/switches';

class SwitchList extends React.Component {
    constructor(props){        
        super(props);
        this.props.startAddSwitches();
    }
    startToggleSwitch = (pin) =>{
        this.props.startToggleSwitch(pin);
    }
    render(){
        return(
            <div className="content-container">
                <div className="list-header">
                    <div >Switch</div>
                    <div >Action</div>
                </div>
                <div className="list-body">
                    {this.props.switches.length === 0 ? (
                        
                        <div className="list-item list-item--message">
                            <span>No switches</span>
                        </div>
                    ) : (
                            this.props.switches.map((switchItm) => {                                
                                return <SwitchListItem  startToggleSwitch={this.props.startToggleSwitch} key={switchItm.pin} itm={switchItm} />
                            })
                        )}
                </div>
            </div>
        )
    }
}

//map function
const mapStateToProps = (state) => {
    return {
        switches: state.switches
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        startAddSwitches: ()=>{dispatch(startAddSwitches())},    
        startToggleSwitch: (pin)=>{dispatch(startToggleSwitch(pin))}
    }    
}

//"connect()"" returns a function to recieve the component name
export default connect(mapStateToProps,mapDispatchToProps)(SwitchList);
