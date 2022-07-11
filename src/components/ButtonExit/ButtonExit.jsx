import React from 'react';
import exitPic from "../../assets/img/exit.svg"
import clases from "./ButtonExit.module.scss";
import {useNavigate} from "react-router-dom";
import { removeUser } from '../../store/slices/userSlice/userSlice';
import { LOGIN_ROUTE } from '../../lib/consts';
import { useDispatch } from 'react-redux/es/exports';
const ButtonExit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const signOff = () =>{
        dispatch(removeUser({
            token: null
        }));
        localStorage.token = ''
        navigate(LOGIN_ROUTE)
    }
    return (
        <div 
            className={clases.container}
            onClick={signOff}
        >
            <img
                src={exitPic}
                alt="exit icon"
            />
            <p className={clases.container__text}>Выйти</p>
        </div>
    )
}

export default ButtonExit;