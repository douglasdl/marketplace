import { Image, Platform, Text, View } from "react-native"
import { Avatar } from "./Avatar"

export function Header() {
  return (
    <View className="w-full flex-row items-center gap-5">
      <Avatar photo="https://github.com/douglasdl.png" />
      <View className="w-full">
        <Text className="text-gray-500 font-bold text-base">Olá, Douglas!</Text>
        <Text className="text-orange-base text-sm">Ver perfil</Text>
      </View>
    </View>
  )
}