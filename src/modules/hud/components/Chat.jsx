/* eslint-disable no-unused-vars */
import React from 'react';
import $ from 'jquery';
import '../css/chat.css';

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            fontFamily: 'SF Pro Display',
            fontSize: 13,
            lineHeight: 16,
            fontWeight: 700,
            fontOutline: true,
            bgState: 0,
            bgOpacity: 0.5,
            opacity: 1,
            width: 40,
            height: 40,
            timeoutHidden: 5000000,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Chat.jsx', error, errorInfo); // eslint-disable-line
    }

    componentWillUnmount() {
        const { EventManager: em } = window;
        em.removeHandler('chat');
    }

    componentDidMount() {
        const { EventManager: em } = window;
        let chat =
        {
            size: 0,
            history_limit: 50,  //Change this if you want to hold more/less chat history
            container: null,
            input: null,
            enabled: false,
            active: true,
            bgState: this.state.bgState,
            bgOpacity: this.state.bgOpacity,
            timeoutHidden: this.state.timeoutHidden,
        };
        let closeTimeout = null;

        if (chat.bgState === 2)
            $('#chat_messages').css("background-color", "rgba(0, 0, 0, " + chat.bgOpacity + ")");

        em.addHandler('chat', value => {
            if (value.type === 'hideHud') {
                document.getElementById('chat').style.display = 'none';
            }
            if (value.type === 'showHud') {
                document.getElementById('chat').style.display = 'block';
            }
            if (value.type === 'updateSettings') {
                this.setState({
                    fontFamily: value.fontFamily,
                    fontSize: value.fontSize,
                    lineHeight: value.lineHeight,
                    fontWeight: value.fontWeight,
                    fontOutline: value.fontOutline,
                    bgState: value.bgState,
                    bgOpacity: value.bgOpacity,
                    opacity: value.opacity,
                    width: value.width,
                    height: value.height,
                    timeoutHidden: value.timeoutHidden,
                });

                chat.bgState = value.bgState;
                chat.bgOpacity = value.bgOpacity;
                chat.timeoutHidden = value.timeoutHidden;

                if (chat.bgState === 2)
                    $('#chat_messages').css("background-color", "rgba(0, 0, 0, " + chat.bgOpacity + ")");
                else
                    $('#chat_messages').css("background-color", "rgba(0, 0, 0, 0)");


                $("#chat_messages").fadeIn('fast');
                if (closeTimeout) {
                    clearTimeout(closeTimeout);
                    closeTimeout = null;
                }
                if (chat.timeoutHidden < 99999000) {
                    closeTimeout = setTimeout(function () {
                        $("#chat_messages").fadeOut('slow')
                    }, chat.timeoutHidden);
                }
            }
            if (value.type === 'push') {
                chatAPI.push(value.message);
            }
            if (value.type === 'activate') {
                chatAPI.activate(value.enable);
            }
            if (value.type === 'show') {
                chatAPI.show(value.toggle);
            }
            if (value.type === 'clear') {
                chatAPI.clear();
            }
            else return;
        });

        function enableChatInput(enable) {
            try {
                mp.trigger("chatEnabled", enable); // eslint-disable-line
            }
            catch (e) {
                console.log(e);
            }

            try {
                if (enable) {
                    if (closeTimeout) {
                        clearTimeout(closeTimeout);
                        closeTimeout = null;
                    }
                    $("#chat_messages").fadeIn('fast');
                }
                else {
                    $("#chat_messages").fadeIn('fast');
                    if (closeTimeout) {
                        clearTimeout(closeTimeout);
                        closeTimeout = null;
                    }
                    if (chat.timeoutHidden < 99999000) {
                        closeTimeout = setTimeout(function () {
                            $("#chat_messages").fadeOut('slow')
                        }, chat.timeoutHidden);
                    }
                }

                if (chat.active === false
                    && enable === true)
                    return;

                if (enable !== (chat.input != null)) {
                    //chat_printing = enable;
                    try {
                        mp.invoke("focus", enable); // eslint-disable-line
                    }
                    catch (e) {
                        console.log(e);
                    }

                    if (enable) {
                        chat.input = $("#chat").append(`
                        <div id="chat-msg-input">
                            <div class='inputBlock'>
                                <input onkeyup="chatOnKeyUp()" id="chat_msg" type="text" placeholder="Say..." autoFocus/>
                                <div class="sendBtn" id='send' onClick='sendClick()'></div>
                            </div>
                            <div id="button-input">
                                <span class="active in_button" onClick="chatButtonClick(this.id)" id="RP">RP</span>
                                <span class="in_button" onClick="chatButtonClick(this.id)" id="OOC">OOC</span>
                                <span class="in_button" onClick="chatButtonClick(this.id)" id="DO">/do</span>
                                <span class="in_button" onClick="chatButtonClick(this.id)" id="ME">/me</span>
                                <span class="in_button" onClick="chatButtonClick(this.id)" id="REPORT">Репорт</span>
                            </div>
                        </div>
                        `).children(":last");
                        chat.input.children("input").focus();
                        if (chat.bgState === 1)
                            $('#chat_messages').css("background-color", "rgba(0, 0, 0, " + chat.bgOpacity + ")");
                        else if (chat.bgState === 2)
                            $('#chat_messages').css("background-color", "rgba(0, 0, 0, " + chat.bgOpacity + ")");
                        else
                            $('#chat_messages').css("background-color", "rgba(0, 0, 0, 0)");
                    }
                    else {
                        chat.input.fadeOut('fast', function () {
                            chat.input.remove();
                            chat.input = null;
                        });

                        if (chat.bgState === 1)
                            $('#chat_messages').css("background-color", "rgba(0, 0, 0, 0)");
                        else if (chat.bgState === 2)
                            $('#chat_messages').css("background-color", "rgba(0, 0, 0, " + chat.bgOpacity + ")");
                        else
                            $('#chat_messages').css("background-color", "rgba(0, 0, 0, 0)");
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        var chatAPI =
        {
            push: (text) => {
                try {
                    let textResult = escapeHtml(text);

                    var matchColors = /!\{#\w*\}/gi;
                    var match = textResult.match(matchColors);
                    if (match !== null) {

                        for (let i = 0; i < match.length; i++) {
                            let clr = match[i].replace(match[i], match[i].replace('!{', '').replace('}', ''));
                            textResult = textResult.replace(match[i], '<span style="color: ' + clr + '">');
                        }

                        for (let i = 0; i < match.length; i++) {
                            textResult += '</span>';
                        }
                    }

                    matchColors = /!\{\w*\}/gi;
                    match = textResult.match(matchColors);
                    if (match !== null) {

                        for (let i = 0; i < match.length; i++) {
                            let clr = match[i].replace(match[i], match[i].replace('!{', '').replace('}', ''));
                            textResult = textResult.replace(match[i], '<span style="color: #' + clr + '">');
                        }

                        for (let i = 0; i < match.length; i++) {
                            textResult += '</span>';
                        }
                    }

                    chat.container.prepend("<li>" + textResult + "</li>");

                    chat.size++;

                    if (chat.size >= chat.history_limit) {
                        chat.container.children(":last").remove();
                    }

                    $("#chat_messages").fadeIn('fast');
                    if (closeTimeout) {
                        clearTimeout(closeTimeout);
                        closeTimeout = null;
                    }
                    if (chat.timeoutHidden < 99999000) {
                        closeTimeout = setTimeout(function () {
                            $("#chat_messages").fadeOut('slow')
                        }, chat.timeoutHidden);
                    }
                }
                catch (e) {
                    console.log(e);
                }
            },

            clear: () => {
                try {
                    chat.container.html("");
                }
                catch (e) {
                    console.log(e);
                }
            },

            activate: (toggle) => {
                try {
                    if (toggle === false
                        && (chat.input != null))
                        enableChatInput(false);

                    chat.active = toggle;
                }
                catch (e) {
                    console.log(e);
                }
            },

            show: (toggle) => {
                try {
                    if (toggle)
                        $("#chat").show();
                    else
                        $("#chat").hide();

                    chat.active = toggle;
                }
                catch (e) {
                    console.log(e);
                }
            }
        };

        var entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '/': '&#x2F;',
            '`': '&#x60;',
            '=': '&#x3D;'
        };

        function escapeHtml(string) {
            return String(string).replace(/[&<>"'`=]/g, function (s) {
                return entityMap[s];
            });
        }
        $(document).ready(function () {
            chat.container = $("#chat ul#chat_messages");

            $(".ui_element").show();
            chatAPI.push("You have connected to Diamond Roleplay! Have a nice game.");
            $("body").keydown(function (event) {
                if (event.which === 84 && chat.input === null
                    && chat.active === true) {
                    enableChatInput(true);
                    event.preventDefault();
                }
                else if (event.which === 13 && chat.input != null) {
                    var value = $('#chat_msg').val();

                    if (value.length > 0) {
                        if (value[0] === "/") {
                            value = value.substr(1);

                            if (value.length > 0) {
                                try {
                                    mp.invoke("command", value); // eslint-disable-line
                                }
                                catch (e) {
                                    console.log(e);
                                }
                            }
                        }
                        else {
                            try {
                                mp.invoke("chatMessage", value); // eslint-disable-line
                            }
                            catch (e) {
                                console.log(e);
                            }
                        }
                    }

                    enableChatInput(false);
                }
            });
        });

    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div id="chat" style={
                    {
                        width: this.state.width + '%',
                        height: this.state.height + '%',
                        opacity: this.state.opacity,
                        fontWeight: this.state.fontWeight + 'px',
                        fontFamily: this.state.fontFamily,
                        fontSize: this.state.fontSize + 'px',
                        lineHeight: this.state.lineHeight + 'px'
                    }
                } className="ui_element">
                    <ul id="chat_messages"></ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Chat;

