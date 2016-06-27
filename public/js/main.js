$(document).ready(function() {

  var socket = io.connect(window.location.href);
  socket.on('hello', function (data) {
    console.log("My ID: ", data.id);
    socket.emit('respond', { message: 'Thank you for id!' });
  });

});
