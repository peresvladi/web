


let reader = new  FileReader();
reader.readAsArrayBuffer(file);


reader.onload = function(e) {
    // The file reader gives us an ArrayBuffer:
    let buffer = e.target.result;
  
    // We have to convert the buffer to a blob:
    let videoBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });
  
    // The blob gives us a URL to the video file:
    let url = window.URL.createObjectURL(videoBlob);
  
    video.src = url;
  }