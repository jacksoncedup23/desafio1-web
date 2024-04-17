import { LibraryRepository } from "../repository/library.repository";
import { LibraryInputType, LibraryType } from "../schemas/library.schema";

export default class LibraryService {
  private libRepository: LibraryRepository;

  constructor() {
    this.libRepository = new LibraryRepository();
  }

  async create(data: LibraryInputType): Promise<LibraryType> {
    return await this.libRepository.create(data);
  }

  async findById(id: string): Promise<LibraryType | null> {
    return await this.libRepository.findById(id);
  }

  async findAll(): Promise<LibraryType[]> {
    return await this.libRepository.findAll();
  }

  async update(id: string, data: LibraryInputType): Promise<LibraryType> {
    return await this.libRepository.update(id, data);
  }

  async delete(id: string): Promise<LibraryType> {
    return await this.libRepository.delete(id);
  }
}
