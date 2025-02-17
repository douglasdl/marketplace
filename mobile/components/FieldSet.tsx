import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { Icon } from "./Icon";
import { useEffect, useState } from "react";
import { Button } from "./Button";

interface FieldSetProps {
  label: string
  control: any
  name: string
  placeholder?: string
  type: "name" | "phone" | "email" | "password"
  errorMessage?: string | null
}

const iconMap = {
  name: "UserIcon",
  phone: "CallIcon",
  email: "Mail02Icon",
  password: "AccessIcon"
} as const;

const rulesMap = {
  name: "Informe o nome",
  phone: "Informe o telefone",
  email: "Informe o e-mail",
  password: "Informe a senha"
} as const;

export function FieldSet({ label, control, name, type = "name", placeholder, errorMessage = null }: FieldSetProps) {
  const [isVisible, setIsVisible] = useState(false);
  const leftIcon = iconMap[type];
  const rules = rulesMap[type];

  useEffect(() => {

  }, [isVisible])

  return (
    <View className="">
      <Text className="text-gray-300 uppercase text-xs font-medium">{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={{ required: rules }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <View className="flex-row w-full items-center border-b border-b-gray-200">
              <Icon name={leftIcon} color={value === "" ? "#949494" : "#F24D0D"} />
              <TextInput
                placeholder={placeholder}
                placeholderTextColor="#949494"
                className="px-2 py-4 flex-1 rounded"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={type === "password" && !isVisible}
              />
              {type === "password" && 
                <Button 
                  variation="ghost" 
                  iconLeft={isVisible ? "ViewIcon" : "ViewOffIcon"}
                  onPress={() => setIsVisible(!isVisible)} 
                />
              }
            </View>
            <Text className="text-red-600">
              {errorMessage}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
