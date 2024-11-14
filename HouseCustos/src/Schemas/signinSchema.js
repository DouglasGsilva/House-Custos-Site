import z from "zod";

const signupSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
  password: z.string().min(6, { message: "A senha precisa ser digitada" }),
});

export default signupSchema;
