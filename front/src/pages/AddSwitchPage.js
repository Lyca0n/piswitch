import React from 'react';
import { Link } from 'react-router-dom';
import SwitchForm from '../components/SwitchForm';


const AddSwitchPage = ({history}) => {
    const onSubmit = () => {
        history.push('/');
    };

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add a Appliance</h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/">Back</Link>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <SwitchForm onSubmit={onSubmit} />
            </div>
        </div>
    );

}


export default AddSwitchPage;
