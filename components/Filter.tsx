import { Text, View } from "react-native"
import { FieldSet } from "./FieldSet"
import { SearchBox } from "./SearchBox"

export interface FilterProps {
  
}

export function Filter({  }: FilterProps) {
  return (
    <View className="flex-col items-center justify-between w-full gap-1">
      <Text className="text-sm text-gray-500 text-left w-full">Explore produtos</Text>
      <SearchBox />
    </View>
  )
}