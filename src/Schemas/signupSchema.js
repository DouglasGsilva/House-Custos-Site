import z from "zod";

const signupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve ter no minimo 3 caracteres" })
    .transform((name) =>
      name
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    ),
  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
  password: z
    .string()
    .min(6, { message: "A senha precisa ter no mínimo 6 caracteres" }),
});

export default signupSchema;
