import express from "express";

const router = express.Router();

const logAllHeaders = router.get("/", (req, res) => {
  res.json({ message: req.headers });
});

export default logAllHeaders;