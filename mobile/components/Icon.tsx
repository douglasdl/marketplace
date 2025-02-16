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

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export function Icon({ name, size = 24, color = "#F24D0D", strokeWidth = 1.5 }: IconProps) {
  const SelectedIcon = iconMap[name];
  return (
    <HugeiconsIcon icon={SelectedIcon} size={size} color={color} strokeWidth={strokeWidth} />
  )
}