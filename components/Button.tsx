import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { HugeiconsIcon } from "@hugeicons/react-native"
import {
  Mail02Icon,
  ViewIcon,
  ViewOffIcon,
  AccessIcon,
  ArrowRight02Icon,
  Upload04Icon,
  ChartHistogramIcon,
  PackageIcon,
  PlusSignIcon,
  Calendar04Icon,
  Logout01Icon,
  Search01Icon,
  SaleTag02Icon,
  Store04Icon,
  UserMultipleIcon,
  ArrowLeft02Icon,
  AlertCircleIcon,
  ArrowDown01Icon,
  ArrowUp01Icon,
  Tick02Icon,
  Cancel01Icon,
  ImageUploadIcon,
  CallIcon,
  UserIcon,
  FilterVerticalIcon,
} from "@hugeicons/core-free-icons"

const iconMap = {
  Mail02Icon,
  ViewIcon,
  ViewOffIcon,
  AccessIcon,
  ArrowRight02Icon,
  Upload04Icon,
  ChartHistogramIcon,
  PackageIcon,
  PlusSignIcon,
  Calendar04Icon,
  Logout01Icon,
  Search01Icon,
  SaleTag02Icon,
  Store04Icon,
  UserMultipleIcon,
  ArrowLeft02Icon,
  AlertCircleIcon,
  ArrowDown01Icon,
  ArrowUp01Icon,
  Tick02Icon,
  Cancel01Icon,
  ImageUploadIcon,
  CallIcon,
  UserIcon,
  FilterVerticalIcon,
} as const;

type IconName = keyof typeof iconMap;

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  variation?: "solid" | "outline";
  size?: "small" | "medium";
  iconLeft?: IconName;
  iconRight?: IconName;
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
  const buttonSize = size === "medium" ? "w-14 h-14" : "w-10 h-10";

  const bgSpacing = size === "medium" ? "py-4 px-5 gap-3" : "py-3 px-4 gap-2";
  const bgSize = isIconOnly ? buttonSize : "";
  const bgColor =
    variation === "solid" ? "bg-orange-base border-transparent" : "bg-transparent border-orange-base";
  const textColor = variation === "solid" ? "text-white" : "text-orange-base";

  const LeftIcon = iconLeft ? iconMap[iconLeft] : null;
  const RightIcon = iconRight ? iconMap[iconRight] : null;

  return (
    <TouchableOpacity
      className={`rounded-xl flex-row items-center justify-center border ${bgColor} ${bgSpacing} ${bgSize}`}
      // style={isIconOnly ? { width: buttonSize, height: buttonSize } : {}}
      {...rest}
    >
      {LeftIcon && <HugeiconsIcon icon={LeftIcon} size={iconSize} color={variation === "solid" ? "white" : "#F24D0D"} strokeWidth={1.5} />}
      {title && <Text className={`font-medium text-${size === "medium" ? "base" : "sm"} ${textColor}`}>{title}</Text>}
      {RightIcon && <HugeiconsIcon icon={RightIcon} size={iconSize} color={variation === "solid" ? "white" : "orange"} strokeWidth={1.5} />}
    </TouchableOpacity>
  );
}