 //Zod
 import { z } from "zod";

export  const productoValidator = z.object({
    category: z.string(),
    description: z.string(),
    id: z.number(),
    image: z.string(),
    rating: z.object({
      rate: z.number(),
      count: z.number(),
    }),
    price: z.number(),
    title: z.string(),
  });
  type productoValidator = z.infer<typeof productoValidator>;
  export const apiValidator = z.array(productoValidator);
  type apiValidator = z.infer<typeof apiValidator>;