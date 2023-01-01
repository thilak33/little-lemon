import React from 'react'
import '../styles/Component.css'
import Alert from './Alert'
import { useTable } from '../context/Table'


const Input = ({className,placeholder,onChange, value, type, name, id, validation, alertmsg}) => {

    const {alert, setAlert, invalid, setInvalid} = useTable()


    return (
        <div className='input-com'>
            <div className="form-floating">
                <input 
                    className={`input-${className} form-control ${invalid[name]}`}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    type={type}
                    name={name}
                    id={id}
                    onBlur={() => {
                            if(name !== 'cpassword'){
                                var pattern = new RegExp(validation);
                                let regex = pattern.test(value)
                                setAlert({...alert,[name]:regex})
                                setInvalid({...invalid,[name]:regex ? '' : 'is-invalid'})
                            }
                            if(type === 'date'){
                                let currentdate = new Date()
                                console.log(currentdate, value);
                            }
                        }
                    }
                />
                <label className={`input-label-primary`} htmlFor={id}>{placeholder}</label>
            </div>
            {alert[name] === false ? <Alert primary={className} error={alertmsg} /> : <></>}
        </div>
    )
}

export default Input