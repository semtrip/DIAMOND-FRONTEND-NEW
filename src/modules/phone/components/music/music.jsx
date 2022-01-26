import React from "react";

import '../music/css/music.css'

export default class Music extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            visible: true,
            phoneSetting: {
                wallpaper: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612942634_101-p-fon-na-aifon-cherno-krasnii-111.jpg',
                volume: false,
            }
        }
    }
    render() {
        return(
            <React.Fragment >
                <div className="app-screen">
                    <h1>Music</h1>
                </div>
            </React.Fragment>
        )
    }
}