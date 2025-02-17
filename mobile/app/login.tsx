import { useRouter } from "expo-router"
import { useNavigation } from "expo-router"
import { useEffect } from "react"
import { LoginHeader } from "@/components/LoginHeader"
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native"
import { Button } from "@/components/Button"
import { FieldSet } from "@/components/FieldSet"
import { useForm } from "react-hook-form"

export default function Login() {
  const router = useRouter();
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  });

  function handleLogin(data: { email: string; password: string }) {
    console.log("Login data:", data);
    //router.replace('/(tabs)')
  }

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="px-10 pt-16 gap-4 h-full min-h-screen">
          <LoginHeader
            title="Acesse sua conta"
            subtitle="Informe seu e-mail e senha para entrar"
          />
          <View className="flex-1 justify-between">
            <View className="gap-10">
              <View className="gap-5">
                <FieldSet 
                  control={control} 
                  name="email" 
                  type="email" 
                  label="E-mail" 
                  placeholder="mail@exemplo.br" 
                  errorMessage={errors.email?.message} 
                />
                <FieldSet 
                  control={control} 
                  name="password" 
                  type="password" 
                  label="Senha" 
                  placeholder="Sua senha" 
                  errorMessage={errors.password?.message} 
                />
              </View>

              <Button  
                title="Acessar"
                iconRight="ArrowRight02Icon" 
                onPress={handleSubmit(handleLogin)} 
              />
            </View>
            
            <View className="mt-auto mb-10 min-h-10 gap-5">
              <Text>
                Ainda não tem uma conta?
              </Text>
              <Button
                title="Cadastrar"
                variation="outline"
                iconRight="ArrowRight02Icon"
                onPress={() => navigation.navigate("register")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
