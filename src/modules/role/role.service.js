import prisma from "../../config/database.js";

export const assignPermissionToRole = async (roleId, permissionId) => {
  return prisma.permission.create({
    data: {
      roleId,
      permissionId
    }
  });
};

export const getRolePermissions = async (roleId) => {
  return prisma.permission.findMany({
    where: { roleId },
    include: {
      permission: true
    }
  });
};