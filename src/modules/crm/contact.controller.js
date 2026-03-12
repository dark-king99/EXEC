import prisma from "../../config/database.js";
import { createTenantContact, findContactsByTenant } from "./crm.service.js";

export const listContacts = async (req, res) => {
  try {

    const contacts = await prisma.contact.findMany({
      where: {
        tenantId: req.user.tenantId
      }
    });

    res.json(contacts);

    res.json(await findContactsByTenant(req.user.tenantId));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createContact = async (req, res) => {
  try {

    const { name, email } = req.body;

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        tenantId: req.user.tenantId
      }
    });

    res.status(201).json(contact);

    res.status(201).json(await createTenantContact(req.user.tenantId, req.body));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};