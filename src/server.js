const app = require("./index")
const connect = require("./configs/db")
const port = process.env.PORT || 5000;
app.listen(port,async()=>{
    try {
        console.log("listening on port 5000")
        return connect()
    } catch (error) {
        console.log(error)
    }
})