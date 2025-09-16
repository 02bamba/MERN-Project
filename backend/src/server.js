import express from "express";
import noteRoute from "./routes/notesRoutes.js";
import { connectDb } from "../config/db.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
connectDb();

const PORT = process.env.PORT || 5000
app.use(express.json());

app.use("/api/notes", noteRoute)

app.listen(5000, () => {
    console.log('server running at port: ', PORT);
})