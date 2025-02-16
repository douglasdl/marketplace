import { z } from "zod"

export const signUpSchema = z.object({
  name: z.string().min(1, "Informe o nome."),
  phone: z.string().min(8, "Informe o telefone."),
  email: z.string().min(1, "Informe o e-mail.").email("E-mail inválido."),
  password: z.string().min(6, "A senha deve ter pelo menos 6 dígitos."),
  password_confirm: z.string().min(1, "Confirme a senha."),
}).refine(data => data.password === data.password_confirm, {
  message: "As senhas devem ser iguais.",
  path: ["password_confirm"]
});

export type FormDataProps = z.infer<typeof signUpSchema>;