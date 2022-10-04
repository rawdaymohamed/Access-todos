import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "./config";
import todoRoutes from "./routes/todo.routes";
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/", todoRoutes);
// Database Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect database ${config.mongoUri}`);
});

app.listen(8080, () => console.log("Server listening on port 8080"));
