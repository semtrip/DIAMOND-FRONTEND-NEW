import React from 'react'
import './css/callingscreen.css'
import DeclineCallButton from './DeclineCallButton'
import DoCallButton from './DoCallButton'

const CallingScreen = ({ number = 'Undefined', avatar = 'https://a.rsg.sc//n/socialclub', name = 'Be unknown', going, onAccept, onDecline, setLink }) => {
    
    number = number || 'Undefined'
    avatar = avatar || 'https://a.rsg.sc//n/socialclub'
    name = name || 'Be unknown'

    const onCallDecline = () => {
        onDecline()
        setLink('/phone/android/calls')
    }

    const onCallAccept = () => {
        onAccept()

    }

    return (
        <div className="dedbit-menu calls__screen">
            <div className="calls__screen__data">
                <img src={avatar} alt="" className="calls__screen__data__avatar" />
                <span className="calls__screen__data__name">{name}</span>
                <span className="calls__screen__data__number">{number}</span>
            </div>
            <div className="calls__screen__buttons">
                <div className="calls__screen__buttons__item">
                    <DeclineCallButton action={onCallDecline} />
                    <span className="calls__screen__buttons__item__text">
                        {going ? 'Reject' : 'Cancel'}
                    </span>
                </div>
                {going && (
                <div className="calls__screen__buttons__item">
                    <DoCallButton action={onCallAccept} />
                    <span className="calls__screen__buttons__item__text">
                    Accept
                    </span>
                </div>
                )}
            </div>
        </div>
    )
}

export default CallingScreen