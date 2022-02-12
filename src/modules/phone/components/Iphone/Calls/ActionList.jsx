import React from 'react'
import './css/calls.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';


const ActionList = ({ number }) => {
    
    const actions = [
        {icon: 'person_add', text: 'Create a new contact', action: () => console.log(`I'm creating a new contact ${number}`)},
        {icon: 'person', text: 'Add to contacts', action: () => console.log(`I'm adding to contacts ${number}`)},
        {icon: 'message', text: 'Send the SMS', action: () => console.log(`I'm sending the SMS ${number}`)},
    ]

    return (
        <div className="calls__actions">
            {actions.map((item, index) => (
                <div className="calls__actions__item" onClick={item.action} key={item.text}>
                    <div className="calls__actions__item__icon">
                        <MaterialIcon icon={item.icon} size={20} color="#1C3AA9" />
                    </div>
                    <span className="calls__actions__item__text">{item.text}</span>
                </div>
            ))}
        </div>
    )
}

export default ActionList