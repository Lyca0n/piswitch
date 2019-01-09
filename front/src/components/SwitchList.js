import React from 'react';
import { connect } from 'react-redux';
import SwitchListItem from './SwitchListItem';

const SwitchList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div >Switch</div>
            <div >Action</div>
        </div>
        <div className="list-body">
            {props.switches.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No switches</span>
                </div>
            ) : (
                    props.switches.map((switchItm) => {
                        return <SwitchListItem key={switchItm.pin} {...switchItm} />
                    })
                )}
        </div>
    </div>
);

//map function
const mapStateToProps = (state) => {
    return {
        switches: state.switches
    };
};

//"connect()"" returns a function to recieve the component name
export default connect(mapStateToProps)(SwitchList);
