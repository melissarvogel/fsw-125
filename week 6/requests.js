const express= require("express")
const app = express()


app.use(express.json())

app.get("/coffee", (req, res) => {
    res.send(bounty)
})


