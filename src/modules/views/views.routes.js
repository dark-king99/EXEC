import express from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import {
  getAccountView,
  getAnalyticsView,
  getCrmView,
  getHomeView, 
  getMarketingView,
  getNetworkView
} from "./views.controller.js";

const router = express.Router();

router.get("/home", authenticate, getHomeView);
router.get("/account", authenticate, getAccountView);
router.get("/analytics", authenticate, getAnalyticsView);
router.get("/crm", authenticate, getCrmView);
router.get("/marketing", authenticate, getMarketingView);
router.get("/network", authenticate, getNetworkView);

export default router;