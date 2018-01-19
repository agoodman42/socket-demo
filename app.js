const io = require('socket.io')()
const db = require('./database')

io.on('connection', async function (client) {
  // Fetch the one marker from DB.
  const marker = await db('markers').first()

  // When the client connects, send them the marker.
  client.emit('initialMarker', marker)

  // When the client sends updated latLng object, update marker in DB and notify
  // other clients of updated position.
  client.on('moveMarker', async function (data) {
    const marker = await db('markers')
      .first()
      .update({ lat: data.lat, lng: data.lng })
      .returning('*')

    io.emit('updatedMarker', marker)
  })
})

io.listen(3000)
