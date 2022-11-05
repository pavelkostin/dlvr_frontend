import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as auth from '../../Auth/Auth';


const Login = ({ handleLogin }) => {

    
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        auth.authorize(email, password)
            .then((data) => {
                if (data.jwt) {
                    handleLogin()
                    navigate('/my-account')
                }
            })

            .catch(err => console.log(err));
    }


    return (
        <>
            <div className='nav'>
                <div className='nav__container nav__container_auth'>

                    <h3 className='nav__h3_lk'>Авторизация</h3>

                    <form onSubmit={handleSubmit} className='nav__container nav__container_auth'>

                        <input
                            value={email}
                            onChange={handleChangeEmail}
                            className='nav__input_lk'
                            placeholder='логин'
                        />

                        <input
                            value={password}
                            onChange={handleChangePassword}
                            className='nav__input_lk'
                            placeholder='пароль'
                        />

                        <button>Войти</button>
                    </form>

                    <div className='nav__container nav__container_row'>
                        <h4 className='nav__h3_lk'>Нет личного кабинета? </h4>
                        <Link to='/sign-up'>
                            <button>Регистрация</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;