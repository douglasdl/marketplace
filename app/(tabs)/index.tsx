import { Filter } from "@/components/Filter";
import { Heading } from "@/components/Heading";
import { Items } from "@/components/Items";
import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";

export default function Home() {
  return (
    <View className="bg-background w-full h-screen items-center">
      <Heading />
      <View className="p-6">
        <Items />

        {/* <Link href="/login">Login</Link> */}
        {/* <Link href="/register">Register</Link> */}
        {/* <Link href="/_sitemap">Sitemap</Link> */}
      </View>
    </View>
  );
}