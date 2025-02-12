import { Image, Platform, Text, View } from "react-native"
import { Avatar } from "./Avatar"
import { Icon } from "./Icon"
import { Filter } from "./Filter"

export function Heading() {
  return (
    <View className="bg-white w-full p-6 pt-16 gap-8 rounded-b-3xl">
      <View className="w-full flex-row items-center gap-5">
        <Avatar photo="https://github.com/douglasdl.png" />
        <View className="w-full">
          <Text className="text-gray-500 font-bold text-base">Olá, Douglas!</Text>
          <View className="flex-row items-center">
            <Text className="text-orange-base text-sm items-center justify-center">Ver perfil</Text>
            <Icon name="ArrowRight02Icon" size={20} />
          </View>
        </View>
      </View>
      <Filter />
    </View>
  )
}