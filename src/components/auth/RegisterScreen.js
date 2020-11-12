import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { useForm } from '../../hooks/useForm';

import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Citlaly',
        email: 'citlaly@gmail.com',
        password: '123456',
        password2: '123456',
    });
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('Formulario correcto');
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            // console.log('Email is not valid');
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            // console.log('Password should be at least 6 characters');
            dispatch(setError('Password should be at least 6 characters'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <div>
            <>
                <h3 className="auth__title">Register</h3>
                <form onSubmit={handleRegister}>
                    {
                        msgError &&
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    }
                    <input autoComplete="off" className="auth__input" type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange} />
                    <input autoComplete="off" className="auth__input" type="text" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
                    <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                    <input className="auth__input" type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={handleInputChange} />
                    <button className="btn btn-primary btn-block mb-5" type="submit">Register</button>
                    <Link to="/auth/login" className="link">
                        Already registered?
                    </Link>
                </form>
            </>
        </div>
    )
}
