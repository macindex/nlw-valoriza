import express from "express"
import "reflect-metadata"
import { router } from "./routes";

import "./database"

const app = express();

// // PATCH => Informação específica

// app.get("/test", (req, res) => {
//     return res.send("Hello NLW")
// })

// app.post("/test-post", (req, res) => {
//     return res.send("Olá post method")
// })

app.use(router);

app.listen(3000, () => console.log("Server is running"));
