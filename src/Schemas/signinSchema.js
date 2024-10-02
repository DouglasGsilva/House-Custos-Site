import z from "zod";

const signupSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
  password: z
    .string()
    .min(6, { message: "A senha precisa ter no mínimo 6 caracteres" }),
});

export default signupSchema;
