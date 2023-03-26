const recordClick = function (recorderBtn) {
  this.recordingEnabled = false
  return () => {
    this.recordingEnabled = !this.recordingEnabled
    recorderBtn.style.color = this.recordingEnabled ? 'red' : 'white'
  }
}

const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

  // const recorderBtn = document.getElementById('record')
  // recorderBtn.addEventListener('click', recordClick(recorderBtn))

  const view = new View();
  // view.renderVideo({ userId: 'test01', url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDk0OTYwZGZmZTM0YmY3MWI0NDE4MWI2Zjc4NjVkMmQ4ZDBlOTFmOSZjdD1n/TuDaPP6VwTObsqzG4p/giphy.mp4', })
  // view.renderVideo({ isCurrentId: true, url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDk0OTYwZGZmZTM0YmY3MWI0NDE4MWI2Zjc4NjVkMmQ4ZDBlOTFmOSZjdD1n/TuDaPP6VwTObsqzG4p/giphy.mp4', })
  // view.renderVideo({ userId: 'test02', url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDk0OTYwZGZmZTM0YmY3MWI0NDE4MWI2Zjc4NjVkMmQ4ZDBlOTFmOSZjdD1n/TuDaPP6VwTObsqzG4p/giphy.mp4', })

}

window.onload = onload