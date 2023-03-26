class Business {
  constructor({ room, media, view}) {
    this.room = room;
    this.media = media;
    this.view = view;
  }

  initialize(deps) {
    const instance = new Business();
    return instance._init()
  }
 
  _init() {
    this.currentStream = this.media.getCamera();
  }
}