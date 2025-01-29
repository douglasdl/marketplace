import { Image } from "react-native"

interface AvatarProps {
  photo: string
  size?: 'sm' | 'lg'
}

export function Avatar({ photo, size = 'sm' }: AvatarProps) {
  const dimensions = size === 'sm' ? 56 : 120;
  return (
    <Image 
      source={{uri: photo}}
      width={dimensions}
      height={dimensions}
      className="border border-shape rounded-xl"
    />
  )
}