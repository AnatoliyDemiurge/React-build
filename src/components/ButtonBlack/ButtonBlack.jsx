import React from 'react';
import { Button} from 'antd';
import clases from "./ButtonBlack.module.scss";

const ButtonBlack = () => {
    return (
        <Button 
            type="primary"
            htmlType="submit"
            // className="login-form"
            className={clases.button}
            // className={clases.imgWillChoose + ' ' + style.imgIsChoosing}
        >
            Войти
        </Button>
    )
}

export default ButtonBlack;