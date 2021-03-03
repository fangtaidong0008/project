const express = require("express") // import express

const app = express() // instance express object

app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000') // port number, call-back function means what to do after starting the app,here is API address
})
