import React from 'react'
import '../css/content.css'
import NavigationPanel from '../uikit/NavigationPanel'
import Cards from '../uikit/Cards'

const Content = (props) => {
    
    return (
        <div className="accountmenu__content">
            <NavigationPanel
                panels={props.panels}
                nick={props.nick}
                accountId={props.accountId}
                activePage={props.activeIndex}
                onChangePage={props.onChangePage}
                handleKeyPress={props.handleKeyPress}
                setHide={props.setHide}
            />
            <Cards
                {...props}
            />
        </div>
    )
}

export default Content