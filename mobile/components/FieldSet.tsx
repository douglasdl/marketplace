import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { Icon } from "./Icon";

interface FieldSetProps {
  label: string
  control: any
  name: string
  placeholder?: string
  type: "name" | "phone" | "email" | "password"
}

const iconMap = {
  name: "UserIcon",
  phone: "CallIcon",
  email: "Mail02Icon",
  password: "AccessIcon",
} as const;

export function FieldSet({ label, control, name, type = "name", placeholder }: FieldSetProps) {
  const leftIcon = iconMap[type];
  return (
    <View className="">
      <Text className="text-gray-300 uppercase text-xs font-medium">{label}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View className="flex-row w-full items-center border-b border-b-gray-200">
            <Icon name={leftIcon} color={value === "" ? "#949494" : "#F24D0D"} />
            <TextInput
              placeholder={placeholder}
              placeholderTextColor="#949494"
              className="px-2 py-4 flex-1 rounded"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {type === "password" && <Icon name="ViewIcon" color="#666666" />}
          </View>
        )}
        name={name}
        rules={{ required: true }}
      />
    </View>
  );
}
