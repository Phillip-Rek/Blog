import * as express from "express"
const app = express();
import * as mongoose from 'mongoose';
require("dotenv").config();
import * as methodOverride from 'method-override';
import * as articlesRouter from './routes/articles.js'

const PORT = process.env.PORT || 3000;

mongoose.connect(
    "mongodb://localhost:27017",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        const msg = err ? "db connectionfailed, " + err : "db connected successfully";
        console.log(msg)
    }
)

//@ts-ignore
app.use(express.urlencoded({ extended: false }));
//@ts-ignore
app.use(methodOverride("_method"));
//@ts-ignore
app.use("/articles", articlesRouter)
//@ts-ignore
app.listen(PORT, (e) => {
    return e || console.log(`server started on port ${PORT}`)
});