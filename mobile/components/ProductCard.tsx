import { Image, Text, View } from "react-native";

interface ProductCardProps {
  name: string
  image: string
  price: number
}

export function ProductCard({ name, image, price }: ProductCardProps) {
  return (
    <View className="bg-white rounded-lg p-1 gap-1 h-40 w-44">
      <Image 
        source={image} 
        className="rounded-md w-full h-24" 
        resizeMode="contain"
      />
      <View className="p-1 gap-0.5 flex-col">
        <Text className="text-xs font-normal">{name}</Text>
        <View className="flex-row items-end">
          <Text className="text-xs font-medium uppercase">R$</Text>
          <Text className="text-sm font-bold">{price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  )
}