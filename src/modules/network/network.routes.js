import express from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { getInventory, updateSettings } from "./network.controller.js";

const router = express.Router();

router.get(
  "/inventory",
  authenticate,
  requireRole("ENTERPRISE_ADMIN", "EMPLOYEE"),
  getInventory
);

router.post(
  "/settings",
  authenticate,
  requireRole("ENTERPRISE_ADMIN"),
  updateSettings
);

export default router;