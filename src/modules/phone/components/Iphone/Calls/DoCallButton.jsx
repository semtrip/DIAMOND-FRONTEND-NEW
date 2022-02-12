import React from 'react'
import './css/callbtn.css'
import MaterialIcon from 'material-icons-react';


const DoCallButton = ({ action }) => {
    

    return (
        <div className="calls__docallbtn__container">
            <div onClick={action} className="calls__docallbtn__container__btn">
                <MaterialIcon icon="call" size={32} color="#fff" />
            </div>
        </div>
    )
}

export default DoCallButton;