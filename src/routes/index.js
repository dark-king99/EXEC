import express from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import profileRoutes from "./profile.routes.js";
import userRoutes from "../modules/users/users.routes.js";
import roleRoutes from "../modules/role/role.routes.js";
import contactRoutes from "../modules/crm/contact.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);

router.use("/", profileRoutes);

router.use("/users", userRoutes);

router.use("/roles", roleRoutes);

router.use("/crm", contactRoutes);

router.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

export default router;