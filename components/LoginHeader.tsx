import { Image, Text, View } from "react-native"
import logoImg from "../assets/images/Logo.png"

interface LoginHeaderProps {
  title: string
  subtitle: string
}

export function LoginHeader({ title, subtitle }: LoginHeaderProps) {
  return (
    <View className="w-full items-center">
      <Image source={logoImg} alt="Logo" className="mb-8 w-16 h-12" />
      <Text className="text-gray-500 text-2xl font-bold text-center mb-2">{title}</Text>
      <Text className="text-gray-300 text-sm font-normal text-center">{subtitle}</Text>
    </View>
  )
}