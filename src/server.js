const { join } = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const app = express()
const PORT = 80

app.use(favicon(join(__dirname, '..', 'views', 'public', 'favicon.ico')))
app.set('views', join(__dirname, '..', 'views', 'public'))
app.set('view engine', 'html')

// Adicionar o endpoint /health para verificações do Load Balancer
app.get('/health', (req, res) => {
    // Responde com status 200 OK e a string 'Healthy'
    res.status(200).send('Healthy');
})

// Enable the public directory for resource files
app.use('/public', express.static(
  join(__dirname, '..', 'views', 'public')
))

// reply to request with the hello world html file
app.get('/', function (req, res) {
  res.sendFile(join(__dirname, '..', 'views', 'index.html'))
})

// start a server on port 80 and log its start to our console
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
