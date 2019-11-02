import { Router } from "express";

const router = Router();

router.get("/", function(req, res) {
  res.status(200).send(`Welcome to API:V1`);
});

export default router;
