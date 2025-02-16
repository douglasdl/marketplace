import { Text, View } from "react-native"
import { Button } from "./Button"

export interface FilterProps {
  onFilter: () => void
  onClose: () => void
}

export function FilterPopup({ onClose, onFilter }: FilterProps) {
  return (
    <View className="absolute top-0 bottom-0 right-0 left-0 bg-black/60">
      <View className="absolute bottom-0 right-0 left-0 bg-white rounded-t-3xl px-6 pt-12 pb-8 gap-6 z-50">
        <Text className="">Filtrar anúncios</Text>
        <Text className="">Valor</Text>
        <View className="flex-row">
          <Text className="flex-1">De</Text>
          <Text className="flex-1">Até</Text>
        </View>
        <Text className="">Categoria</Text>
        <Text className="">[ ] Brinquedo</Text>
        <Text className="">[ ] Móvel</Text>
        <Text className="">[ ] Papelaria</Text>
        <Text className="">[ ] Saúde e Beleza</Text>
        <Text className="">[ ] Utensílio</Text>
        <Text className="">[ ] Vestuário</Text>

        <View className="flex-row justify-between gap-3">
          <Button title="Limpar filtro" variation="outline" />
          <Button title="Filtrar" variation="solid" onPress={onFilter} />
        </View>
      </View>
    </View>
  )
}