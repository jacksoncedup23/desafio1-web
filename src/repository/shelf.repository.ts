import prisma from "../database";
import {
  ShelfInputFilterType,
  ShelfInputType,
  ShelfType,
} from "../schemas/shelf.schema";

export class ShelfRepository {
  async create({ name, code, library }: ShelfInputType): Promise<ShelfType> {
    return await prisma.shelf.create({
      data: {
        name,
        code,
        library_id: library.id,
      },
      include: { library: true },
    });
  }

  async findById(id: string): Promise<ShelfType | null> {

    return await prisma.shelf.findUnique({
      where: {id,},
      include: { library: true },
    });
  }

   async findAll(id_lib: string): Promise<ShelfType[]> {

    return await prisma.shelf.findMany({
      where: {
          AND: [
          { library_id: {contains: id_lib}},
        ],
      },
      include: { library: true },
    });
  }
  
  async update(id: string, { name, code, library }: ShelfInputType): Promise<ShelfType> {
    return await prisma.shelf.update({
      where: {
        id,
      },
      data: {
        name,
        code,
        library_id: library.id,
      },
      include: { library: true },
    });
  }

  async delete(id: string): Promise<ShelfType> {
    return await prisma.shelf.delete({
      where: {
        id,
      },
      include: { library: true },
    });
  }
}
