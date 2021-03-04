const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

// process.env.NODE_ENV => production or undefined

// middleware
app.use(cors());
app.use(express.json()); // req.body

if (process.env.NODE_ENV === "production") {
	// service static content
	// npm run build
	app.use(express.static(path.join(__dirname, "client/build")));
}

// ROUTES

// get all metals
app.get("/metals", async (req, res) => {
	try {
		const allMetals = await pool.query("SELECT * from metalsData");
		res.status(200).json(allMetals.rows);
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

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`server is listening on port ${PORT}`);
});
