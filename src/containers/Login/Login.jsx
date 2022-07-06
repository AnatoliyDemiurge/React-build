import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import "./login.scss";
import { userLogin } from '../../services/userAPI';

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    const signIn = async () =>{
        const user = await userLogin(login, password)
        console.log(user)
    }
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__wrapper-form">
                    <h4 className="login__title">Вход</h4>
                    <Form
                        name="normal_login"
                        className="login-form"
                    >
                        <Form.Item
                            name="username"
                        >     
                            <Input
                                className="login__field"
                                placeholder="Логин" 
                                value={login}
                                onChange={e=>setLogin(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                        >
                            <Input
                                className="login__field"
                                type="password"
                                placeholder="Пароль"
                                value = {password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button 
                                type="primary"
                                htmlType="submit"
                                className="login-form-button login__button"
                                onClick={signIn}
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;