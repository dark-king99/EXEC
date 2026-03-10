import prisma from "../../config/database.js";
import bcrypt from "bcrypt";

export async function bootstrapEnterprise({
  companyName,
  companySlug,
  email,
  password,
  firstName,
  lastName
}) {

  const passwordHash = await bcrypt.hash(password, 10);

  return prisma.$transaction(async (tx) => {

    const tenant = await tx.tenant.create({
      data: {
        name: companyName,
        slug: companySlug
      }
    });

    const adminRole = await tx.role.create({
      data: {
        name: "enterprise_admin",
        tenantId: tenant.id
      }
    });

    const employeeRole = await tx.role.create({
      data: {
        name: "employee",
        tenantId: tenant.id
      }
    });

    const permissions = [
      "crm_access",
      "marketing_access",
      "network_access",
      "admin_access"
    ];

    for (const p of permissions) {
      await tx.permission.create({
        data: {
          name: p,
          roleId: adminRole.id
        }
      });
    }

    const adminUser = await tx.user.create({
      data: {
        email,
        passwordHash,
        firstName,
        lastName,
        tenantId: tenant.id,
        roleId: adminRole.id
      }
    });

    return {
      tenant,
      adminUser
    };
  });
}