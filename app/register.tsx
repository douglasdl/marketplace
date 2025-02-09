import { useNavigation } from "expo-router"
import { useEffect } from "react"
import { LoginHeader } from "@/components/LoginHeader"
import { View } from "react-native"

export default function Register() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View className="px-10 pt-16">
      <LoginHeader
        title="Crie sua conta"
        subtitle="Informe os seus dados pessoais e de acesso"
      />
    </View>
  )
}