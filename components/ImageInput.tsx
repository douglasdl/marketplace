import { Controller } from "react-hook-form"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { Icon } from "./Icon"

interface ImageInputProps {
  onSelectImage: () => void
}

export function ImageInput({ onSelectImage }: ImageInputProps) {

  
  
  return (
    <View className="w-full items-center justify-center">
      <TouchableOpacity 
        onPress={onSelectImage}
        className="w-32 h-32 bg-shape p-11 rounded-xl"  
      >
        <Icon name="ImageUploadIcon" color="#F24D0D" />
      </TouchableOpacity>
    </View>
  )
}