// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import runwareRoutes from "./runware.js";

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/", runwareRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});