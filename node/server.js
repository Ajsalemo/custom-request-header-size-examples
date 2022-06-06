import express from "express";
import homeController from "./controllers/homeController.js";
import logAllHeaders from "./controllers/logAllHeaders.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(homeController);
app.use("/api/log/headers", logAllHeaders);

app.listen(port, () => console.log(`Server listening at port ${port}.`));