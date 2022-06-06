import express from "express";

const router = express.Router();

const homeController = router.get("/", (req, res) => {
  res.json({ message: "custom-response-header-examples-node" });
});

export default homeController;