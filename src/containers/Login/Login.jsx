import React, { useState } from 'react';
import { Form, Input } from 'antd';
import clases from "./Login.module.scss";
import { userLogin } from '../../services/userAPI';
import ButtonBlack from '../../components/ButtonBlack/ButtonBlack';
import { useDispatch } from 'react-redux/es/exports';
import { setUser } from '../../store/slices/userSlice/userSlice';

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const signIn = (login, password) => {
        userLogin(login, password)
        .then(({data}) => {
            console.log(data);
            dispatch(setUser({
                token: data.token,
            }));
            // push('/');
        })
        .catch(() => alert('Invalid user!'))  
    }
    return (
        <div className={clases.login}>
            <div className={clases.login__container}>
                <div className={clases.login__wrapper}>
                    <h4 className={clases.login__title}>Вход</h4>
                    <Form
                        name="normal_login"
                        className="login-form"
                    >
                        <Form.Item
                            name="username"
                        >     
                            <Input
                                className={clases.login__field}
                                placeholder="Логин" 
                                value={login}
                                onChange={e=>setLogin(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                        >
                            <Input
                                className={clases.login__field}
                                type="password"
                                placeholder="Пароль"
                                value = {password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <ButtonBlack
                                onClick={signIn}
                            >

                            </ButtonBlack>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;