import * as React from "react"
import { Text, View } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { Button } from "./Button"
import { FieldSet } from "./FieldSet"
import { FormDataProps, signUpSchema } from "@/schemes/signUpSchema"
import { zodResolver } from "@hookform/resolvers/zod"

interface RegisterFormProps {
  onRegister: (data: FormDataProps) => void
}

export function RegisterForm({ onRegister }: RegisterFormProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "Douglas Dias Leal",
      phone: "(55) 99999-9999",
      email: "douglas_san@hotmail.com",
      avatarId: null,
      password: "123456",
      passwordConfirmation: "123456"
    },
  });

  return (
    <View className="gap-10">
      <View className="gap-5">
        <FieldSet type="name" label="Nome" control={control} name="name" placeholder="Seu nome completo" />
        <FieldSet type="phone" label="Telefone" control={control} name="phone" placeholder="(00) 00000-0000" />
        
        <Text className="text-gray-500 text-base font-bold mt-5">Acesso</Text>
        
        <FieldSet type="email" label="E-mail" control={control} name="email" placeholder="mail@exemplo.br" />
        <FieldSet type="password" label="Senha Atual" control={control} name="password" placeholder="Sua senha" />
        <FieldSet type="password" label="Nova Senha" control={control} name="passwordConfirmation" placeholder="Sua nova senha" />
      </View>

      <Button  
        title="Cadastrar"
        iconRight="ArrowRight02Icon" 
        onPress={handleSubmit(onRegister)} 
      />
    </View>
  );
}