import express from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { getNetworkAlertsView,
  getOverview,
  getNetworkDocumentationView,
  getNetworkInventoryView,
  getNetworkSettingsView,
  getNetworkTopologyMapView,
  getNetworkTrafficView, updateSettings } from "./network.controller.js";

const router = express.Router();

router.get("/network", authenticate, getOverview);
router.get("/network/inventory", authenticate, requireRole("ENTERPRISE_ADMIN", "EMPLOYEE"), getNetworkInventoryView);
router.get("/network/documentation", authenticate, getNetworkDocumentationView);
router.get("/network/alerts", authenticate, getNetworkAlertsView);
router.get("/network/traffic", authenticate, getNetworkTrafficView);
router.get("/network/topology-map", authenticate, getNetworkTopologyMapView);
router.get("/network/settings", authenticate, getNetworkSettingsView);


router.post(
  "/settings",
  authenticate,
  requireRole("ENTERPRISE_ADMIN"),
  updateSettings
);

export default router;