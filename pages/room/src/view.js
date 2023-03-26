class View {
  constructor(){

  }

  createVideoElement({ muted = true, src, srcObject }) {
    const video = document.createElement('video');
    video.muted = muted;
    video.src = src
    video.srcObject = srcObject;

    if(src) {
      video.controls = true;
      video.loop = true;
      Util.sleep(200).then(_ => video.play());
    }

    if(srcObject) {
      video.addEventListener('loadedmetadata', () => video.play());
    }

    return video;
  }
  
  renderVideo({ userId, stream = null, url = null }) {
    const video = this.createVideoElement({ src: url, srcObject: stream });
  }

}