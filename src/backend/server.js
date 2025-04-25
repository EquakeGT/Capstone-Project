import "dotenv/config";
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Fix: Ensure database credentials are correctly loaded
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "temp_capstone",
});

// ✅ Check MySQL Connection
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: ", err);
    return;
  }
  console.log("✅ Connected to MySQL database!");
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5173");
});
