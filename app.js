require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const path = require("path")
const connectDB = require("./config/dbConfig")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000

//connectdb
connectDB()

app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, "/public")))

//routes
app.use("/", require("./routes/root"))
app.use("/items", require("./routes/api/items"))

app.all("*", (req,res) => {
    res.status(404)
    if(req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"))
    } else if(req.accepts("json")) {
        res.json({error:"404 Not Found"})
    } else {
        res.type("txt").send("404 Not Found")
    }
})

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
})
