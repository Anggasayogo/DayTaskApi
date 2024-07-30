import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import { converter, notFound, handler } from "../api/middleware/error.mjs"
import routes from "../routes/v1/index.mjs"


// Init express
const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet())
app.use(cors());
app.use('/api/v1', routes);
app.get('/', async (req, res) => {
    res.send({
        status: "success",
        code: 200 
    })
})

// if error is not an instanceOf APIError, convert it.
app.use(converter);
// catch 404 and forward to error handler
app.use(notFound);
// error handler, send stacktrace only during development
app.use(handler);



export default app