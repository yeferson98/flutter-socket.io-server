const {io} = require('../index');
//Mensaje de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => { console.log('Cliente desconectado'); });
 
    client.on('mensaje', (payload) => { 
       console.log('Mensaje', payload.name);
       io.emit('mensaje', {admin:'Nuevo Mensaje'});
    });
  });   