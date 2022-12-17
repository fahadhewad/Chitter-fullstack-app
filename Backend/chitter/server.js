import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import login from './routes/login.js';
import register from './routes/register.js';
import addPeep from './routes/addPeep.js';
import getPeeps from './routes/getPeeps.js';

const app = express();

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const host = process.env.HOST;
const port = process.env.PORT;
const dburi = process.env.DBURI;

const main = async () => {
    console.log(`Connecting to database at ${dburi}`);
    await mongoose.connect(dburi);
}

main().then(() => console.log(`Connected to DB`)).catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.use(`/login`, login)
app.use("/register", register)
app.use("/addPeep", addPeep)
app.use("/getPeeps", getPeeps)

const server = app.listen(port, host, () => {
    console.log(`App listening on http://${host}:${port}`);
});

export default server;