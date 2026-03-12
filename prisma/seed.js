import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const permissions = [
  { key: "crm.contact.read", description: "Read CRM contacts" },
  { key: "crm.contact.write", description: "Create and update CRM contacts" },
  { key: "crm.pipeline.manage", description: "Manage CRM pipelines" },
  { key: "network.connection.read", description: "Read network connections" },
  { key: "marketing.campaign.create", description: "Create marketing campaigns" },
  { key: "analytics.dashboard.view", description: "View analytics dashboard" }
];

async function main() {
  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: { key: permission.key },
      update: {
        description: permission.description
      },
      create: permission
    });
  }
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });