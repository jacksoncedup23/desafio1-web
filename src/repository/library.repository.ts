import prisma from "../database";
import { LibraryInputType, LibraryType } from "../schemas/library.schema";
/*import {
  ShelfInputFilterType,
  ShelfInputType,
  ShelfType,
} from "../schemas/shelf.schema";
*/

export class LibraryRepository {
  async create({ name, cnpj, logo }: LibraryInputType): Promise<LibraryType> {
    return await prisma.library.create({
      data: {
        name,
        cnpj,
        logo
      },
    });
  }

  async findById(id: string): Promise<LibraryType | null> {
    return await prisma.library.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<LibraryType[]> {
    return await prisma.library.findMany();
  }

  async update(id: string, { name, cnpj, logo }: LibraryInputType): Promise<LibraryType> {
    return await prisma.library.update({
      where: {
        id,
      },
      data: {
        name,
        cnpj,
        logo,
      },
    });
  }

  async delete(id: string): Promise<LibraryType> {
    return await prisma.library.delete({
      where: {
        id,
      },
    });
  }
}
