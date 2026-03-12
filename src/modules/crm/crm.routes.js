import express from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const router = express.Router();

router.get(
  "/deals",
  requireAuth,
  requireRole("ENTERPRISE_ADMIN", "EMPLOYEE"),
  (_req, res) => {
    res.json({ message: "Deals list" });
  }
);

router.post(
  "/team/create",
  requireAuth,
  requireRole("ENTERPRISE_ADMIN"),
  (_req, res) => {
    res.json({ message: "Team member created" });
  }
);

export default router;