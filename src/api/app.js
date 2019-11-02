import BodyParser from "body-parser";
import MainRouteV1 from "./v1/routes";
import cors from "cors";

const express = require("express");
const app = express();

app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//MAIN ROUTE FOR API V1
app.use(`/api/v1/`, MainRouteV1);

module.exports = app;
