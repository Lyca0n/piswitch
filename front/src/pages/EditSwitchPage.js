import React from 'react';
import SwitchForm from '../components/SwitchForm';
import { Link, useParams, Redirect } from 'react-router-dom';
import { useGetApplianceByIdQuery } from '../services/switches';

const EditSwitchPage = ({ history }) => {

    const { id } = useParams();
    const { data, error, isLoading } = useGetApplianceByIdQuery(id);
    console.log(id, data);
    const onSubmit = () => {
        history.push('/');
    };

    return (
        id != undefined ?
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Appliance on port #{'pin'}</h1>
                        <div className="page-header__actions">
                            <Link className="button" to="/">Back</Link>
                        </div>
                    </div>
                </div>
                <div className="content-container">
                    <SwitchForm switchFormData={data} onSubmit={onSubmit} />
                </div>
            </div> :
            <Redirect to="/404" />

    );

}

export default EditSwitchPage;