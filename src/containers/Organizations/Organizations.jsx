import React from 'react';
import { fetchOrganizations } from '../../services/dataAPI';
import clases from "./Organizations.module.scss";

const Organizations = () => {
    fetchOrganizations()
    return (
        <div>
           o
        </div>
    )
}

export default Organizations;