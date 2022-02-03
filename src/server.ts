import express from "express"

const app = express();

// PATCH => Informação específica

app.get("/test", (req, res) => {
    return res.send("Hello NLW")
})

app.post("/test-post", (req, res) => {
    return res.send("Olá post method")
})

app.listen(3000, () => console.log("Server is running"));