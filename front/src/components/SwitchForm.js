import React from 'react';
import { useGetPinsQuery } from '../services/pins';
import { useCreateApplianceMutation, useDeleteApplianceByIdMutation,useUpdateApplianceByIdMutation ,useGetAppliancesQuery } from '../services/switches';

export const SwitchForm = ({ switchFormData, onSubmit }) => {

    const { data: switchData } = useGetAppliancesQuery();
    const pinData = useGetPinsQuery(undefined,
        {
            selectFromResult: ({ data }) => {
                const usedPins = switchData && switchData.appliances ? switchData.appliances.map(itm => itm.pin) : []
                if (data && data.pins) {
                    console.log({
                        pins: [...data.pins.filter(itm => !usedPins.includes(itm.number))]
                    })
                    return { ...data, pins: [...data.pins.filter(itm => !usedPins.includes(itm.number))] }
                }
                return data;
            }
        });

    const [updateAppliance] = useUpdateApplianceByIdMutation();
    const [deleteAppliance] = useDeleteApplianceByIdMutation();
    const [createAppliance] = useCreateApplianceMutation();
    const [values, setValues] = React.useState({ pin: '', label: '' })
    const [error, setError] = React.useState();

    React.useEffect(() => {
        if (switchFormData) {
            setValues(switchFormData)
        }
    }, [switchFormData])

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };
    console.log(values)
    const submit = (e) => {
        e.preventDefault();
        if (!values.pin || !values.label) {
            setError('Provide a label and pin');
        } else {
            setError(null);
            const request = { ...values, pin: parseInt(values.pin, 10) };
            request.id ? updateAppliance(request)
            : createAppliance(request);
            onSubmit()
        }
    };

    const deleteItem = () => {
        deleteAppliance(values.id)
    }

    if (pinData.length < 0) {
        return <h1>Something went wrong.</h1>;
    } else {
        return (
            <form className="form" onSubmit={submit}>
                <div >{error && <p className="form__error">{error}</p>}</div>
                <input
                    className="text-input"
                    type="text"
                    placeholder="label"
                    autoFocus
                    name="label"
                    value={values.label}
                    onChange={onChange}
                />
                <select
                    className="text-input"
                    value={values.pin}
                    onChange={onChange}
                    type="number"
                    name="pin"
                    placeholder="Amount"
                >
                    <option key={0} value={''}>Pin Port</option>
                    {pinData && pinData.pins && pinData.pins.map((pin) => (
                        <option key={pin.number} value={pin.number}>{pin.number}</option>
                    ))}
                </select>
                <div>
                    <button className="button">Save</button>
                    {values.id ? (
                        <button onClick={deleteItem} className="button">Delete</button>
                    ) : null}
                </div>

            </form>

        );
    }

}

export default SwitchForm;
