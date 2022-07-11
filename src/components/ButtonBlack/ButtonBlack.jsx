import React from 'react';
import { Button} from 'antd';
import clases from "./ButtonBlack.module.scss";

const ButtonBlack = () => {
    return (
        <Button 
            type="primary"
            htmlType="submit"
            className={clases.button}
        >
            Войти
        </Button>
    )
}

export default ButtonBlack;