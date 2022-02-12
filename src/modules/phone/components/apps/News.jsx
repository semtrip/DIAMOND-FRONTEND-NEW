import React from 'react';

import AddNewsButton from '../../img/iphone/add-news-button.png'

class News extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      page: 'newsHistory',
      isAddingNews: false,
      textAreaSimCount: 0,
    }
  }

  onChangeTextArea(event) {
    const textArea = event.target;
    const value = textArea.value;

    this.setState({ textAreaSimCount: value.length });

  }

  cancelAddNews(status) {
    this.setState({ isAddingNews: status });
  }

  render() {
    return (
      <React.Fragment>
        <div className="news-content-box">
          <div className="text-title">Life Invader</div>
          <div className="title">
            <div className="icon">
              <img src={this.props.playerData.icon} alt="" />
            </div>
            <div className="text">
              <div className="name">{this.props.playerData.name}</div>
              <div className="login-id">
                <div className="login">{this.props.playerData.login}</div>
                <div className="id">#{this.props.playerData.tempId}</div>
              </div>
            </div>
          </div>

          <div className="news-history">
            {this.state.isAddingNews ?
              <React.Fragment>
                <div className="add-news-box">
                  <textarea
                    name="textarea"
                    id="textarea-0"
                    cols="30"
                    rows="10"
                    maxLength={1000}
                    className="textarea"
                    placeholder='Enter announcement text...'
                    onChange={this.onChangeTextArea.bind(this)}></textarea>
                  <div className="label">{this.state.textAreaSimCount}/1000</div>
                  <div className="buttons">
                    <div className="cancel-button" onClick={this.cancelAddNews.bind(this, false)}>Cancel</div>
                    <div className="sent-button" onClick={this.props.onPublishNewsClick}>Publish</div>
                  </div>
                </div>
              </React.Fragment>
              :
              this.props.news.map((news, index) => {
                return (
                  <React.Fragment>
                    <div className="news-container" id={index}>
                      <div className="title">{news.title}</div>
                      <div className="mainText">{news.text}</div>
                      <div className="bottom">
                        <div className="name-tag">
                          <div className="name">{news.author}</div>
                          <div className="tag">{news.authorData}</div>
                        </div>
                        <div className="date-time">
                          <div className="date">{news.date}</div>
                          <div className="time">{news.time}</div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })}
          </div>

          <div className={`add-news-container ${this.state.isAddingNews ? 'hide' : ''}`} onClick={this.cancelAddNews.bind(this, true)}>
            <img src={AddNewsButton} alt="" />
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default News;