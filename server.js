
require("dotenv").config();
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(process.env.MEDIA_DIR))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
