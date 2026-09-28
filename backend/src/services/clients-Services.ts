import { PrismaClient } from "../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

type ClientInput = { name: string; surname: string; email: string };

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! });

class ClientsService {
  private prisma = new PrismaClient({ adapter });

  findAll() {
    return this.prisma.client.findMany();
  }

  findById(id: number) {
    return this.prisma.client.findUnique({ where: { id } });
  }

  create(client: ClientInput) {
    return this.prisma.client.create({ data: client });
  }

  async update(id: number, changes: Partial<ClientInput>) {
    const exists = await this.prisma.client.findUnique({ where: { id } });
    if (!exists) return null;

    return this.prisma.client.update({ where: { id }, data: changes });
  }

  async remove(id: number) {
    const exists = await this.prisma.client.findUnique({ where: { id } });
    if (!exists) return false;

    await this.prisma.client.delete({ where: { id } });
    return true;
  }
}

export { ClientsService };
