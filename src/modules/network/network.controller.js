import {
    getTenantInventory,
    updateTenantNetworkSettings
  } from "./network.service.js";
  
  export const getInventory = async (req, res) => {
    try {
      const data = await getTenantInventory(req.user.tenantId);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateSettings = async (req, res) => {
    try {
      const data = await updateTenantNetworkSettings(req.user.tenantId, req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };