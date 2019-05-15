import React, { Component } from 'react';
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
class ImageCapture extends Component {
  state = {

  };

  onTakePhoto (dataUri) {
    // this.props.dispatch({ type: "takePhoto", payload: dataUri });
    
    let byteString;
    if (dataUri.split(',')[0].indexOf('base64') < 0) {
      throw new Error("I have no idea what just happened.")
    } else {
      byteString = atob(dataUri.split(',')[1]);
    }

    let bufferArray = new Uint8Array(byteString.length);

    for(let i = 0; i < byteString.length; i++) {
        bufferArray[i] = byteString.charCodeAt(i);
    };

    let madeBlob = new Blob([bufferArray], { type: 'image/png' });

    this.props.setPhoto(madeBlob);
  }
 
  onCameraError (error) {
    console.error('onCameraError', error);
  }
 
  onCameraStart (stream) {
    console.log('onCameraStart');
  }
 
  onCameraStop () {
    console.log('onCameraStop');
  }
 
  render () {
    return (
      <div className="App">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          onCameraError = { (error) => { this.onCameraError(error); } }

          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.PNG}
          isMaxResolution = {false}
          isImageMirror = {false}
          isSilentMode = {true}
          isDisplayStartCameraError = {true}
          isFullscreen = {false}
          sizeFactor = {1}
          onCameraStart = { (stream) => { this.onCameraStart(stream); } }
          onCameraStop = { () => { this.onCameraStop(); } }
        />
        { this.state.dataUri && <img src={this.state.dataUri} alt="testing" /> }
        { this.state.testBlob && <img src={URL.createObjectURL(this.state.testBlob)} alt="argh" /> }
      </div>
    );
  }
}
 
export default ImageCapture;
