import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/prisma";
import type { PrismaClient } from "@prisma/client";
import { DMMFClass } from "@prisma/client/runtime";

AdminJS.registerAdapter({ Database, Resource });

export const getAdminRouter = (
  prisma: PrismaClient,
  resources: Array<any>
) => {
  // `_baseDmmf` contains necessary Model metadata. `PrismaClient` type doesn't have it included
  const dmmf = (prisma as any)._baseDmmf as DMMFClass;

  const admin = new AdminJS({ resources });

  const router = AdminJSExpress.buildRouter(admin);

  return router;
};
