import { useNavigation } from "expo-router"
import { useEffect } from "react"
import { LoginHeader } from "@/components/LoginHeader"
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native"
import { Button } from "@/components/Button"
import { RegisterForm } from "@/components/RegisterForm"
import { ImageInput } from "@/components/ImageInput"
import { api } from "@/services/api"
import { FormDataProps } from "@/schemes/signUpSchema"
import { AppError } from "@/utils/AppError"
import Toast from "react-native-toast-message"

export default function Register() {

  const navigation = useNavigation();

  async function handleRegister({ name = "Douglas", phone = "(55)99999-9999", email = "douglas@hotmail.com", avatarId = "1", password = "123456", passwordConfirmation = "123456" }: FormDataProps) {
    try {
      const response = await api.post('/sellers', { name, phone, email, avatarId, password, passwordConfirmation })
      console.log(response.data);
      Toast.show({
        type: "success",
        text1: "Nova Conta",
        text2: "Conta cadastrada com sucesso!",
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Não foi possível criar a conta. Tente novamente mais tarde.";
      Toast.show({
        type: "error",
        text1: "Erro ao registrar",
        text2: title,
      });
    }
  }

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // className="px-10 pt-16 items-center w-full flex-1"
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >

      <ScrollView
        className="flex-1 px-10 pt-16"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="gap-10 flex-1 justify-between">
          <LoginHeader
            title="Crie sua conta"
            subtitle="Informe os seus dados pessoais e de acesso"
          />

          <ImageInput onSelectImage={console.log} />

          <RegisterForm 
            onRegister={handleRegister}
          />

          <View className="pb-24">
            <Text>
              Já tem uma conta?
            </Text>
            <Button
              title="Acessar"
              variation="outline"
              iconRight="ArrowRight02Icon"
              onPress={() => navigation.navigate("login")}
            />
          </View>
        </View>
      </ScrollView>
      <Toast />
    </KeyboardAvoidingView>
  )
}