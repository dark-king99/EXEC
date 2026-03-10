import express from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { listRoles, createTenantRole, addPermissionToRole, listRolePermissions } from "./role.controller.js";

const router = express.Router();

router.get(
  "/",
  authenticate,
  requireRole("enterprise_admin"),
  listRoles
);

router.post(
  "/",
  authenticate,
  requireRole("enterprise_admin"),
  createTenantRole
);

router.post(
    "/permission",
    authenticate,
    requireRole("enterprise_admin"),
    addPermissionToRole
  );
  
  router.get(
    "/:roleId/permissions",
    authenticate,
    requireRole("enterprise_admin"),
    listRolePermissions
  );

export default router;