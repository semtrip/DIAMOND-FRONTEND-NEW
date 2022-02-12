import React from 'react';
// import MaterialIcon from 'material-icons-react';
// import Avatar from '@material-ui/core/Avatar';
import '../Iphone/Calls/css/rotated.css'
import InputNumber from '../Iphone/Calls/InputNumber'
// import ActionList from '../Iphone/Calls/ActionList'
import Keyboard from '../Iphone/Calls/Keyboard';
import DoCallButton from '../Iphone/Calls/DoCallButton'
// import NavigationBar from '../Iphone/Calls/NavigationBar';

class Calls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: ""
        }
    }


    onClickKeyboardButton = (button) => {
        this.setState((state) => {
            return {number: state.number + button}
        })
    }

    setNumber = (value) => {
        this.setState({
            number: value
        })
    }

    onCall = (number) => {
        this.props.onCall(this.state.number)
    }

    render() {
        return (
            <div className="dedbit-menu calls">
                <InputNumber
                    number={this.state.number}
                    setNumber={this.setNumber}
                />
                <Keyboard
                    onClickKeyboardButton={this.onClickKeyboardButton}
                />
                <DoCallButton
                    action={this.onCall}
                />
            </div>
        )
    }
}

export default Calls;
