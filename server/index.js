const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json())

app.use("/account", require("./routes/account"))


app.listen(5000, () => {
    console.log("This server is on!")
})