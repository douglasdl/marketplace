import { Text, TextInput, TextInputProps, View } from "react-native"
import { Icon } from "./Icon"
import { Button } from "./Button"

export interface SearchBoxProps extends TextInputProps {
  onOpenFilter: () => void
}

export function SearchBox({ onOpenFilter, ...rest }: SearchBoxProps) {
  return (
    <View className="w-full flex-row gap-4 items-end">
      <View className="flex-row items-center border-b border-b-gray-200 flex-1 py-3 px-0.5 gap-2">
        <Icon name="Search01Icon" size={24} color="#949494" />
        <TextInput 
          placeholder="Pesquisar" 
          className="text-gray-200 text-base font-normal"
          {...rest} 
        />
      </View>
      <Button
        title=""
        variation="outline"
        iconLeft="FilterVerticalIcon"
        onPress={onOpenFilter}
      />
    </View>
  )
}