import React from 'react';

import PlusIcon from '../../img/iphone/icons/plus_icon.png';
import AddWallpaperIcon from '../../img/iphone/icons/add_wallpaper_icon.png';

class Wallpapers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexOfWallpaper: 0,
      isAddingNewWallpaper: true,
    }
  }


  ChangeWallpaper(event) {
    const wallpaper = event.target;
    let container = wallpaper;
    if (container.classList.contains('active')) container = container.parentElement;
    const isActive = container.querySelector('.checkbox').classList.contains('active');
    if (isActive) return;

    const box = container.parentElement;
    const wallpapers = box.querySelectorAll('.wallpaper-box');

    wallpapers.forEach((e, i) => {
      if (e.querySelector('.checkbox').classList.contains('active')) {
        e.querySelector('.checkbox').classList.remove('active');
      }
    });

    container.querySelector('.checkbox').classList.add('active');

    const id = Number.parseInt(container.id.split('-')[1]);
    this.setState({ indexOfWallpaper: id });
  }

  onAddWallpaperClick(event) {
    this.setState({ isAddingNewWallpaper: true })
  }

  closeAddingScreen(event) {
    if (event.target.classList.contains('wallpaper-add-box'))
      this.setState({ isAddingNewWallpaper: false });
  }

  render() {
    return (
      <React.Fragment>
        <div className="wallpapers-box">
          <div className="title-box">
            <div className="title">Photo wallpaper</div>
            <div className="subtitle" onClick={this.onAddWallpaperClick.bind(this)}>
              <div className="text">Add</div>
              <img src={PlusIcon} alt="" className="icon" />
            </div>
          </div>
          <div className="wallpapers-content">
            {this.props.wallpapers.map((e, i) => {
              return (
                <React.Fragment>
                  <div className="wallpaper-box" id={`wallpaper-${i}`} key={i} onClick={this.ChangeWallpaper.bind(this)}>
                    <img src={e.url} alt="" className="wallpaper" />
                    <div className={`checkbox ${e.isActive ? 'active' : ''}`}></div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
          <div className="button" onClick={this.props.onAcceptWallpaperClick(this.state.indexOfWallpaper)}>Apply wallpaper</div>
        </div>
        {this.state.isAddingNewWallpaper ?
          <React.Fragment>
            <div className="add-new-wallpaper" onClick={this.closeAddingScreen.bind(this)}>
              <div className="wallpaper-add-box" >
                <div className="wallpaper-add-content">
                  <img src={AddWallpaperIcon} alt="" className="icon" />
                  <div className="other-box">
                    <div className="text">To put your wallpaper on your phone, go to the site “IMGUR”, upload your photo, then copy the link and paste it in the field below:</div>
                    <input type="text" className="url" placeholder='Insert the link...' />
                    <div className="button" onClick={this.props.addNewWallpaper}>Add</div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
          : <></>}
      </React.Fragment>
    )
  }
}
export default Wallpapers;