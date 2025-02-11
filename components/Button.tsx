import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Icon, IconName } from "./Icon"


export interface ButtonProps extends TouchableOpacityProps {
  title?: string
  variation?: "solid" | "outline"
  size?: "small" | "medium"
  iconLeft?: IconName
  iconRight?: IconName
}

export function Button({
  title = "",
  variation = "solid",
  size = "medium",
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) {
  const isIconOnly = !!(iconLeft && !title && !iconRight);
  const iconSize = size === "medium" ? 24 : 20;
  const buttonSize = size === "medium" ? "w-14 h-14 justify-center" : "w-10 h-10 justify-center";

  const bgSpacing = size === "medium" ? "py-4 px-5 gap-3" : "py-3 px-4 gap-2";
  const bgSize = isIconOnly ? buttonSize : "justify-between";
  const bgColor =
    variation === "solid" ? "bg-orange-base border-transparent" : "bg-transparent border-orange-base";
  const textColor = variation === "solid" ? "text-white" : "text-orange-base";
  const iconColor = variation === "solid" ? "text-white" : "text-orange-base"; //#F24D0D

  return (
    <TouchableOpacity
      className={`rounded-xl flex-row items-center border ${bgColor} ${bgSpacing} ${bgSize}`}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={iconSize} color={variation === "solid" ? "white" : iconColor} />}
      {title && <Text className={`font-medium text-${size === "medium" ? "base" : "sm"} ${textColor}`}>{title}</Text>}
      {iconRight && <Icon name={iconRight} size={iconSize} color={variation === "solid" ? "white" : iconColor} />}
    </TouchableOpacity>
  );
}