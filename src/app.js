require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const bookmarksRouterServer = require("./bookmarks-server-store/bookmarks-router");

const app = express();

app.use(
  morgan(NODE_ENV === "production" ? "tiny" : "common", {
    skip: () => NODE_ENV === "test",
  })
);
app.use(helmet());
app.use(cors());
app.use(validateBearerToken);

app.use();

module.exports = app;
