import { useNavigation } from "expo-router"
import { useEffect } from "react"
import { LoginHeader } from "@/components/LoginHeader"
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native"
import { LoginForm } from "@/components/LoginForm"
import { Button } from "@/components/Button"

export default function Login() {
  const navigation = useNavigation();

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
            <LoginForm />
            
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
