import React from 'react';

import SwitchListItem from './SwitchListItem';
import { useGetAppliancesQuery } from '../services/switches';

export const SwitchList = () => {

    const { data, error, isLoading } = useGetAppliancesQuery();

    console.log(data)
    return (
        <div className="content-container">
            <div className="list-header">
                <div >Switch</div>
                <div >Action</div>
            </div>
            {!isLoading && data ? (
                <div className="list-body">
                    {data.appliances.length === 0 ? (

                        <div className="list-item list-item--message">
                            <span>No switches</span>
                        </div>
                    ) : (
                        data.appliances.map((switchItm) => {
                            return <SwitchListItem key={switchItm.id} appliance={switchItm} />
                        })
                    )}
                </div>
            ) : (
                <div className="loader">
                    <img className="loader__image" src="/images/loader.gif" />
                </div>
            )}

        </div>
    )

}

export default SwitchList;
