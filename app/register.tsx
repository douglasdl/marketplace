import { useNavigation } from "expo-router"
import { useEffect } from "react"
import { LoginHeader } from "@/components/LoginHeader"
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native"
import { Button } from "@/components/Button"
import { RegisterForm } from "@/components/RegisterForm"
import { ImageInput } from "@/components/ImageInput"

export default function Register() {
  const navigation = useNavigation();

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

          <RegisterForm />

          <View className="h-52">
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
    </KeyboardAvoidingView>
  )
}