import * as React from "react"
import { Text, View } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { Button } from "./Button"
import { FieldSet } from "./FieldSet"

export function RegisterForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View className="gap-10">
      <View className="gap-5">
        <FieldSet type="name" label="Nome" control={control} name="name" placeholder="Seu nome completo" />
        <FieldSet type="phone" label="Telefone" control={control} name="phone" placeholder="(00) 00000-0000" />
        
        <Text className="text-gray-500 text-base font-bold mt-5">Acesso</Text>
        
        <FieldSet type="email" label="E-mail" control={control} name="email" placeholder="mail@exemplo.br" />
        <FieldSet type="password" label="Senha" control={control} name="password" placeholder="Sua senha" />
        <FieldSet type="password" label="Senha" control={control} name="password" placeholder="Sua senha" />
      </View>


      
      <Button  
        title="Cadastrar"
        iconRight="ArrowRight02Icon" 
        onPress={handleSubmit(onSubmit)} 
      />
    </View>
  );
}