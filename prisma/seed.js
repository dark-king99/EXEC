import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const permissions = [
  { key: "crm.contact.read" },
  { key: "crm.contact.write" },
  { key: "crm.pipeline.manage" },
  { key: "network.connection.read" },
  { key: "marketing.campaign.create" },
  { key: "analytics.dashboard.view" }
];

async function main() {
  for (const p of permissions) {
    await prisma.permission.upsert({
      where: { key: p.key },
      update: {},
      create: p
    });
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());