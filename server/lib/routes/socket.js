var cv = require('opencv');
var buf = require('buffers');

// camera properties
var camWidth = 320;
var camHeight = 240;
var camFps = 10;
var camInterval = 1000 / camFps;

// face detection properties
var rectColor = [0, 255, 0];
var rectThickness = 2;

// initialize camera
var camera = new cv.VideoCapture("http://admin:admin@192.168.173.181:8085/channel1");
camera.setWidth(camWidth);
camera.setHeight(camHeight);

module.exports = function (socket) {
///*
  setInterval(function() {
    camera.read(function(err, im) {
      if (err) throw err;

      im.detectObject('./node_modules/opencv/data/haarcascade_frontalface_alt2.xml', {}, function(err, faces) {
        if (err) throw err;

        for (var i = 0; i < faces.length; i++) {
          face = faces[i];
          im.rectangle([face.x, face.y], [face.width, face.height], rectColor, rectThickness);
        }

        socket.emit('frame', { buffer: im.toBuffer(".jpg").toString("base64")});
      });
    });
    //camera.release();
  }, camInterval);
//*/

/*
c2i();
function c2i() {
  camera.read(function(err, im) {
    if (err) throw err;

    im.detectObject('./node_modules/opencv/data/haarcascade_frontalface_alt2.xml', {}, function(err, faces) {
      if (err) throw err;

      for (var i = 0; i < faces.length; i++) {
        face = faces[i];
        im.rectangle([face.x, face.y], [face.width, face.height], rectColor, rectThickness);
      }
      //var buf= Buffer.from(im,'base64');
      socket.emit('frame', { buffer: im.toBuffer()},function(err){
        if (err) throw err;
        setTimeout(function(){
          c2i();
        },100);
      });
    });
  });
}
*/
};
