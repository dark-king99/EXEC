export const getTenantInventory = async (tenantId) => {
    return {
      tenantId,
      nodes: 0,
      activeConnections: 0,
      status: "ok"
    };
  };
  
  export const updateTenantNetworkSettings = async (tenantId, payload) => {
    return {
      tenantId,
      settings: payload,
      updatedAt: new Date().toISOString()
    };
  };