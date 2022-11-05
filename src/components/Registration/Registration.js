import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import * as auth from '../../Auth/Auth';

const Registration = () => {

    const navigate = useNavigate();

    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    function handleLogin(e) {
        e.preventDefault();


        setName(name);
        setEmail(email);
        setPassword(password);

        auth.register(name, password, email).then((res) => {
            if (res) {
                console.log('успех. введите данные для входа');
                navigate('/sign-in')
            } else {
                console.log('что-то пошло не так');
            }
        });
    }



return (
    <>
        <div className='nav'>
            <div className='nav__container nav__container_auth'>

                <h3 className='nav__h3_lk'>Регистрация</h3>

                <form onSubmit={handleLogin} className='nav__container nav__container_auth'>

                    <input
                        value={name}
                        onChange={handleChangeName}
                        className='nav__input_lk'
                        placeholder='имя'
                    />

                    <input
                        value={email}
                        onChange={handleChangeEmail}
                        className='nav__input_lk'
                        placeholder='почта'
                    />

                    <input
                        value={password}
                        onChange={handleChangePassword}
                        className='nav__input_lk'
                        placeholder='пароль'
                    />

                    <button>Зарегистрироваться</button>
                </form>

                <div className='nav__container nav__container_row'>
                    <h4 className='nav__h3_lk'>Уже зарегистрированы?</h4>
                    <Link to='/sign-in'>
                        <button>Войти</button>
                    </Link>
                </div>


            </div>
        </div>
    </>
)
}

export default Registration;