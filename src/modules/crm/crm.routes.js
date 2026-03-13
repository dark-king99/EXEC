import express from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import {  getCrmAccount360View,
  getCrmAnalyticsView,
  getCrmBoardVotingView,
  getCrmDatabaseView,
  getCrmDealCommandCenterView,
  getCrmPartnersView,
  getCrmPipelineTrackingView,
  getCrmReportsView,
  getCrmRevenueIntelligenceView,
  getCrmServicesIntegrationView,
  getCrmSmartView,
  getCrmTeamManagerView,
  getCrmTeamView, } from "./crm.controller.js"
const router = express.Router();

router.get("/crm", authenticate, getCrmView);
router.get("/crm/account-360", authenticate, getCrmAccount360View);
router.get("/crm/services-integration", authenticate, getCrmServicesIntegrationView);
router.get("/crm/pipeline-tracking", authenticate, getCrmPipelineTrackingView);
router.get("/crm/revenue-intelligence", authenticate, getCrmRevenueIntelligenceView);
router.get("/crm/deal-command-center", authenticate, requireRole("ENTERPRISE_ADMIN", "EMPLOYEE"),
(_req, res) => {
  res.json({ message: "Deals list" });
}, getCrmDealCommandCenterView);
router.get("/crm/smart-crm", authenticate, getCrmSmartView);
router.get("/crm/reports", authenticate, getCrmReportsView);
router.get("/crm/team", authenticate, getCrmTeamView);
router.get("/crm/team-manager", authenticate, getCrmTeamManagerView);
router.get("/crm/partners", authenticate, getCrmPartnersView);
router.get("/crm/board-voting", authenticate, getCrmBoardVotingView);
router.get("/crm/database", authenticate, getCrmDatabaseView);
router.get("/crm/analytics", authenticate, getCrmAnalyticsView);


router.post(
  "/team/create",
  requireAuth,
  requireRole("ENTERPRISE_ADMIN"),
  (_req, res) => {
    res.json({ message: "Team member created" });
  }
);

export default router;