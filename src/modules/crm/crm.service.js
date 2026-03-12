import prisma from "../../config/database.js";

export const findContactsByTenant = async (tenantId) => {
  return prisma.contact.findMany({
    where: { tenantId }
  });
};

export const createTenantContact = async (tenantId, payload) => {
  const { name, email } = payload;

  return prisma.contact.create({
    data: {
      name,
      email,
      tenantId
    }
  });
};