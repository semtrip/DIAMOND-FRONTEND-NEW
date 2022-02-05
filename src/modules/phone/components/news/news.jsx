import { observer } from "mobx-react-lite";
import React from "react";

import store from "../../phone-store";

import '../news/css/news.css'


const News = observer(() =>{
    const state = store.state
    return(
        <React.Fragment >
            <div className="app-screen">
            {
                state.appNews.page === 'list' ?
                <div className="news-screen">
                    <span className="title">Live Inveder</span>
                    <div className="info">
                            <div className="avatar">
                                {state.appCall.player.avatar !== '' ? 
                                    <img src={state.appCall.player.avatar} alt="avatar" />:null
                                }
                            </div>
                            <div className="text">
                                <div className="name">{state.appNews.name}</div>
                                <div className="tag">{state.appNews.tag}</div>
                            </div>
                        </div>
                    <div className="content">
                                {
                                    store.arrayReverse(state.appNews.message).map((item, i)=>(
                                        <div className="item" key={i}>
                                            <div className="title">{item.title}</div>
                                            <div className="description">{item.description}</div>
                                            <div className="info-item">
                                                <div className="name">{item.author.name}</div>
                                                <div className="tag">{item.author.tag}</div>
                                                <div className="date">
                                                    <span>{item.date}</span>
                                                    <span>{item.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                    </div>
                    <div className="addBtn" onClick={store.addNews}/>
                </div>:null
            }
            {
                state.appNews.page === 'add' ?
                <div className="add-news">
                    <span className="title">Live Inveder</span>
                    <div className="info">
                            <div className="avatar">
                                {state.appCall.player.avatar !== '' ? 
                                    <img src={state.appCall.player.avatar} alt="avatar" />:null
                                }
                            </div>
                            <div className="text">
                                <div className="name">{state.appNews.name}</div>
                                <div className="tag">{state.appNews.tag}</div>
                            </div>
                    </div>
                    <div className="pole">
                        <textarea name="" id="msgNews" cols="30" rows="10" maxLength='1000' placeholder="Enter the ad text..." onChange={store.textareaLength}></textarea>
                        <span>{state.appNews.addMessage !== undefined ? state.appNews.addMessage.length : '0'}/1000</span>
                    </div>
                    <div className="btns">
                        <div className="btn" id="cancel" onClick={store.addNews}>Cancel</div>
                        <div className="btn" id="publish" onClick={store.publishNews}>To publish</div>
                    </div>
                </div>:null
            }

            </div>
        </React.Fragment>
    )
})
export default News