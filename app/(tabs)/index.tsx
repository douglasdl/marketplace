import { Header } from "@/components/Header";
import { Items } from "@/components/Items";
import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";

export default function Home() {
  return (
    <View className="bg-background w-full h-screen items-center p-6">
      <Header />
      <Text className="text-sm text-gray-500">Explore produtos</Text>

      <TextInput placeholder="Pesquisar" className="text-gray-200" />

      <Items />

      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/_sitemap">Sitemap</Link>
    </View>
  );
}