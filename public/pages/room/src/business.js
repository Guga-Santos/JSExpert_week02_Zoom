class Business {
  constructor({ room, media, view}) {
    this.room = room;
    this.media = media;
    this.view = view;

    this.currentStream = {};
  }
  //Se não for static, não conseguimos instanciar.
  static initialize(deps) {
    const instance = new Business(deps);
    return instance._init()
  }
 
  async _init() {
    this.currentStream = await this.media.getCamera();
    console.log('Init!!')

    this.addVideoStream('test01')

  }

  addVideoStream(userId, stream = this.currentStream) {
    const isCurrentId = false;
    this.view.renderVideo({
      userId,
      stream,
      isCurrentId
    })
  }
}