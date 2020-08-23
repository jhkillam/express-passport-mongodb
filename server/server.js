require('dotenv').config()

const express = require("express")
const app = express()
const port = process.env.PORT

app.get("/", (req, res) => res.send("Success!"))

app.listen(port, () => console.log(`Server running on port ${port}`))