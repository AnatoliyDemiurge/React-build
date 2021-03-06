import React, { useState } from 'react';
import { Form, Input } from 'antd';
import clases from "./Login.module.scss";
import { userLogin } from '../../services/userAPI';
import ButtonBlack from '../../components/ButtonBlack/ButtonBlack';
import { useDispatch } from 'react-redux/es/exports';
import { setUser } from '../../store/slices/userSlice/userSlice';
import {useNavigate} from "react-router-dom";
import { ORGANIZATIONS_ROUTE } from '../../lib/consts';
import { store } from '../../store';
const Login = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const signIn = () => {
        userLogin(login, password)
        .then((data) => {
            console.log(data);
            dispatch(setUser({
                token: data.token,
            }));
            console.log(store.getState().user.isAuth)
            navigate(ORGANIZATIONS_ROUTE)
        })
        .catch(() => alert('Invalid user!'))  
        // console.log(login, password)
        // userLogin(login, password)
    }

    return (
        <div className={clases.login}>
            <div className={clases.login__container}>
                <div className={clases.login__wrapper}>
                    <h4 className={clases.login__title}>Вход</h4>
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={signIn}
                    >
                        <Form.Item
                            rules={[
                                {
                                  required: true,
                                  message: 'Поле не может быть пустым!',
                                },
                              ]}
                            name="username"
                            className={clases.error}
                        >    
                            <Input
                                className={clases.login__field}
                                name="login"
                                placeholder="Логин" 
                                value={login}   
                                onChange={e=>setLogin(e.target.value)}
                                
                            />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                  required: true,
                                  message: 'Поле не может быть пустым!',
                                },
                                { min: 8,
                                  message: 'Пароль содержит от 8 символов' 
                                }
                              ]}
                            name="password"
                            className={clases.error}
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
                            <ButtonBlack>

                            </ButtonBlack>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;