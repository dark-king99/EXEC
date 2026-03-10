import prisma from "../../config/database.js";
import { assignPermissionToRole, getRolePermissions } from "./role.service.js";

export const addPermissionToRole = async (req, res) => {
  try {

    const { roleId, permissionId } = req.body;

    const mapping = await assignPermissionToRole(roleId, permissionId);

    res.status(201).json(mapping);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listRolePermissions = async (req, res) => {
  try {

    const { roleId } = req.params;

    const permissions = await getRolePermissions(roleId);

    res.json(permissions);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listRoles = async (req, res) => {
    try {
  
      const roles = await prisma.role.findMany({
        where: {
          tenantId: req.user.tenantId
        }
      });
  
      res.json(roles);
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const createTenantRole = async (req, res) => {
    try {
  
      const { name } = req.body;
  
      const role = await prisma.role.create({
        data: {
          name,
          tenantId: req.user.tenantId
        }
      });
  
      res.status(201).json(role);
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };