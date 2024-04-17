import { z } from "zod";

const padraoCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;



export const LibrarySchema = z.object({
  id: z.string().uuid(),
  name: z.string().max(60),
  cnpj: z.string()
    .trim()
    .regex(padraoCNPJ,{message: "Invalid CNPJ! Must be xx.xxx.xxx/xxxx-xx"}),
  logo: z.any(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type LibraryType = z.infer<typeof LibrarySchema>;

export const LibraryArraySchema = z.array(LibrarySchema);

export const LibraryInputSchema = LibrarySchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export type LibraryInputType = z.infer<typeof LibraryInputSchema>;
