import * as React from "react"
import { View } from "react-native"
import { useForm } from "react-hook-form"
import { Button } from "./Button";
import { FieldSet } from "./FieldSet";

interface LoginFormProps {
  onLogin: (data: { email: string; password: string }) => void
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: { email: string, password: string }) {
    onLogin(data);
  }

  return (
    <View className="gap-10">
      <View className="gap-5">
        <FieldSet 
          type="email" 
          label="E-mail" 
          control={control} 
          name="email" 
          placeholder="mail@exemplo.br" 
          errorMessage={errors.email?.message} 
        />
        <FieldSet 
          type="password" 
          label="Senha" 
          control={control} 
          name="password" 
          placeholder="Sua senha" 
          errorMessage={errors.password?.message} 
        />
      </View>

      <Button  
        title="Acessar"
        iconRight="ArrowRight02Icon" 
        onPress={handleSubmit(onSubmit)} 
      />
    </View>
  );
}