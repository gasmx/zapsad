;(function( doc ) {

  const socket = new WebSocket('ws://34.212.9.57:5000');
  
  // Connection opened
  socket.addEventListener('open', function (event) {
    console.log('ws conectado');
      // socket.send('Hello Server!');
  });
  
  // Listen for messages
  socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
  });

  alert('Ativando...');

  var sended = false

  setInterval(
    function(){

      if (!sended) {

        console.log('tentando localizar mensagens...')

        if ($('[data-icon="pinned"]').length > 0) {
          obj = {
            "type": "mouse-move",
            "x": $('[data-icon="pinned"]').closest('.infinite-list-item')[0].offsetWidth,
            "y": $('[data-icon="pinned"]').closest('.infinite-list-item')[0].offsetHeight
          }
          socket.send(JSON.stringify(obj));
          sended = true
        }

      }

    },
    3000
  );
  
  })( document );