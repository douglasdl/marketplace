import { Text, View } from "react-native"

export interface CardProps {
  emoji: string
  name: string
}

export function Card({ emoji = "🦆", name = "あひる" }: CardProps) {
  return (
    <View className="flex-row items-center justify-between w-full">
      <Text className="text-5xl text-center py-4 min-w-20 max-w-20 min-h-20 max-h-20 border border-gray-100 rounded-full">{emoji}</Text>
      <Text className="text-5xl text-left w-full">{name}</Text>
    </View>
  )
}