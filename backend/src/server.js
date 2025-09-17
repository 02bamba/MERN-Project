import express from "express";
import noteRoute from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000
app.use(express.json()); //this middleware will parse json body
app.use(rateLimiter)

app.use("/api/notes", noteRoute)

connectDb().then(() => {
    app.listen(5000, () => {
        console.log('server running at port: ', PORT);
    })
});