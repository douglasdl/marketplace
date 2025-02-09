import { useNavigation } from "expo-router"
import { useEffect } from "react"
import { LoginHeader } from "@/components/LoginHeader"
import { Text, View } from "react-native"
import { Form } from "@/components/Form";

export default function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View className="px-10 pt-16 gap-4">
      <LoginHeader
        title="Acesse sua conta"
        subtitle="Informe seu e-mail e senha para entrar"
      />
      <Form />
    </View>
  );
}
