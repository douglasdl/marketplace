import * as React from "react"
import { Text, View, TextInput } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { Button } from "./Button";
import { FieldSet } from "./FieldSet";

export function LoginForm() {
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
        <FieldSet type="email" label="E-mail" control={control} name="email" placeholder="mail@exemplo.br" />
        <FieldSet type="password" label="Senha" control={control} name="password" placeholder="Sua senha" />
      </View>

      
      <Button  
        title="Acessar"
        iconRight="ArrowRight02Icon" 
        onPress={handleSubmit(onSubmit)} 
      />
    </View>
  );
}