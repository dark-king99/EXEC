router.get(
    "/inventory",
    requireAuth,
    requireRole("ENTERPRISE_ADMIN", "EMPLOYEE"),
    controller.getInventory
  );
  
  router.post(
    "/settings",
    requireAuth,
    requireRole("ENTERPRISE_ADMIN"),
    controller.updateSettings
  );