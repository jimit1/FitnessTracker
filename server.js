const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const apiRoutes = require("./routes/fitness-routes");
const clientRoutes = require("./routes/client-routes.js");
app.use(apiRoutes);
app.use(clientRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
