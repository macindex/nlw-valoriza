import express from "express"

const app = express();

// PATCH => Informação específica

app.get("/test", (req, res) => {
    return res.send("Hello NLW")
})

app.listen(3000, () => console.log("Server is running"));