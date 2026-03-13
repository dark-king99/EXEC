import express from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import {
  getAnalyticsView,
  getB2BView,
  getCampaignView,
  getCommerceCommandView,
  getCustomerDataPlatformView,
  getEmmaView,
  getMarketingAiView,
  getOverview,
  getPersonalizationView,
  getTeamsView
} from "./marketing.controller.js";

const router = express.Router();

router.get("/", authenticate, getOverview);
router.get("/marketing-ai", authenticate, getMarketingAiView);
router.get("/campaign", authenticate, getCampaignView);
router.get("/emma", authenticate, getEmmaView);
router.get("/b2b", authenticate, getB2BView);
router.get("/personalization", authenticate, getPersonalizationView);
router.get("/teams", authenticate, getTeamsView);
router.get("/analytics", authenticate, getAnalyticsView);
router.get("/customer-data-platform", authenticate, getCustomerDataPlatformView);
router.get("/commerce-command", authenticate, getCommerceCommandView);

export default router;