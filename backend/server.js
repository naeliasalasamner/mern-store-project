import express from 'express';
import dotenv from 'dotenv';
import path from "path"

import { connectDb } from './config/db.js';
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html" ))
  })
}

app.listen(5001, () => {
  connectDb();
  console.log('Server started at http://localhost:' + PORT);
});
