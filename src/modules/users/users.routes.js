import express from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { listUsers, inviteUser } from "./users.controller.js";

const router = express.Router();

router.get(
  "/admin/users",
  authenticate,
  requireRole("enterprise_admin"),
  listUsers
);

router.post(
  "/admin/invite",
  authenticate,
  requireRole("enterprise_admin"),
  inviteUser
);

export default router;