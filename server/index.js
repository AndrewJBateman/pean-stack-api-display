const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { dbConfig } = require(path.join(__dirname, "db"));
const PORT = process.env.PORT || 5000;

// process.env.NODE_ENV => production or undefined

app.use(cors());

if (process.env.NODE_ENV === "production") {
  dbConfig.connection.socketPath =
    process.env.GAE_DB_SOCKET;
} else {
  dbConfig.connection.host = "127.0.0.1";
}

const knex = require("knex")(dbConfig);

// if (process.env.NODE_ENV === "production") {
//   app.use(
//     express.static(path.join(__dirname, "/dist/pean-stack-api-display/browser"))
//   );
// }

// ROUTES

//get test data
app.get("/", (req, res) => {
  res.send("Test is working");
});

app.get("/db-test", async (req, res) => {
  const testData = await knex.select().table("test-data");
  res.json(testData);
});

// get all metals data
app.get("/metals", async (req, res) => {
  try {
    const allMetals = await pool.query(
      "SELECT * FROM metalsData ORDER BY density ASC"
    );
    res.status(200).json(allMetals.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get companyPerformance data
app.get("/companyPerformance", async (req, res) => {
  try {
    const companyPerfData = await pool.query("SELECT * FROM companyPerfData");
    res.status(200).json(companyPerfData.rows);
  } catch (err) {
    res.send(err.message);
  }
});

// get framework market share data
app.get("/frameworkMarketshare", async (req, res) => {
  try {
    const frameworkMarketData = await pool.query(
      "SELECT * FROM frameworkMarketData"
    );
    res.status(200).json(frameworkMarketData.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get gauge data
app.get("/gaugeData", async (req, res) => {
  try {
    const gaugeData = await pool.query("SELECT * FROM gaugeData");
    res.status(200).json(gaugeData.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get country data
app.get("/countryData", async (req, res) => {
  try {
    const countryData = await pool.query(
      "SELECT * FROM countryData ORDER BY population DESC"
    );
    res.status(200).json(countryData.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a metal
app.get("/metals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const metal = await pool.query("SELECT * FROM metals WHERE metal_id = $1", [
      id,
    ]);
    res.status(200).json(metal.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a metal
app.post("/metals", async (req, res) => {
  try {
    const { name, symbol, density } = req.body;
    const newMetal = await pool.query(
      "INSERT INTO metals (name, symbol, density) VALUES($1, $2, $3) RETURNING *",
      [name, symbol, density]
    );
    res.status(200).json(newMetal.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a metal
app.put("/metals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, symbol, density } = req.body;
    await pool.query(
      "UPDATE metals SET (name, symbol, density) = ($1, $2, $3) WHERE metal_id = $4",
      [name, symbol, density, id]
    );

    res.status(200).json("metals table was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a metal
app.delete("/metals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM metals WHERE metal_id = $1", [id]);
    res.status(200).json("metal was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "client/build/pean-stack-api-display/index.html")
//   );
// });

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
