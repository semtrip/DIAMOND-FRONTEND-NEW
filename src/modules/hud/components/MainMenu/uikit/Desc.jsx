import React from 'react'
import parseText from '../functions/parseText'

const styles = {
    header: {
        fontFamily: 'Montserrat',
        color: '#fff',
        fontSize: '1.1rem',
        paddingRight: '0.8rem',
        paddingLeft: '0.8rem',
    }
};

export default function Desc(props) {
    return (
        <div className="menu-box-footer" style={{width: props.width}}>
            <p className="header" style={styles.header} dangerouslySetInnerHTML={{__html: parseText(props.desc)}}></p>
        </div>
    )
}