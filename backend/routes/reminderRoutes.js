import express from "express";

import {
  createReminder,
  getReminders,
  updateReminder,
  deleteReminder,
} from "../controllers/reminderController.js";

const router = express.Router();

router.post("/add", createReminder);

router.get("/", getReminders);

router.put("/:id", updateReminder);

router.delete("/:id", deleteReminder);

export default router;