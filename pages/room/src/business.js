class Business {
  constructor({ room, media, view}) {
    this.room = room;
    this.media = media;
    this.view = view;

    this.currentStream = {};
  }
  //Se não for static, não conseguimos instanciar.
  static initialize(deps) {
    const instance = new Business();
    return instance._init()
  }
 
  _init() {
    this.currentStream = this.media.getCamera();
    console.log('Init!!', this.currentStream)
  }
}