import prisma from "../config/database.js";

export const requirePermission = (permissionKey) => {
  return async (req, res, next) => {
    try {

      const userId = req.user.userId;

      const roles = await prisma.userRole.findMany({
        where: { userId },
        include: {
          role: {
            include: {
              rolePermissions: {
                include: {
                  permission: true
                }
              }
            }
          }
        }
      });

      const permissions = roles.flatMap(r =>
        r.role.rolePermissions.map(p => p.permission.key)
      );

      if (!permissions.includes(permissionKey)) {
        return res.status(403).json({
          message: "Permission denied"
        });
      }

      next();

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};