import { z } from "zod";

export const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  phone: z
    .string()
    .min(10, { message: "Must be a valid mobile number" })
    .max(14, { message: "Must be a valid mobile number" }),
  address: z
    .string()
    .min(6, { message: "Address must be at least 6 characters long" }),
});
