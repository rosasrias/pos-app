import express from "express";
import cors from "cors";

export const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/health", (_, res) => {
    res.json({ status: "ok", service: "pos-backend" });
  });

  return app;
}
